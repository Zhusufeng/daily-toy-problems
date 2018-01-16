/*
  Given a list of non-negative numbers and a target integer k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of k, that is, sums up to n*k where n is also an integer.

  Example 1:
  Input: [23, 2, 4, 6, 7],  k=6
  Output: True
  Explanation: Because [2, 4] is a continuous subarray of size 2 and sums up to 6.

  Example 2:
  Input: [23, 2, 6, 4, 7],  k=6
  Output: True
  Explanation: Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.

*/

var checkSubarraySum = function(nums, k) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] + nums[i + 1]) % k === 0) {
      return true;
    }
  }

  return false;
};

/*
  Strategy for Example 1
    Iterate through argument 1 array. Sum current item and next item. If sum mod k is 0, return true

  Time Complexity
    Linear
*/

// Example Input
const example1 = [23, 2, 6, 4, 7];
const k1 = 6;

console.log(checkSubarraySum(example1, 8));