/*
Given n non-negative integers representing an elevation map where the width of each bar is 1,
compute how much water it is able to trap after raining.
*/
const trap = height => {
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
        (acc, cur, idx) => acc + Math.min(maxHeightLeft[idx], maxHeightRight[idx]) - cur, 0
    );
}

console.log(trap([0,1,0,0,2,3,2])); // Expected output: 2
console.log(trap([2,1,0,2,2,0,2])); // Expected output: 5