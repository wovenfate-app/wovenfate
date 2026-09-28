// Run once, after the schema is applied and your .env.local has the
// Supabase credentials: `node supabase/seed.js`
//
// Re-running this is safe (upserts) — use it whenever you add a new
// title or edit existing story content.

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
import { emberCourt } from '../src/data/stories/ember-court.js';
import { bindingOath } from '../src/data/stories/binding-oath.js';
import { saltAndDrowning } from '../src/data/stories/salt-and-drowning.js';
import { wardensHeir } from '../src/data/stories/wardens-heir.js';
import { ashbound } from '../src/data/stories/ashbound.js';
import { TITLES } from '../src/data/titles.js';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Set VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (service role, not anon) before running.');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Titles' names, taglines and prices live in src/data/titles.js (shared
// with the link-preview build); this just pairs each with its story.
const STORIES = {
  'ember-court': emberCourt,
  'binding-oath': bindingOath,
  'salt-and-drowning': saltAndDrowning,
  'wardens-heir': wardensHeir,
  ashbound,
};
const titles = TITLES.map((t) => {
  if (!STORIES[t.id]) throw new Error(`No story imported for ${t.id}`);
  return { ...t, story: STORIES[t.id] };
});

async function seed() {
  for (const title of titles) {
    const { error: titleError } = await supabase.from('titles').upsert({
      id: title.id,
      name: title.name,
      tagline: title.tagline,
      heat_level: 'fade-to-black',
      start_node: title.story.startNode,
      price_cents: title.price_cents,
      is_published: true,
    });
    if (titleError) throw titleError;

    const nodeRows = Object.entries(title.story.nodes).map(([nodeId, node]) => ({
      title_id: title.id,
      node_id: nodeId,
      chapter: node.chapter || null,
      text: node.text,
      is_ending: !!node.ending,
      is_locked: !!node.locked,
      ending_tag: node.tag || null,
      choices: node.choices || [],
    }));

    const { error: nodesError } = await supabase.from('nodes').upsert(nodeRows);
    if (nodesError) throw nodesError;

    console.log(`Seeded "${title.name}" — ${nodeRows.length} nodes.`);
  }
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
