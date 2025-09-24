/*
 * Given the root to a binary tree, implement serialize(root), which serializes the tree
 * into a string, and deserialize(s), which deserializes the string back into the tree.
 *
 * The following test should pass:
 *
 * node = Node('root', Node('left', Node('left.left')), Node('right'))
 * assert deserialize(serialize(node)).left.left.val == 'left.left'
 */

export function Serialize(node) {
  const res = [];

  if (!node?.val) return null;

  res.push(node.val);
  res.push(Serialize(node.left));
  res.push(Serialize(node.right));

  return res.join(",");
}

export function Deserialize(serializedData) {
  const values = serializedData.split(",");

  // Start building the tree at index 0.
  const [tree] = EvalNode(values, 0);

  return tree;
}

function EvalNode(values, index) {
  const val = values[index];

  // Handle "empty" value.
  if (!val) return [null, index + 1];

  const node = Node(val);

  // Destructure next node and index.
  const [leftNode, nextIndex] = EvalNode(values, index + 1);
  const [rightNode, finalIndex] = EvalNode(values, nextIndex);

  node.left = leftNode;
  node.right = rightNode;

  return [node, finalIndex];
}

export function Node(val, left, right) {
  return {
    val,
    left: left ?? null,
    right: right ?? null,
  };
}
