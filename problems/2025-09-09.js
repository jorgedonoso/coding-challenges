/*
 * Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.
 * For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.
 */

export function FindMaxSum(arr) {
  const sets = FindSequences(arr.length);
  let res = 0;

  for (let i = 0; i < sets.length; i++) {
    // If current sum is greater than global sum, then keep.
    const currentSum = sets[i].reduce((acc, idx) => acc + arr[idx], 0);
    if (currentSum > res) res = currentSum;
  }

  return res;
}

// Find all non adjacent sequences so we can eval their sum.
function FindSequences(ceiling) {
  const res = [];

  function EvalPath(start, path) {
    // Save when exceeding ceiling.
    if (start > ceiling) {
      res.push([...path]);
      return;
    }

    // Eval next non-adj path.
    path.push(start);
    EvalPath(start + 2, path);

    // Eval next new path.
    path.pop();
    EvalPath(start + 1, path);
  }

  EvalPath(0, []);

  return res;
}
