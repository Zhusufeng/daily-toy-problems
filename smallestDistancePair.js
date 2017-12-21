/*
Given an integer array, return the k-th smallest distance among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B.

Example 1:
Input:
nums = [1,3,1]
k = 1
Output: 0 
Explanation:
Here are all the pairs:
(1,3) -> 2
(1,1) -> 0
(3,1) -> 2
Then the 1st smallest distance pair is (1,1), and its distance is 0.
Note:
2 <= len(nums) <= 10000.
0 <= nums[i] < 1000000.
1 <= k <= len(nums) * (len(nums) - 1) / 2.
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


*/