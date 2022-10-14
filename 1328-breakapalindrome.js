const breakPalindrome = (p) => {
    const mid = Math.round(p.length / 2);

    if (p.length <= 1) return "";

    for (let i = 0; i < p.length; i++) {
        if (p.length % 2 != 0 && mid - 1 == i) break;
        if (p[i] != "a") return p.slice(0, i) + "a" + p.slice(i + 1);
    }

    return p.slice(0, p.length - 1) + "b";
};

console.log(breakPalindrome("abccba")); // expected result: "aaccba"
console.log(breakPalindrome("aabccbaa")); // expected result: "aaaccbaa"
console.log(breakPalindrome("a")); // expected result: ""
console.log(breakPalindrome("aa")); // expected result: "ab"
console.log(breakPalindrome("aba")); // expected result: "abb"
