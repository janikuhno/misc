const replacements = {
    "ab" : "c",
    "ac" : "b",
    "bc" : "a",
    "ba" : "c",
    "ca" : "b",
    "cb" : "a"
};

function strReduce(str) {
    let lastString = '';
    while (str != lastString) {
        lastString = str;
        for (char in replacements) {
            str = str.replace(char, replacements[char]);
        }
    }
    return str.length;
}

console.log(strReduce("bcab")); // Should equal 1
console.log(strReduce("cab")); // Should equal 2
console.log(strReduce("abcabc")); // Should equal 2
console.log(strReduce("cccc")); // Should equal 4
console.log(strReduce("baccabcbc")); // Should equal 1