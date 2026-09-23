// Per-title details for the book page (TitleCoverPage), keyed by the same
// kebab-case title id used everywhere else (see covers.js).
//
// readMinutes is one read-through (one path from the first chapter to an
// ending) at ~230 words a minute, measured from the story files with
// `node scripts/check-story.mjs <title-id>` — update it if a story's length
// changes. `chapters` is the longest read-through.
export const BOOK_DETAILS = {
  'ember-court': {
    // Full-length edition: 8–9 chapters depending on route, 7 endings.
    readMinutes: '20–26',
    chapters: 9,
    endings: 7,
    tropes: ['Second-chance romance', 'Fae king', 'Blood bargain', 'Forced proximity'],
    contentNotes: ['Blood magic', 'Peril and violence', 'Death (in one ending)'],
  },
  'binding-oath': {
    // Full-length edition: 8–9 chapters depending on route, 7 endings.
    readMinutes: '20–24',
    chapters: 9,
    endings: 7,
    tropes: ['Enemies to lovers', 'Magical tether', 'Thief × knight', 'Forced proximity'],
    contentNotes: ['Violence', 'Captivity and coercion'],
  },
  'salt-and-drowning': {
    // Full-length edition: 8–9 chapters depending on route, 7 endings.
    readMinutes: '20–24',
    chapters: 9,
    endings: 7,
    tropes: ['Sea-fae bargain', 'Exiled prince', 'Slow burn', 'Sister in peril'],
    contentNotes: ['Serious illness of a family member', 'Drowning imagery', 'Memory loss'],
  },
  'wardens-heir': {
    // Full-length edition: 8–9 chapters depending on route, 7 endings.
    readMinutes: '20–25',
    chapters: 9,
    endings: 7,
    tropes: ['Cursed guardian', 'Inherited bond', 'Slow burn', 'Forbidden romance'],
    contentNotes: ['Death of a parent', 'Grief', 'Mob violence'],
  },
  ashbound: {
    // Full-length edition: 8–9 chapters depending on route, 7 endings.
    readMinutes: '20–24',
    chapters: 9,
    endings: 7,
    tropes: ['Arranged marriage', 'Rival houses', 'Dragon-shifter', 'Banter'],
    contentNotes: ['War', 'Loss of a sibling (referenced)'],
  },
};

// Shared across every title: romantic scenes fade to black.
export const AGE_GUIDANCE = 'Recommended for readers 16+';
