const increasingTriplet = (nums) => {
  if (nums.length < 3) return false;

  let first, second;
  for (let i = 0; i < nums.length; i++) {
    if (first == undefined || nums[i] < first) first = nums[i];
    else if (second == undefined || nums[i] < second) second = nums[i];
    else return true;
  }
  return false;
};

console.log(increasingTriplet([1, 2, 3, 4, 5])); // expected result: true
console.log(increasingTriplet([5, 4, 3, 2, 1])); // expected result: false
console.log(increasingTriplet([2, 1, 5, 0, 4, 6])); // expected result: true
console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3])); // expected result: false
console.log(increasingTriplet([20, 100, 10, 12, 5, 13])); // expected result: true
