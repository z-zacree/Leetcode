const twoSum = (nums, target) => {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            return [map.get(num), i];
        }
        map.set(target - num, i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // expected result: [0, 1]
console.log(twoSum([3, 2, 4], 6)); // expected result: [1, 2]
console.log(twoSum([3, 3], 6)); // expected result: [0, 1]
