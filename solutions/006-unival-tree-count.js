/*
 * A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.
 * Given the root to a binary tree, count the number of unival subtrees.
 */

export function StartCountingWrapper(root) {
  // Create wrapper to track global count.
  let count = 0;

  // Recursive logic. Bumps counter when unival node is found.
  function EvalNode(node) {
    if (!node) return true;

    const leftNode = EvalNode(node.left);
    const rightNode = EvalNode(node.right);

    if (!leftNode || !rightNode) {
      return false;
    }

    if (node.left && node.left.val !== node.val) return false;
    if (node.right && node.right.val !== node.val) return false;

    count++;

    return true;
  }

  // Start.
  EvalNode(root);

  return count;
}

export function Node(val, left, right) {
  return {
    val,
    left,
    right,
  };
}
