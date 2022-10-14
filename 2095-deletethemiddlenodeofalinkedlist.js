// Slow solution, but works
// const deleteMiddle = (head) => {
//     let count = 0;
//     let nums = [];

//     while (head != null) {
//         count++;
//         nums.push(head.val);
//         head = head.next;
//     }

//     nums = nums.filter((_, index) => index != Math.floor(count / 2));

//     const res = (index) => {
//         if (index < nums.length) {
//             return {
//                 val: nums[index],
//                 next: res(index + 1),
//             };
//         } else return null;
//     };

//     return res(0);
// };

// Better solution using two pointers
const deleteMiddle = (head) => {
    let slow = (fast = head);
    let prevNode = null;
    while (fast && fast.next) {
        prevNode = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    if (!prevNode) return null;
    prevNode.next = slow.next;

    return head;
};
