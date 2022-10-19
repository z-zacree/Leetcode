const checkIfPangram = (s) => {
    const sArray = new Set([...s]);

    return sArray.size === 26;
};

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog")); // expected result: true
console.log(checkIfPangram("leetcode")); // expected result: false
