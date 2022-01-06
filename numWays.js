/**
 * How Many Ways to Decode a Message?
 * Returns the number of ways a given message can be decoded.
 * For example if given the input "12" returns 2 because it can be 'ab' and 'l'.
 * min: 'a' == 1, max: 'z' == 26.
 */

function decode(data, l, memo) {
  if (l === 0) {
    return 1;
  }
  startIndx = data.length - l;
  if (data[startIndx] === "0") {
    return 0;
  }
  if (memo[l] != null) {
    return memo[l];
  }
  result = decode(data, l - 1, memo);
  if (l >= 2 && parseInt(data.substring(startIndx, startIndx + 2)) <= 26) {
    result += decode(data, l - 2, memo);
  }
  memo[l] = result;
  return result;
}
function numWays(data) {
  const memo = [data.length + 1];
  return decode(data, data.length, memo);
}

console.log(numWays("")); // return 1
console.log(numWays("011")); // return 0
console.log(numWays("12")); // return 2
console.log(numWays("2345")); // return 5
console.log(numWays("111")); // return 3

/** Mapping data
 const map = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};
 */
