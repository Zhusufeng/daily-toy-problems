/*
  Prompt: https://leetcode.com/problems/find-k-th-smallest-pair-distance/description/
*/

/*
O: Number
I: Array of Numbers (int), Number
C:
  Time:
  Space:
E:
  [1, 3, 1]
    (1,3) -> 2  k = 0 
    (1,1) -> 0  k = 1 
    (3,1) -> 2  k = 2 

  [1, 5, 7, 9]
    (1, 5) -> 4  k = 0
    (1, 7) -> 6  k = 1
    (1, 9) -> 8  k = 2
    (5, 1) -> 4  k = 3
    (5, 7) -> 2  k = 4
    (5, 9) -> 4  k = 5
    (7, 1) -> 6  k = 6
    (7, 5) -> 2  k = 7
    (7, 9) -> 2  k = 8
    (9, 1) -> 8  k = 9
    (9, 5) -> 4  k = 10
    (9, 7) -> 2  k = 11

General Plan
Idea #1 Arrays
  Create difference array that is empty
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If i equals j
        Continue
      Push the absolute value of array at i minus array at j to difference
  Return difference at k

Idea #2 Array
  Create counter set to 0
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If i equals j OR array at i equals array at j (NOT viable because you want difference of 0)
        Continue
      If counter equals k
        Return the absolute value of array at i minus array at j
      Increment counter
  Return null if never got to k

Idea #3 Array 
  Create counter set to 0
  Iterate through given array starting at i equal to 0 til array's length
    Iterate through given array starting at j equal to 0 til array's length
      If array at i equals array at j
        Continue
      If counter equals k
        Return the absolute value of array at i minus array at j
      Increment counter
  Return null if never got to k

Idea #4 Set 
(Not viable because what if there are 2 of the same num? Diff to equal 0)
  Create Set s using the array
  Create counter set to 0
  Iterate through s, let i
    Iterate through s, let j
      If i equals j
        continue
      If counter equals k
        Return the absolute value of i minus j
      Increment counter
  Return null if never got to k
*/

// var smallestDistancePair = function(nums, k) {
//   const s = new Set(nums);
//   let counter = 0;

//   for (let i of s.keys()) {
//     for (let j of s.keys()) {
//       console.log(i, j);
//       if (i === j) continue;
//       if (counter === k) return Math.abs(i - j);
//       counter++;
//     }
//   } 
//   return null;
// };
// Space: Linear because of the set
// Time: Quadratic because of the 2 for loops

// var smallestDistancePair = function(nums, k) {
//   let counter = 0;

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;
//       if (counter === k) return Math.abs(nums[i] - nums[j]);
//       counter++;
//     }
//   } 
//   return null;
// };

// console.log(smallestDistancePair([1,3,1], 0));  // 2
// console.log(smallestDistancePair([1,3,1], 1));  // 0
// console.log(smallestDistancePair([1,3,1], 2));  // 2
// console.log(smallestDistancePair([1, 5, 7, 9], 0));  // 4
// console.log(smallestDistancePair([1, 5, 7, 9], 1));  // 6
// console.log(smallestDistancePair([1, 5, 7, 9], 2));  // 8
// console.log(smallestDistancePair([1, 5, 7, 9], 3));  // 4
// console.log(smallestDistancePair([1, 5, 7, 9], 4));  // 2
// console.log(smallestDistancePair([1, 5, 7, 9], 5));  // 4

var smallestDistancePair = function(nums, k) {
  let difference = [0];

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i === j) {
        break;
      } else {
        difference.push(Math.abs(nums[i] - nums[j]));
      }
    }
  } 
  console.log(difference);
  difference.sort((a, b) => {
    if (a < b) {
      return -1;
    } else {
      return 1;
    }
  });
  console.log(difference);
  return difference[k];
};

// k is equal or greater than 1
console.log(smallestDistancePair([1,3,1], 1));  // 0 - Correct
console.log(smallestDistancePair([1,3,1], 2));  // 2 - Correct
console.log(smallestDistancePair([62, 100, 4], 2)); // 58 - Correct

console.log(smallestDistancePair([9,10,7,10,6,1,5,4,9,8], 18)); // 2 
console.log(smallestDistancePair([38,33,57,65,13,2,86,75,4,56], 26)); // 36

// Time limit exceeded:
// console.log(smallestDistancePair([2,2,0,1,0,1,2,0,2,1,1,1,1,0,1,2,1,1,1,2,1,2,1,0,1,0,1,1,0,2,1,0,0,2,2,1,1,1,2,2,1,0,0,0,2,0,0,0,0,0,1,0,1,2,2,2,2,2,2,1,1,0,1,0,1,1,1,1,2,1,1,2,2,2,0,1,2,2,2,0,0,2,0,1,2,2,1,2,0,2,1,0,0,2,1,1,0,1,0,1,0,0,0,1,1,2,0,0,1,2,2,2,2,2,2,0,2,1,1,1,1,1,2,0,2,2,2,0,2,0,1,0,1,2,1,0,1,2,1,2,1,2,0,2,0,1,0,1,2,2,1,2,2,1,0,0,1,2,1,1,0,0,2,1,0,2,1,2,0,0,1,0,2,0,1,2,2,2,1,2,0,2,2,2,2,2,0,0,0,1,0,2,0,0,1,1,0,0,2,2,1,0,0,0,2,0,1,1,1,2,1,1,2,1,1,0,1,0,1,1,1,2,0,0,2,2,2,1,1,1,2,2,2,0,1,0,0,0,0,1,0,2,2,0,2,2,1,1,1,2,1,1,1,0,2,0,2,1,1,2,2,1,1,2,0,0,2,1,2,0,1,1,1,2,2,0,1,2,2,2,1,1,0,1,0,0,1,2,1,1,0,1,0,2,2,2,0,1,1,0,1,0,1,2,2,2,1,1,0,1,0,0,2,1,1,1,0,0,0,0,2,2,2,0,1,0,2,0,0,0,0,0,0,2,0,1,0,0,0,1,1,2,2,1,2,2,0,2,1,0,2,1,2,0,1,2,1,2,2,2,2,2,0,0,1,0,0,2,2,0,1,0,0,0,2,1,0,1,2,1,1,0,0,1,1,0,0,2,2,2,1,0,0,0,0,0,0,1,0,1,2,0,1,1,2,1,0,0,0,2,2,1,2,2,0,0,1,0,1,0,0,1,2,0,0,0,1,1,0,0,1,0,0,0,0,0,2,0,2,0,0,0,0,0,1,2,1,1,1,2,2,0,2,1,0,2,1,0,2,1,1,0,2,0,2,1,0,0,0,1,1,0,1,0,2,2,2,1,2,0,1,2,0,0,0,2,2,2,1,1,1,2,2,2,2,0,1,0,0,1], 62500));
/*
[62, 100, 4]
0 62 - 100 = 38
1 62 - 4   = 58
2 100 - 62 = 38
3 100 - 4  = 96
4 4 - 62   = 58
5 4 - 100  = 96

Do I need to sort the array? NO
[4, 62, 100]
0 4 - 62   = 58
1 4 - 100  = 96
2 62 - 4   = 58
3 62 - 100 = 38
4 100 - 4  = 96
5 100 - 62 = 38

Do I sort the differences?
*/