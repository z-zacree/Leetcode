var countAndSay = (n) => {
    if (n == 1) return "1";

    let prev = countAndSay(n - 1);
    let newRes = "";
    let count = 1;

    for (let i = 0; i < prev.length; i++) {
        if (prev[i] == prev[i + 1]) count += 1;
        else {
            newRes = newRes + count.toString() + prev[i];
            count = 1;
        }
    }

    return newRes;
};

console.log(countAndSay(1)); // expected result: "1"
console.log(countAndSay(2)); // expected result: "11"
console.log(countAndSay(3)); // expected result: "21"
console.log(countAndSay(4)); // expected result: "1211"
console.log(countAndSay(5)); // expected result: "111221"
console.log(countAndSay(6)); // expected result: "312211"
console.log(countAndSay(7)); // expected result: "13112221"
console.log(countAndSay(8)); // expected result: "1113213211"
console.log(countAndSay(9)); // expected result: "31131211131221"
console.log(countAndSay(10)); // expected result: "13211311123113112211"
