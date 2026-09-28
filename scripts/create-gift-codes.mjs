// Creates gift codes that unlock every paid book, and lists existing ones.
//
//   node scripts/create-gift-codes.mjs "@somecreator"            one single-use code
//   node scripts/create-gift-codes.mjs "@a" "@b" "@c"             one code each
//   node scripts/create-gift-codes.mjs "Reddit giveaway" --uses 25 --days 14
//   node scripts/create-gift-codes.mjs --list                     who has redeemed what
//
// Each code comes with a one-tap link (https://www.wovenfate.app/?redeem=CODE)
// that opens the site with the code filled in. Needs SUPABASE_SERVICE_ROLE_KEY
// in .env.local, like supabase/seed.js.
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { randomInt } from 'crypto';

dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const args = process.argv.slice(2);
const flag = (name, fallback) => {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  const v = Number(args[i + 1]);
  args.splice(i, 2);
  return v;
};

if (args.includes('--list')) {
  const { data, error } = await supabase.from('gift_codes').select('code, label, redemption_count, max_redemptions, expires_at, created_at').order('created_at');
  if (error) throw error;
  console.table(data.map((c) => ({
    code: c.code, for: c.label, used: `${c.redemption_count}/${c.max_redemptions}`,
    expires: c.expires_at ? c.expires_at.slice(0, 10) : '-',
  })));
  process.exit(0);
}

const uses = flag('--uses', 1);
const days = flag('--days', null);
const labels = args.length ? args : [null];
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'; // no 0/O, 1/I/L: easy to read out and type
const makeCode = () => 'WF-' + Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join('');
const expires_at = days ? new Date(Date.now() + days * 86400000).toISOString() : null;

const rows = labels.map((label) => ({ code: makeCode(), label, max_redemptions: uses, expires_at }));
const { error } = await supabase.from('gift_codes').insert(rows);
if (error) throw error;

for (const r of rows) {
  console.log(`${r.code}  ${r.label ?? ''}  (${uses} use${uses === 1 ? '' : 's'}${days ? `, ${days} days` : ''})`);
  console.log(`   https://www.wovenfate.app/?redeem=${r.code}`);
}
