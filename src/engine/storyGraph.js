/**
 * Every node id reachable from the story's start node by following choices
 * (both sides of a branchOn count).
 *
 * The seed script only upserts, so after a rewrite the old version's nodes
 * are still in the database and still arrive in `story.nodes` — but nothing
 * in the new version links to them. Reachability is what tells a current
 * node apart from a leftover one.
 */
export function reachableNodeIds(story) {
  const seen = new Set();
  const stack = [story.startNode];
  while (stack.length) {
    const id = stack.pop();
    const node = story.nodes[id];
    if (!node || seen.has(id)) continue;
    seen.add(id);
    for (const choice of node.choices || []) {
      if (choice.branchOn) stack.push(choice.branchOn.ifTrue, choice.branchOn.ifFalse);
      else stack.push(choice.next);
    }
  }
  return seen;
}

/**
 * Saved progress is only worth resuming if it points at a node in the
 * current version of the story. Progress saved in a replaced version
 * (a missing node, or an orphaned old one) should start the book afresh.
 */
export function isResumable(story, progress) {
  return !!progress && reachableNodeIds(story).has(progress.current_node_id);
}
