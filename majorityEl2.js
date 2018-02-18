//https://leetcode.com/problems/majority-element-ii/description/

/*
  Inputs & Outputs, Steps
    const input1 = [1, 3, 3, 3, 3, 3]
      hash = {1: 1, 3: 5}
      n = 6
      max = n/3 = 6/3 = 2
    const output1 = [3]

    const input2 = [1, 1, 1, 3, 3, 3, 3, 3]
      hash = {1: 3, 3: 5}
      n = 8
      max = n/3 = 8/3 = 2.67
    const output2 = [1, 3]

    const input3 = [1, 1, 1, 3, 3, 3, 3, 3, 7]
      hash = {1: 3, 3: 5, 7: 1}
      n = 9
      max = n/3 = 9/3 = 3
    const output3 = [3]

  Strategy
    Iterate thru array & count each num to the hash. Find the max. Iterate thru hash for values greater than max

  Big-O/Constraints
    Input = n
    Time: Linear - O(2n)
    Space: Constant 

  Skeleton
  const majorityElement = nums => {
    const hash = {};
    const results = [];
    const max = nums.length/3;
    // Iterate thru nums
      // If hash[nums[i]] increment by 1 else create & set to 1
    // Iterate thru hash 
      // If value is greater than max, push to results
    return results;
  };
*/

const majorityElement = nums => {
  const hash = {};
  const results = [];
  const max = nums.length/3;

  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]]) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (let key in hash) {
    if (hash[key] > max) results.push(parseInt(key));
  }
  return results;
};

console.log(majorityElement([1, 3, 3, 3, 3, 3]));
console.log(majorityElement([1, 1, 1, 3, 3, 3, 3, 3]));
console.log(majorityElement([1, 1, 1, 3, 3, 3, 3, 3, 7]));
