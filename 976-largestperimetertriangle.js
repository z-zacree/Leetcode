// const largestPerimeter = (nums) => {
//   let a, b, c;
//   for (let i = 0; i < nums.length; i++) {
//     if (a == undefined || nums[i] > a) {
//       c = b;
//       b = a;
//       a = nums[i];
//     } else if (b == undefined || nums[i] > b) {
//       c = b;
//       b = nums[i];
//     } else if (c == undefined || nums[i] > c) {
//       c = nums[i];
//     }
//     console.log({ a, b, c });
//   }

//   if (a < b + c) return a + b + c;

//   return 0;
// };

const largestPerimeter = (nums) => {
  nums.sort((a, b) => b - a);
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] < nums[i + 1] + nums[i + 2]) {
      return nums[i] + nums[i + 1] + nums[i + 2];
    }
  }

  return 0;
};

console.log(largestPerimeter([2, 1, 2])); // expected result: 5
console.log(largestPerimeter([1, 2, 1])); // expected result: 0
console.log(largestPerimeter([3, 2, 3, 4])); // expected result: 10
console.log(largestPerimeter([3, 6, 2, 3])); // expected result: 8
