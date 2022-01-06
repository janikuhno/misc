const memo = {};

const fibonacci = (num) => {
  let returnValue;

  if (memo[num]) {
    returnValue = memo[num];
  } else if (num === 0 || num === 1) {
    returnValue = num;
  } else {
    returnValue = fibonacci(num - 1) + fibonacci(num - 2);
    memo[num] = returnValue;
  }
  return returnValue;
};

console.log(fibonacci(20));
console.log(fibonacci(200));
