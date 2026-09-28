// Pricing rules shared by the landing page, book page, reader and bundle.
//
// A title with price_cents === 0 is free: every chapter is open to
// everyone, it never goes through checkout, and it isn't part of the
// bundle. (The Ember Court is free as the "first book free" promo; set its
// price back in supabase/seed.js to end that.) The server applies the same
// rules in supabase/functions/create-checkout-session.

export function isFreeTitle(title) {
  return !!title && title.price_cents === 0;
}

/** The titles the bundle covers: every title that costs something. */
export function paidTitles(titles) {
  return (titles || []).filter((t) => !isFreeTitle(t));
}

/** True once the reader owns every paid title (free ones don't count). */
export function ownsFullLibrary(titles, ownedIds) {
  const paid = paidTitles(titles);
  return paid.length > 0 && paid.every((t) => ownedIds.has(t.id));
}

/** Other titles to suggest after an ending: unowned paid titles first, catalogue order. */
export function nextTitleSuggestions(titles, currentId, ownedIds, limit = 2) {
  return paidTitles(titles)
    .filter((t) => t.id !== currentId && !ownedIds.has(t.id))
    .slice(0, limit);
}
