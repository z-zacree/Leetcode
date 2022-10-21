const intToRoman = (num) => {
    let res = "";
    const map = {
        1: "I",
        4: "IV",
        5: "V",
        9: "IX",
        10: "X",
        40: "XL",
        50: "L",
        90: "XC",
        100: "C",
        400: "CD",
        500: "D",
        900: "CM",
        1000: "M",
    };
    const keys = Object.keys(map);

    for (let i = keys.length - 1; i >= 0; i--) {
        while (num >= keys[i]) {
            res += map[keys[i]];
            num -= keys[i];
        }
    }

    return res;
};

console.log(intToRoman(3)); // III
console.log(intToRoman(4)); // IV
console.log(intToRoman(9)); // IX
console.log(intToRoman(58)); // LVIII
console.log(intToRoman(1994)); // MCMXCIV
