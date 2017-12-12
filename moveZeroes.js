/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/*
12-11-17
O: Nothing
I: Array of nums
C: 
  Time: Linear
  Space: Constant
E: 
  [0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]
  [0] => [0]
  [] => []
  [1, 2] => [1, 2]
  [0, 1, 0, 2, 0, 3] => [1, 2, 3, 0, 0, 0]
  [1, 2, 3, 0, 0, 0] => [1, 2, 3, 0, 0, 0]

General Plan
Idea #1
  Keep track of the end index in a var called endIndex
  Iterate through array, starting at index 0 til endIndex is reached
    If array at current index equals 0
      Splice out current index element
      Push 0 to array
      Update endIndex to decrement by 1
      Update i to decrement by 1

[0, 1, 0, 3, 12] before loop, i = 0, endIndex = length - 1
[1, 0, 3, 12, 0] after loop, i = 0, endIndex = endIndex - 1 & i--, i++
[1, 0, 3, 12, 0] before loop, i = 0
[1, 0, 3, 12, 0] after loop, i = 0, i++
[1, 0, 3, 12, 0] before loop, i = 1
[1, 3, 12, 0, 0] after loop, i = 1, endIndex = endIndex - 1 & i--, i++
[1, 3, 12, 0, 0] before loop, i = 1
[1, 3, 12, 0, 0] after loop, i = 1
[1, 3, 12, 0, 0] before loop, i = 2
[1, 3, 12, 0, 0] after loop, i = 2
Algorithm should complete since it made it to endIndex

Idea #2
[0, 1, 0, 3, 12] => [1, 3, 12, 0, 0]

Count zeroes as I go
Iterate through the array til end, incrementing by 1 each loop
  If array at current index is 0
    Splice it out
    Increment counter
    i--
    Update endIndex by -1
Iterate til counter, incrementing by 1 each loop
  Push 0s into array 
*/

var moveZeroes = function(nums) {
  let endIndex = nums.length;

  for (let i = 0; i < endIndex; i++) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
      endIndex--;
      i--;
    }
  }

  return nums;
};

// More efficient solution
// var moveZeroes = function(nums) {
//   let j = 0;
//   for(let i = 0; i < nums.length; i++) {
//     // console.log(nums, i, j); // this bubbles nums to the top, 0's to the end
//     if(nums[i] != 0) {
//         let temp = nums[i];
//         nums[i] = nums[j];
//         nums[j] = temp;
//         j++;
//     }
//   }
//   return nums;
// };
console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));
console.log(moveZeroes([]));
console.log(moveZeroes([1, 2]));
console.log(moveZeroes([0, 1, 0, 2, 0, 3]));
console.log(moveZeroes([1, 2, 3, 0, 0, 0]));
