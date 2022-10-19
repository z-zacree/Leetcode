const isPalindrome = (x) => {
    if (x < 0) return false;
    if (0 <= x && x <= 9) return true;

    let y = 0;
    let z = x;
    while (x > 0) {
        y = y * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    return z == y;
};

console.log(isPalindrome(121)); // expected result: true
console.log(isPalindrome(-121)); // expected result: false
console.log(isPalindrome(10)); // expected result: false
console.log(isPalindrome(-101)); // expected result: false
