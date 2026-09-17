// Covers live in /public/covers — a static mapping is a pragmatic
// stopgap until titles have a real upload/CMS pipeline (at which point
// this becomes title.cover_image_url from Supabase instead).
//
// Full poster art (2:3, title text baked in), not square icons — see
// .hscroll-cover in app.css for the matching aspect ratio.
export const COVER_IMAGES = {
  'ember-court': '/covers/ember-court.jpg',
  'binding-oath': '/covers/binding-oath.jpg',
  'salt-and-drowning': '/covers/salt-and-drowning.jpg',
  'wardens-heir': '/covers/wardens-heir.jpg',
  'ashbound': '/covers/ashbound.jpg',
};
