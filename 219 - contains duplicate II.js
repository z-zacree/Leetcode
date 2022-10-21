const containsNearbyDuplicate = (nums, k) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (i - map[nums[i]] <= k) return true;
        else map[nums[i]] = i;
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)); // true
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)); // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)); // false
console.log(containsNearbyDuplicate([99, 99], 2)); // true
