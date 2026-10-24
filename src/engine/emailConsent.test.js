import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CONSENT_WORDING, savePendingConsent, pendingConsentFor, clearPendingConsent, consentRow,
} from './emailConsent.js';

const memoryStorage = () => {
  const m = new Map();
  return { getItem: (k) => (m.has(k) ? m.get(k) : null), setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) };
};

test('a pending opt-in only counts for the email it was given for', () => {
  const s = memoryStorage();
  savePendingConsent(s, '  Reader@Example.com ', 1000);
  assert.ok(pendingConsentFor(s, 'reader@example.com', 2000));
  assert.equal(pendingConsentFor(s, 'someone.else@example.com', 2000), null);
});

test('a pending opt-in expires after a week, and can be cleared', () => {
  const s = memoryStorage();
  savePendingConsent(s, 'reader@example.com', 0);
  assert.equal(pendingConsentFor(s, 'reader@example.com', 8 * 24 * 3600 * 1000), null);
  savePendingConsent(s, 'reader@example.com', 0);
  clearPendingConsent(s);
  assert.equal(pendingConsentFor(s, 'reader@example.com', 1), null);
});

test('blocked storage never throws', () => {
  const blocked = { getItem() { throw new Error('blocked'); }, setItem() { throw new Error('blocked'); }, removeItem() { throw new Error('blocked'); } };
  assert.doesNotThrow(() => savePendingConsent(blocked, 'a@b.c'));
  assert.equal(pendingConsentFor(blocked, 'a@b.c'), null);
  assert.doesNotThrow(() => clearPendingConsent(blocked));
});

test('consent rows record the wording and when consent was given or withdrawn', () => {
  const now = new Date('2026-10-24T18:00:00Z');
  const yes = consentRow({ userId: 'u1', email: 'Reader@Example.com', optedIn: true, source: 'save_account', now });
  assert.equal(yes.email, 'reader@example.com');
  assert.equal(yes.wording, CONSENT_WORDING);
  assert.equal(yes.consented_at, now.toISOString());
  assert.equal(yes.withdrawn_at, null);
  const no = consentRow({ userId: 'u1', email: 'reader@example.com', optedIn: false, source: 'account_settings', now });
  assert.equal(no.opted_in, false);
  assert.equal(no.withdrawn_at, now.toISOString());
  assert.equal('consented_at' in no, false); // keeps the original consent date on record
});
