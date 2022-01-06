/**
 * Recursive Staircase Problem
 * How many ways to get to the top of the staircase from the bottom?
 * N is the number of steps.
 * X is the number of steps that can be taken at a time. Assumed positive integers.
 */
function numWays(n, x) {
  if (n === 0) {
    return 1;
  }
  const nums = [n + 1];
  nums[0] = 1;
  for (let i = 1; i <= n; i++) {
    let total = 0;
    x.forEach((j) => {
      if (i - j >= 0) {
        total += nums[i - j];
      }
    });
    nums[i] = total;
  }
  return nums[n];
}

const steps = [1, 2];
console.log(numWays(0, steps)); // return 1
console.log(numWays(1, steps)); // return 1
console.log(numWays(2, steps)); // return 2
console.log(numWays(3, steps)); // return 3
console.log(numWays(4, steps)); // return 5
