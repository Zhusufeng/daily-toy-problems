/*
Getting a Different Number

Given an array arr of unique nonnegative integers, implement a function getDifferentNumber that finds the smallest nonnegative integer that is NOT in the array.

Even if your programming language of choice doesn’t have that restriction (like Python), assume that the maximum value an integer can have is MAX_INT = 2^31-1. So, for instance, the operation MAX_INT + 1 would be undefined in our case.

Your algorithm should be efficient, both from a time and a space complexity perspectives.

Solve first for the case when you’re NOT allowed to modify the input arr. If successful and still have time, see if you can come up with an algorithm with an improved space complexity when modifying arr is allowed. Do so without trading off the time complexity.

Analyze the time and space complexities of your algorithm.

Example:

input:  arr = [0, 1, 2, 3]

output: 4 

Constraints:
  [time limit] 5000ms
  [input] array.integer arr

  1 ≤ arr.length ≤ MAX_INT
  0 ≤ arr[i] ≤ MAX_INT for every i, 0 ≤ i < MAX_INT
  [output] integer
*/
/*
O: Number (that isn't in the array)
I: Array of non-negative numbers
C: 
  Time: 5000ms, Linear
  Space: Linear
E:
  [0, 1, 2, 3] => 4
  [0] => 1
  [1] => 0
  [1, 2] => 0
  [0, 1, 2, 4] => 3
  [4, 1, 0, 2] => 3

General Plan #1, Linear Time, Linear Space
  Make a copy of the array
  Sort the array
  Iterate through array starting at i as 0 and increment i once
    If index does not equal array at index
      Return i
  Return i
*/

// General Plan #1
function getDifferentNumber(arr) {
  let sortedArr = arr.slice().sort();
  // console.log(sortedArr);
  let i = 0;
  for (; i < sortedArr.length; i++) {
    if (i !== sortedArr[i]) {
      return i;
    }
  }
  return i;
}
// Time Complexity is more specifically O(N log N)

console.log(getDifferentNumber([0, 1, 2, 3])); // 4
console.log(getDifferentNumber([0])); // 1
console.log(getDifferentNumber([1])); // 0
console.log(getDifferentNumber([1, 2])); // 0
console.log(getDifferentNumber([0, 1, 2, 4])); // 3
console.log(getDifferentNumber([4, 1, 0, 2])); // 3


