/*
  Given an array and a value, remove all instances of that value in-place and return the new length.

  Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

  The order of elements can be changed. It doesn't matter what you leave beyond the new length.

  Example:

  Given nums = [3,2,2,3], val = 3,

  Your function should return length = 2, with the first two elements of nums being 2.
*/

const removeElement = (nums, val) => {
  // Constraints: Linear Time; Constant Space
  let startPt;
  let endPt;
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val){
      if (!startPt) {
        startPt = i;
      }
      endPt = i;
    }
  }

  const diff = endPt - startPt;
  nums.splice(startPt, diff + 1);

  console.log(nums);

  return nums.length;
};

console.log(removeElement([3, 2, 2, 3], 3)); // 2
console.log(removeElement([3, 1, 2, 2, 2, 0], 2)); // 3
console.log(removeElement([1, 1, 1], 1)); // 0


/*
Inputs & Outputs
  const input1a = [3,2,2,3];
  const input1b = 3;
  const output1 = 2;

  const input2a = [0, 1, 2, 3];
  const input2b = 2;
  const output2 = 3;

  const input3a = [2];
  const input3b = 2;
  const output3 = 0;

  const input4a = [0, 1, 2];
  const input4b = 5;
  const output4 = 3;

  const input5a = [];
  const input5b = 5;
  const output5 = 0;

  const input6a = [1, 1, 1];
  const input6b = 1;
  const output6 = 0;

Strategy
  Sort the array. Iterate thru array. If array[i] equals target set as start point & end point. If end point is not null and array[i] equals target, update it. Once it no longer equals target, break. Then splice out element from start index to end index. Return array.length 

Big-O
  Time: Linear O(N)
  Space: Constant O(1)

Constraints
  Space: Constant O(1)/ Make updates in place to array

Steps
  Given [3, 1, 2, 2, 2, 0] and 2
  Sort it -> [0, 1, 2, 2, 2, 3]
  i = 0, 0 !== 2
  i = 1, 1 !== 2
  i = 2, 2 === 2
    startPt was null, startPt = i = 2
    endPt was null, endPt = i = 2
  i = 3, 2 === 2
    endPt = i = 3
  i = 4, 2 === 2
    endPt = i = 4
  i = 5, 3 ! == 2
  Splice startPt to endPt from array
  Array is now [0, 1, 3]
  Return array.length => 3

Skeleton
  const removeElement = (nums, val) => {
    // Constraints: Linear Time; Constant Space
    // Sort nums
    // Iterate thru nums
      // if nums[i] is val
        // if startPt is not truthy, set startPt to i
        // set endPt to i
    // Splice startPt to endPt out of array
    // Return array.length
  };
*/