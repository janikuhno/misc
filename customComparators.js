const sortByLength = (a, b) => {
  if (a.length < b.length) {
    return -1;
  } else if (a.length > b.length) {
    return 1;
  } else {
    return ascendingOrder(a, b);
  }
};

const ascendingOrder = (a, b) => {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
};

const explicitSortWithComparator = (inputArray, order) => {
  const explicitComparator = (a, b) => {
    let indexA = order.length;
    let indexB = order.length;
    if (order.includes(a)) {
      indexA = order.indexOf(a);
    }
    if (order.includes(b)) {
      indexB = order.indexOf(b);
    }
    return indexA - indexB;
  };

  return inputArray.sort(explicitComparator).slice();
};

const ascTestArray = [10, 43, 5, 0, -2, -20, 4, 3, 2, 1, 11];
ascTestArray.sort(ascendingOrder);
console.log(ascTestArray);
const lenTestArray = ["car", "train", "plane", "bike", "skateboard", "jet"];
lenTestArray.sort(sortByLength);
console.log(lenTestArray);
const inputArray = ["a", "b", "c", "d", "e", "f", "n", "y", "g"];
const order = ["a", "n", "d", "y"];
console.log(explicitSortWithComparator(inputArray, order)); // return ['a', 'n', 'd', 'y', 'b', 'c', 'e', 'f', 'g']

module.exports = {
  sortByLength,
  ascendingOrder,
  explicitSortWithComparator,
};
