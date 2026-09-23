// Launch funnel, by where readers came from: node scripts/launch-stats.mjs [since]
// `since` is a date or ISO time (default: start of today, UTC). Needs
// SUPABASE_SERVICE_ROLE_KEY in .env.local, like supabase/seed.js.
//
// Each reader is an (anonymous or signed-in) user id. Their source is the
// first site_visited event they logged; readers with no visit event (e.g.
// from before visit tracking shipped) show as "unknown".
import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const supabase = createClient(process.env.VITE_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

const arg = process.argv[2];
const since = arg ? new Date(arg) : new Date(new Date().toISOString().slice(0, 10));
if (Number.isNaN(since.getTime())) throw new Error(`Not a date: ${arg}`);

async function all(table, columns, timeColumn) {
  const rows = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await supabase.from(table).select(columns)
      .gte(timeColumn, since.toISOString()).order(timeColumn).range(from, from + 999);
    if (error) throw new Error(`${table}: ${error.message}`);
    rows.push(...data);
    if (data.length < 1000) return rows;
  }
}

const events = await all('analytics_events', 'user_id, title_id, event_type, payload, created_at', 'created_at');
const purchases = await all('purchases', 'user_id, title_id, receipt, purchased_at', 'purchased_at');

const sourceOf = new Map();
for (const e of events) {
  if (e.event_type === 'site_visited' && e.user_id && !sourceOf.has(e.user_id)) {
    const p = e.payload || {};
    sourceOf.set(e.user_id, p.campaign ? `${p.source} / ${p.campaign}` : p.source || 'direct');
  }
}
const src = (userId) => sourceOf.get(userId) || 'unknown';

const rows = new Map();
const row = (s) => {
  if (!rows.has(s)) rows.set(s, { visitors: new Set(), readers: new Set(), paywall: new Set(), checkout: new Set(), buyers: new Set(), orders: new Set(), revenue: 0 });
  return rows.get(s);
};
for (const e of events) {
  if (!e.user_id) continue;
  const r = row(src(e.user_id));
  if (e.event_type === 'site_visited') r.visitors.add(e.user_id);
  if (e.event_type === 'chapter_viewed') r.readers.add(e.user_id);
  if (e.event_type === 'paywall_viewed') r.paywall.add(e.user_id);
  if (e.event_type === 'checkout_started') r.checkout.add(e.user_id);
}
// One Stripe session = one order; a bundle writes a purchase row per title.
const byReceipt = new Map();
for (const p of purchases) byReceipt.set(p.receipt, [...(byReceipt.get(p.receipt) || []), p]);
for (const [receipt, items] of byReceipt) {
  const r = row(src(items[0].user_id));
  r.buyers.add(items[0].user_id);
  r.orders.add(receipt);
  r.revenue += items.length >= 5 ? 10 : 2.99 * items.length;
}

const titleViews = {};
for (const e of events) if (e.event_type === 'chapter_viewed' && e.title_id) titleViews[e.title_id] = (titleViews[e.title_id] || 0) + 1;

console.log(`Since ${since.toISOString()}  (${events.length} events, ${byReceipt.size} orders)\n`);
const table = [...rows].sort((a, b) => b[1].readers.size - a[1].readers.size).map(([s, r]) => ({
  source: s,
  visitors: r.visitors.size,
  'read ch.1+': r.readers.size,
  'hit paywall': r.paywall.size,
  'began checkout': r.checkout.size,
  buyers: r.buyers.size,
  'revenue £ (list)': r.revenue.toFixed(2),
}));
console.table(table);
console.log('Chapter views by book:', titleViews);
console.log('\nRevenue is at list price (£2.99 a book, £10 a bundle), before Stripe fees; check Stripe for the real figures.');
