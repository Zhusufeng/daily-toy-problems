/*
  Prompt: https://leetcode.com/problems/two-sum/description/
 */
var twoSum = function(nums, target) {
  for (var i = 0; i < nums.length; i++) {
    let subtarget = target - nums[i];

    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] === subtarget) {
        return [i, j];
      }
    }
  }

  return [];
};

/*
O: Array of indices
I:
  1. Array of numbers
  2. Number
C: Quadratic
E:
  * Cannot use same element twice
  * Mine: If you cannot add two indices that equal the target, return empty []

  Input                     Output
  -----------------------------------
  [2, 7, 11, 15], 10         []
  [2, 7, 11, 15], 9          [0, 1]
  [2, 7, 11, 15], 26         [2, 3]

  General Plan
  ------------
  Iterate through the nums array
    If nums[i] < target
      Set subtarget to target - nums[i]
      Iterate through rest of the nums array starting at i + 1 and going til the length
        If nums[j] === subtarget
          You have found a sum!!! Return [i, j]
  Return []

*/

const assert = function(actual, expected) {
  if (expected !== actual) {
    console.log('Expected to get ' + expected + ' but instead got ' + actual);
  } else {
    console.log('Passed');
  }
};

// Test
assert(JSON.stringify(twoSum([2, 7, 11, 15], 9)), JSON.stringify([0, 1]));
assert(JSON.stringify(twoSum([2, 7, 11, 15], 18)), JSON.stringify([1, 2]));
assert(JSON.stringify(twoSum([2, 7, 11, 15], 17)), JSON.stringify([0, 3]));
assert(JSON.stringify(twoSum([2, 7, 11, 15], 300)), JSON.stringify([]));
assert(JSON.stringify(twoSum([11, 7, 2, 15], 9)), JSON.stringify([1, 2]));
assert(JSON.stringify(twoSum([5, 10, 15, 20, 25], 30)), JSON.stringify([0, 4]));
assert(JSON.stringify(twoSum([25, 10, 15, 20, 5], 35)), JSON.stringify([0, 1]));
assert(JSON.stringify(twoSum([0, 4, 3, 0], 0)), JSON.stringify([0, 3]));
assert(JSON.stringify(twoSum([-1, 0, 1, 2], 0)), JSON.stringify([0, 2]));
assert(JSON.stringify(twoSum([-3, 0, 1, 2], -3)), JSON.stringify([0, 1]));
assert(JSON.stringify(twoSum([-3, 0, 1, 2], -2)), JSON.stringify([0, 2]));
assert(JSON.stringify(twoSum([-1,-2,-3,-4,-5], -8)), JSON.stringify([2, 4]));

