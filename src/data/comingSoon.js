// Books announced on the home page around their release. Before launch a
// book shows as a "Coming …" card. Once its id is in the published
// catalogue (seeded), the same card switches to "Out now" with a way in,
// until `featureUntil`, so a new book isn't stuck at the end of the
// catalogue row on release day.
export const COMING_SOON = [
  {
    id: 'hollow-house',
    name: 'The Hollow House',
    genre: 'Gothic horror romance',
    releaseLabel: 'Coming 24 October',
    outNowLabel: 'Out now',
    featureUntil: '2026-11-08',
    cover: '/covers/hollow-house.jpg',
    blurb: 'You inherit a manor on the Yorkshire moors from a great-aunt you never met. The solicitor won’t stay past dark. The house kept a room ready for you, and someone keeps lighting the candles.',
    hook: '7 endings. Not all of them let you leave.',
  },
];
