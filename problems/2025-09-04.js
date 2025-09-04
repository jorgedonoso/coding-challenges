/**
 * Given an array of integers, find the first missing positive integer in linear time and constant space.
 * In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.
 *
 * For example, the input [3, 4, -1, 1] should give 2.
 * The input [1, 2, 0] should give 3.
 */

export function Go(input) {
  // Assumptions based on examples:
  // - Remaining positive ints form a sequence or partial.
  // - Missing int could be trailing.
  // - Sequence starts at 1.

  const cleanSet = new Set();
  let upperBound = 1;

  // Missing value can be trailing, so full scan is needed.
  for (let i = 0; i < input.length; i++) {
    const curValue = input[i];

    // Capture relevant values.
    if (curValue > 0) {
      cleanSet.add(curValue);

      // Capture upper bound.
      if (curValue > upperBound) upperBound = curValue;
    }
  }

  // Check for missing middle value.
  if (upperBound > 2) {
    for (let ii = 1; ii < upperBound; ii++) {
      if (!cleanSet.has(ii)) return ii;
    }
  }

  // Check for trailing value.
  if (upperBound == cleanSet.size) return upperBound + 1;

  return 0;
}
