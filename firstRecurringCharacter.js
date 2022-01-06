function firstRecurringCharacter(str) {
  let map = {};

  for (let char in str) {
    if (map[str[char]] !== undefined) {
      return str[char];
    }
    map[str[char]] = char;
  }
  return null;
}

console.log(firstRecurringCharacter("DBCABA"));
console.log(firstRecurringCharacter("ABCDEFGHIJKLMNOPQRSTUVWXYZA"));
console.log(firstRecurringCharacter("ABCABC"));
console.log(firstRecurringCharacter("ABCCBA"));
