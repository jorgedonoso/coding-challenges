/**
 * There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
 * Given N, write a function that returns the number of unique ways you can climb the staircase.
 * The order of the steps matters.
 *
 * For example, if N is 4, then there are 5 unique ways:
 * 1, 1, 1, 1
 * 2, 1, 1
 * 1, 2, 1
 * 1, 1, 2
 * 2, 2
 */

export function StartWaysToClimb(totalSteps) {
  let count = 0;

  function TakeStep(remainingSteps) {
    // No more steps. Bump count.
    if (remainingSteps == 0) {
      count++;
      return;
    }

    // Went beyond total steps. Not valid count.
    if (remainingSteps < 0) {
      return;
    }

    // Explore again at the new step number.
    TakeStep(remainingSteps - 1);
    TakeStep(remainingSteps - 2);
  }

  if (totalSteps > 1) {
    // Start by traversing each "solution tree".
    TakeStep(totalSteps - 1);
    TakeStep(totalSteps - 2);
  } else {
    // Already at the top!
    return 1;
  }

  return count;
}
