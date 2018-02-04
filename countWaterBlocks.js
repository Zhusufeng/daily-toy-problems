/*
  O: Number (of water blocks)
  I: Array of Numbers
  C: 
    Time:
    Space:
  E:
    [5, 2, 3, 2, 1, 3] => 4
    #
    #
    # - # - - #
    # # # # - #
    # # # # # #
    -----------------------------------------
    Inputs & Outputs
    [4, 4, 4, 4] => 0
    [4, 4, 4, 3] => 0
    [4, 3, 2, 1] => 0
    [4, 2, 1, 1] => 0
    [3, 4, 4, 3] => 0
    [1, 4, 4, 1] => 0
    
    [5, 1, 1, 5] => 8
    [4, 1, 1, 5, 2, 3] => 7
    [5, 4, 1, 1, 4, 5] => 10
    [4, 1, 5, 2, 4] => 5
    [5, 1, 1, 4, 1, 5] => 13

    Constraints
      Input will only be positive integers

    Strategy
      Use two pointers, one going left to right; the other coming from right going left. 
      Also save the highest values coming from left to the right and right to the left.
      While the two pointers are not equal to each other, check if the left wall is higher than the right. If it is, add high left wall - current value at left pointer to counter. Otherwise add high right wall - current value at right pointer to counter.

    Big-O
      Time: O(n)- traverse array of walls once
      Space: O(1)      

    Steps
      Given [4, 1, 1, 5, 2, 3]
      i = 0, j = 5, counter = 0
      leftWall = 4, rightWall = 3
      rightWall is less than leftWall
        counter += rightWall - arr[5] aka 3 - 3 aka 0
        Decrement j
      i = 0, j = 4, counter = 0
      leftWall = 4, rightWall = 3 or 2
      rightWall is less than leftWall
        counter += rightWall - arr[4] aka 3 - 2 aka 1
        Decrement j
      i = 0, j = 3, counter = 1
      leftWall = 4, rightWall = 3 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[0] aka 4 - 4 aka 0
        Increment i
      i = 1, j = 3, counter = 1
      leftWall = 4 or 1, rightWall = 5 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[1] aka 4 - 1 aka 3
        Increment i
      i = 2, j = 3, counter = 4
      leftWall = 4 or 1, rightWall = 5 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[2] aka 4 - 1 aka 3
        Increment i
      i = 3, j = 3, counter = 7
      leftWall = 4 or 5, rightWall = 5 or 5
        counter += rightWall - arr[3] aka 5 - 5 aka 0
        Increment i
      i is now greater than j, exit loop
      return counter, which is 7

    Skeleton

*/

var waterBlocks = function (blocks) {
  // TODO: Implement
};