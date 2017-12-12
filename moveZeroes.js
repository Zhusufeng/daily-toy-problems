/* 
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].

Note:
You must do this in-place without making a copy of the array.
Minimize the total number of operations.
*/

/*
O: Array of nums
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
  Iterate through array, starting at index 0 til current end of array
    If array 
*/