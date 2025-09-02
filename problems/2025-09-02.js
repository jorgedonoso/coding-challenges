/*
 * Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.
 * For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
 *
 * Follow-up: what if you can't use division?
 */

export function Go(list) {
  // Store total for all items.
  let totalMultiplication = 1;

  for (var i = 0; i < list.length; i++) {
    totalMultiplication *= list[i];
  }

  // Divide result for current index
  // (excluding it from the product)
  const result = [];
  for (var i = 0; i < list.length; i++) {
    result[i] = totalMultiplication / list[i];
  }

  return result;
}

export function GoNoDivision(list) {
  const result = [];

  // Loop main list and exclude current index from multiplication.
  for (var i = 0; i < list.length; i++) {
    let currentMultiplication = 1;

    for (var ii = 0; ii < list.length; ii++) {
      if (i != ii) {
        currentMultiplication *= list[ii];
      }
    }

    result[i] = currentMultiplication;
  }

  return result;
}
