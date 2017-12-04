/*
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer
*/

/*
O: Number
I: Array of integers, Integer number
C: 
  Time: Linear
  Space: Constant
E: 
  [3, 4, 5, 1, 2], 1 => 3
  [9, 12, 17, 2, 4, 5], 2 => 3
  [0, 1, 2, 3, 4, 5], 4, => 4
  [0, 1], 1 => 1
  [1, 22, 33, 44, 55], 66 => -1
  Maybe...
  [11, 22, 33], 11 => 0
  [11, 22, 33], 33 => 2

General Plan
  Iterate through shiftArr
    If shiftArr at current index equals num
      Return current index
  Return -1
*/