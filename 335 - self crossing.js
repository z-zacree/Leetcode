// 28/29 => Time limit exceeded for array with length 10000
// const isSelfCrossing = (d: number[]): boolean => {
//     interface coordinate {
//         x: number;
//         y: number;
//     }
//     let direction = "north";
//     let latestCoord: coordinate = { x: 0, y: 0 };
//     let coords: coordinate[] = [{ x: 0, y: 0 }];

//     for (let i = 0; i < d.length; i++) {
//         switch (direction) {
//             case "north":
//                 for (let x = 0; x < d[i]; x++) {
//                     latestCoord = { ...latestCoord, y: latestCoord.y + 1 };
//                     if (coords.find((val) => val.x == latestCoord.x && val.y == latestCoord.y))
//                         return true;
//                     coords.push(latestCoord);
//                 }
//                 direction = "west";
//                 break;
//             case "west":
//                 for (let x = 0; x < d[i]; x++) {
//                     latestCoord = { ...latestCoord, x: latestCoord.x - 1 };
//                     if (coords.find((val) => val.x == latestCoord.x && val.y == latestCoord.y))
//                         return true;
//                     coords.push(latestCoord);
//                 }
//                 direction = "south";
//                 break;
//             case "south":
//                 for (let x = 0; x < d[i]; x++) {
//                     latestCoord = { ...latestCoord, y: latestCoord.y - 1 };
//                     if (coords.find((val) => val.x == latestCoord.x && val.y == latestCoord.y))
//                         return true;
//                     coords.push(latestCoord);
//                 }
//                 direction = "east";
//                 break;
//             case "east":
//                 for (let x = 0; x < d[i]; x++) {
//                     latestCoord = { ...latestCoord, x: latestCoord.x + 1 };
//                     if (coords.find((val) => val.x == latestCoord.x && val.y == latestCoord.y))
//                         return true;
//                     coords.push(latestCoord);
//                 }
//                 direction = "north";
//                 break;
//         }

//         if (i > 5) coords.splice(1, d[i - 5]);
//     }

//     return false;
// };

const isSelfCrossing = (d) => {
    if (d.length < 4) return false;

    for (let i = 3; i < d.length; i++) {
        if (d[i] >= d[i - 2] && d[i - 3] >= d[i - 1]) return true;
        else if (d[i] + d[i - 4] >= d[i - 2] && d[i - 1] == d[i - 3]) return true;
        else if (
            d[i - 2] >= d[i - 4] &&
            d[i - 3] >= d[i - 1] &&
            d[i] + d[i - 4] >= d[i - 2] &&
            d[i - 1] + d[i - 5] >= d[i - 3]
        )
            return true;
    }

    return false;
};

console.log(isSelfCrossing([2, 1, 1, 2])); // expected result: true
console.log(isSelfCrossing([1, 2, 3, 4])); // expected result: false
console.log(isSelfCrossing([1, 1, 1, 1])); // expected result: true
console.log(
    isSelfCrossing([
        1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 14,
        14, 15, 15, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25,
        26, 26, 27, 27, 28, 28, 29, 29, 30, 30, 31, 31, 32, 32, 33, 33, 34, 34, 35, 35, 36, 36, 37,
        37, 38, 38, 39, 39, 40, 40, 41, 41, 42, 42, 43, 43, 44, 44, 45, 45, 46, 46, 47, 47, 48, 48,
        49, 49, 50, 50, 51, 51, 52, 52, 53, 53, 54, 54, 55, 55, 56, 56, 57, 57, 58, 58, 59, 59, 60,
        60, 61, 61, 62, 62, 63, 63, 64, 64, 65, 65, 66, 66, 67, 67, 68, 68, 69, 69, 70, 70, 71, 71,
        72, 72, 73, 73, 74, 74, 75, 75, 76, 76, 77, 77, 78, 78, 79, 79, 80, 80, 81, 81, 82, 82, 83,
        83, 84, 84, 85, 85, 86, 86, 87, 87, 88, 88, 89, 89, 90, 90, 91, 91, 92, 92, 93, 93, 94, 94,
        95, 95, 96, 96, 97, 97, 98, 98, 99, 99, 1, 1, 1, 1,
    ])
); // expected result: true
