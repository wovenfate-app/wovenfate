// Books announced on the home page before they're live. Each one shows as
// a "Coming …" card until its id appears in the published catalogue, so
// launching the book (seeding it) retires the card with no code change.
export const COMING_SOON = [
  {
    id: 'hollow-house',
    name: 'The Hollow House',
    genre: 'Gothic horror romance',
    releaseLabel: 'Coming 24 October',
    cover: '/covers/hollow-house.jpg',
    blurb: 'You inherit a manor on the Yorkshire moors from a great-aunt you never met. The solicitor won’t stay past dark. The house kept a room ready for you, and someone keeps lighting the candles.',
    hook: '7 endings. Not all of them let you leave.',
  },
];
