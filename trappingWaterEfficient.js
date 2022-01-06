/**
 * The capturing rainwater problem asks to calculate how much rainwater would be trapped in the empty spaces in a histogram (a chart which consists of a series of bars).
 * Using pointers to go through the array.
 * The pointers start at each end of the array and move towards each other.
 * O(n) (linear) runtime version because it loops through the array only one time.
 */

function trappingWaterEfficient(heights) {
  let totalWater = 0;
  let leftPointer = 0;
  let rightPointer = heights.length - 1;
  let leftBound = 0;
  let rightBound = 0;

  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      leftBound = Math.max(heights[leftPointer], leftBound);
      totalWater += leftBound - heights[leftPointer];
      leftPointer++;
    } else {
      rightBound = Math.max(heights[rightPointer], rightBound);
      totalWater += rightBound - heights[rightPointer];
      rightPointer--;
    }
  }
  return totalWater;
}

const testArray = [4, 2, 1, 3, 0, 1, 2];
console.log(trappingWaterEfficient(testArray));

// Leave this so that we can test your code:
module.exports = trappingWaterEfficient;
