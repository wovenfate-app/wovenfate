import { test } from 'node:test';
import assert from 'node:assert/strict';
import { normalizeCode, codeFromSearch, stripRedeemParam, redeemMessage } from './giftCodes.js';

test('normalizeCode upper-cases and drops spaces', () => {
  assert.equal(normalizeCode(' ember-ab12 cd '), 'EMBER-AB12CD');
});

test('codeFromSearch reads ?redeem=, normalised', () => {
  assert.equal(codeFromSearch('?redeem=wf-abc123&utm_source=x'), 'WF-ABC123');
  assert.equal(codeFromSearch('?utm_source=x'), null);
});

test('stripRedeemParam keeps other params', () => {
  assert.equal(stripRedeemParam('?redeem=WF-1&utm_source=x'), '?utm_source=x');
  assert.equal(stripRedeemParam('?redeem=WF-1'), '');
});

test('every server status has a message, unknown ones fall back', () => {
  for (const s of ['ok', 'already_redeemed', 'invalid', 'expired', 'used_up', 'sign_in_required']) {
    assert.ok(redeemMessage(s).length > 10, s);
  }
  assert.match(redeemMessage('weird'), /went wrong/);
});
