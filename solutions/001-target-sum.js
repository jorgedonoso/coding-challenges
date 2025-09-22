/*
 * Given a list of numbers and a number k, return whether any two numbers
 * from the list add up to k. For example, given [10, 15, 3, 7] and k of 17,
 * return true since 10 + 7 is 17.
 *
 * Bonus: Can you do this in one pass?
 */

export default function FindSumTarget(list, targetSum) {
  // Empty array.
  if (!list?.length) return false;

  // Short array.
  if (list.length < 2) return false;

  const checked = new Set();

  for (var i = 0; i < list.length; i++) {
    const cur = list[i];
    const supplement = targetSum - cur;

    // Check if value needed has already been read.
    if (checked.has(supplement)) {
      return true;
    }

    // Save read value.
    checked.add(cur);
  }

  return false;
}
