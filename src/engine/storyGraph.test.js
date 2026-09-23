import { test } from 'node:test';
import assert from 'node:assert/strict';
import { reachableNodeIds, isResumable } from './storyGraph.js';

const story = {
  startNode: 'a1',
  nodes: {
    a1: { choices: [{ next: 'a2' }, { branchOn: { flag: 'f', ifTrue: 'e_yes', ifFalse: 'e_no' } }] },
    a2: { choices: [{ next: 'e_yes' }] },
    e_yes: { ending: true },
    e_no: { ending: true },
    // Left over from a previous version: still present, no longer linked.
    n1: { choices: [{ next: 'n2' }] },
    n2: { ending: true },
  },
};

test('follows next and both sides of branchOn', () => {
  assert.deepEqual([...reachableNodeIds(story)].sort(), ['a1', 'a2', 'e_no', 'e_yes']);
});

test('resumes progress on a current node', () => {
  assert.equal(isResumable(story, { current_node_id: 'a2' }), true);
});

test('does not resume progress on an orphaned old node', () => {
  assert.equal(isResumable(story, { current_node_id: 'n1' }), false);
});

test('does not resume progress on a missing node', () => {
  assert.equal(isResumable(story, { current_node_id: 'gone' }), false);
});

test('no progress is not resumable', () => {
  assert.equal(isResumable(story, null), false);
});
