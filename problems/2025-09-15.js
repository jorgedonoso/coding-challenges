/**
 * Given a stream of elements too large to store in memory,
 * pick a random element from the stream with uniform probability.
 */

export function GetRandomWithUniformProbability(stream) {
  // Just in case.
  if (stream === undefined) return undefined;
  if (stream === null) return null;

  let res = null;
  let count = 0;

  for (const element of stream) {
    count++;

    // Calculate uniform chance of getting chosen.
    const rand = Math.random();

    /*
      console.log("probability:", rand, 1 / count);
      probability: 0.7060260180957756 1
      probability: 0.6323525988012808 0.5
      probability: 0.6099655076277108 0.3333333333333333
    */
    if (rand < 1 / count) {
      res = element; // Save.
    }
  }

  return res;
}
