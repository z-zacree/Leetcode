// using a 2D array to store counts of each character
// const getLengthOfOptimalCompression = (s, k) => {
//     let map = [];
//     let res = "";

//     for (let i = 0; i < s.length; i++) {
//         let index = map.findIndex((e) => e[0] === s[i]);
//         if (index === -1) {
//             map.push([s[i], 1]);
//         } else {
//             map[index][1]++;
//         }
//     }

//     let minMap = [...map].sort((a, b) => a[1] - b[1]);

//     minMap.forEach(([key, value]) => {
//         if (k > 0 && value == 1) {
//             k--;
//             delete map[key];
//         } else if (k > 0 && value == 100) {
//             k -= 1;
//             map[key] = 99;
//             res += key + "99";
//         } else if (k > 1 && value == 11) {
//             k -= 2;
//             map[key] = 9;
//             res += key + "9";
//         } else if (value > 9 && k >= value - 9) {
//             k -= value - 9;
//             map[key] = 9;
//             res += key + "9";
//         } else if (value > 0 && k >= value) {
//             k -= value;
//             delete map[key];
//         } else {
//             if (value > 1) res += key + value;
//             else res += key;
//         }
//     });

//     return res;
// };

const getLengthOfOptimalCompression = (s, k) => {};

// console.log(getLengthOfOptimalCompression("aaabcccd", 2)); // expected result: 4
// console.log(getLengthOfOptimalCompression("aabbaa", 2)); // expected result: 2
// console.log(getLengthOfOptimalCompression("aaaaaaaaaaa", 0)); // expected result: 3
// console.log(getLengthOfOptimalCompression("aaabbbabbbb", 2)); // expected result: 7
// console.log(getLengthOfOptimalCompression("abc", 1)); // expected result: 3
// console.log(getLengthOfOptimalCompression("aabbaa", 2)); // expected result: 2
// console.log(getLengthOfOptimalCompression("ababa", 1)); // expected result: 3
// console.log(getLengthOfOptimalCompression("ababa", 0)); // expected result: 5
// console.log(getLengthOfOptimalCompression("ababa", 2)); // expected result: 2
// console.log(getLengthOfOptimalCompression("aabbaa", 2)); // expected result: 2
// console.log(getLengthOfOptimalCompression("ababa", 1)); // expected result: 3
// console.log(getLengthOfOptimalCompression("ababa", 0)); // expected result
console.log(getLengthOfOptimalCompression("aaabcccd", 2)); // expected result: 4
console.log(getLengthOfOptimalCompression("aabbaa", 2)); // expected result: 2
console.log(getLengthOfOptimalCompression("aaaaaaaaaaa", 0)); // expected result: 3
console.log(getLengthOfOptimalCompression("abc", 2)); // expected result: 3
console.log(getLengthOfOptimalCompression("bbabbbabbbbcbb", 4)); // expected result: 3
console.log(getLengthOfOptimalCompression("bababbaba", 1)); // expected result: 7
