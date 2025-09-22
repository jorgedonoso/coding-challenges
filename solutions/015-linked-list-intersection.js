/**
 * Given two singly linked lists that intersect at some point, find the intersecting node. The lists are non-cyclical.
 * For example, given A = 3 -> 7 -> 8 -> 10 and B = 99 -> 1 -> 8 -> 10, return the node with value 8.
 * In this example, assume nodes with the same value are the exact same node objects.
 * Do this in O(M + N) time (where M and N are the lengths of the lists) and constant space.
 */

// Using arrays to keep it simple.
export function FindIntersection(listA, listB) {
  const tracker = new Set();

  // Track one list.
  for (let item of listA) {
    tracker.add(item);
  }

  // Compare with the other.
  for (let item of listB) {
    if (tracker.has(item)) {
      return item;
    }
  }

  return null;
}
