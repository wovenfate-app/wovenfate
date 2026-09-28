// The catalogue's fixed facts: one entry per title, in catalogue order.
// This is the single source for anything that needs names, taglines or
// prices outside the running app:
//   - supabase/seed.js writes them to the database (which the app reads)
//   - scripts/prerender-book-meta.mjs builds each book's link-preview page
//   - scripts/build-og-images.mjs draws each book's preview image
// Change a title here, then re-seed and rebuild.
export const TITLES = [
  {
    id: 'ember-court',
    name: 'The Ember Court',
    tagline: 'A former lover, now bound to a dying fae court, calls in a debt neither of you understood the weight of.',
    // Free as the "first book free" promo (see src/engine/pricing.js).
    // Set back to 299 to make it a paid title again.
    price_cents: 0,
  },
  {
    id: 'binding-oath',
    name: 'The Binding Oath',
    tagline: 'A thief and the dragon-blooded knight sent to catch her are magically bound together — neither can go further than a mile from the other.',
    price_cents: 299,
  },
  {
    id: 'salt-and-drowning',
    name: 'Court of Salt and Drowning',
    tagline: 'A healer bargains with the exiled prince of a sea-fae court to save her sister — and finds the price is more than she came prepared to pay.',
    price_cents: 299,
  },
  {
    id: 'wardens-heir',
    name: "The Last Warden's Heir",
    tagline: 'She inherits a centuries-old bond to the demon her bloodline was founded to guard against — and he isn’t what three hundred years of stories promised.',
    price_cents: 299,
  },
  {
    id: 'ashbound',
    name: 'Ashbound',
    tagline: 'An arranged marriage is the only thing standing between two warring dragon-shifter houses and the war that started it all reigniting.',
    price_cents: 299,
  },
];
