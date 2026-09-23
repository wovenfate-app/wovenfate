/** Shown for any URL that isn't one of the app's screens (see routes.js). */
export function NotFoundPage({ onHome }) {
  return (
    <div className="page" style={{ textAlign: 'center' }}>
      <p className="cover-page-heat">Page not found</p>
      <h1 className="cover-page-title">This path leads nowhere</h1>
      <p className="cover-page-tagline">
        The page you were looking for doesn't exist — but five stories do.
      </p>
      <button className="btn-primary" onClick={onHome}>Browse the stories</button>
    </div>
  );
}
