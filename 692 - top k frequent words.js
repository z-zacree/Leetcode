const topKFrequent = (words, k) => {
    let map = {};

    for (let i = 0; i < words.length; i++) {
        map[words[i]] = map[words[i]] + 1 || 1;
    }

    let sorted = Object.entries(map).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    return sorted.splice(0, k).map((a) => a[0]);
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2)); // expected result: ["i", "love"]
console.log(
    topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4)
); // expected result: ["the", "is", "sunny", "day"]
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 3)); // expected result: ["i", "love", "coding"]
