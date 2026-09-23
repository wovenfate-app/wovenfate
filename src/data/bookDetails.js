// Per-title details for the book page (TitleCoverPage), keyed by the same
// kebab-case title id used everywhere else (see covers.js).
//
// readMinutes is one read-through (one path from the first chapter to an
// ending) at ~230 words a minute, measured from the story files — update
// it if a story's length changes. Every title currently has 6 chapters per
// read-through and 4 endings.
export const BOOK_DETAILS = {
  'ember-court': {
    readMinutes: '12–14',
    chapters: 6,
    endings: 4,
    tropes: ['Second-chance romance', 'Fae king', 'Blood bargain', 'Forced proximity'],
    contentNotes: ['Blood magic', 'Peril and violence'],
  },
  'binding-oath': {
    readMinutes: '13–14',
    chapters: 6,
    endings: 4,
    tropes: ['Enemies to lovers', 'Magical tether', 'Thief × knight', 'Forced proximity'],
    contentNotes: ['Violence', 'Blood'],
  },
  'salt-and-drowning': {
    readMinutes: '11–12',
    chapters: 6,
    endings: 4,
    tropes: ['Sea-fae bargain', 'Exiled love interest', 'Slow burn', 'Sister in peril'],
    contentNotes: ['Serious illness of a family member', 'Drowning imagery'],
  },
  'wardens-heir': {
    readMinutes: '11–12',
    chapters: 6,
    endings: 4,
    tropes: ['Demon guardian', 'Inherited bond', 'Slow burn', 'Forbidden romance'],
    contentNotes: ['Death of a parent', 'Grief', 'Blood'],
  },
  ashbound: {
    readMinutes: '11–13',
    chapters: 6,
    endings: 4,
    tropes: ['Arranged marriage', 'Rival houses', 'Dragon-shifter', 'Banter'],
    contentNotes: ['War', 'Loss of a sibling (referenced)'],
  },
};

// Shared across every title: romantic scenes fade to black.
export const AGE_GUIDANCE = 'Recommended for readers 16+';
