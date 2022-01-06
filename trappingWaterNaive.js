/**
 * The capturing rainwater problem asks to calculate how much rainwater would be trapped in the empty spaces in a histogram (a chart which consists of a series of bars).
 * Runtime of O(n^2) (quadratic) because of for loops.
 */

const trappingWaterNaive = (height) => {
  // Need at least 3 elements in height
  if (height.length < 3) {
    return 0;
  }

  const maxHeightLeft = height.slice();
  const maxHeightRight = height.slice();

  // Check left first then right
  for (let i = 1; i < height.length; i++) {
    if (maxHeightLeft[i] < maxHeightLeft[i - 1]) {
      maxHeightLeft[i] = maxHeightLeft[i - 1];
    }
  }
  for (let i = height.length - 2; i >= 0; i--) {
    if (maxHeightRight[i] < maxHeightRight[i + 1]) {
      maxHeightRight[i] = maxHeightRight[i + 1];
    }
  }
  // Calculate drop counts
  return height.reduce(
    (acc, cur, idx) =>
      acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur,
    0
  );
};

console.log(trap([0, 1, 0, 0, 2, 3, 2])); // Expected output: 2
console.log(trap([2, 1, 0, 2, 2, 0, 2])); // Expected output: 5

module.exports = trappingWaterNaive;
