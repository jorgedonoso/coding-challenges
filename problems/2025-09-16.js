/**
 * You run an e-commerce website and want to record the
 * last N order ids in a log. Implement a data structure
 * to accomplish this, with the following API:
 *
 *     record(order_id): adds the order_id to the log
 *     get_last(i): gets the ith last element from the log.
 *
 * You should be as efficient with time and space as possible.
 */

export function EfficientLog(N) {
  const orders = new Array(N);
  let currentIndex = 0; // Index for next item.
  let totalCount = 0; // Total count.

  function Record(order_id) {
    orders[currentIndex] = order_id;

    // Calculate next index.
    // Ex: N=3, if a 4th item would to be recorded,
    // then its index would be (3+1) % 3 = 1.
    currentIndex = (currentIndex + 1) % N;

    totalCount++;
  }

  // Using silent errors for simplicity.
  function GetLast(i) {
    // Silent invalid index.
    if (i <= 0 || i > Math.min(N, totalCount)) {
      return null;
    }

    // Silent out of bounds for implicit index.
    if (!i) {
      return orders[currentIndex - 1] ?? null;
    }

    // Shift index and return order.
    const index = (currentIndex - i + N) % N;

    return orders[index];
  }

  return { Record, GetLast };
}
