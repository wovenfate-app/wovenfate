import { UnlockTitleAction } from './UnlockTitleAction.jsx';

/**
 * Shown in place of a locked chapter. Echoes the choice the reader just
 * made and how far into the book they are — paying is easier to justify
 * when the momentum you'd be paying to continue is visible — then offers
 * the single unlock, with the bundle (passed as `children`) inside the
 * same card as the clear second option rather than a separate box.
 */
export function Paywall({ title, chosenLabel, chaptersRead, totalChapters, endings, children, ...unlockProps }) {
  // Choice labels are "Short title — longer description"; the short part
  // is what reads naturally after "You chose".
  const chosen = chosenLabel?.split(' — ')[0];

  return (
    <div className="page paywall">
      {chosen && (
        <p className="paywall-chosen">
          You chose: <em>{chosen}</em>
        </p>
      )}
      <p className="paywall-heading">Your choice unlocks the rest</p>
      {chaptersRead > 0 && totalChapters > 0 && (
        <div className="paywall-progress" aria-label={`${chaptersRead} of ${totalChapters} chapters read`}>
          <div className="paywall-progress-bar">
            <span style={{ width: `${Math.min(100, (chaptersRead / totalChapters) * 100)}%` }} />
          </div>
          <p>Chapter {chaptersRead} of {totalChapters} read</p>
        </div>
      )}
      <p className="paywall-sub">
        {title.name} continues past this point — {endings ? `${endings} endings` : 'more endings'}, your path to choose.
      </p>

      <UnlockTitleAction title={title} {...unlockProps} />

      {children && (
        <>
          <div className="paywall-or"><span>or</span></div>
          {children}
        </>
      )}
    </div>
  );
}
