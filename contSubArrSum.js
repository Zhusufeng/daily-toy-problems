/*
  Prompt: https://leetcode.com/problems/continuous-subarray-sum/description/
*/

var checkSubarraySum = function(nums, k) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && (nums[i] + nums[i - 1]) % k === 0) {
      return true;
    }
    sum += nums[i];
    if (sum % k === 0) {
      return true;
    }
  }

  return false;
};

/*
  Strategy for Example 1
    Iterate through argument 1 array. Sum current item and next item. If sum mod k is 0, return true

  Strategy for Example 2
    Iterate through argument 1 array. Sum up all items... If sum mod k is 0, return true

  Time Complexity
    Linear
*/

// Example Input
const example1 = [23, 2, 6, 4, 7];
const k1 = 6;

console.log(checkSubarraySum(example1, 8));
console.log(checkSubarraySum(example1, 42));
