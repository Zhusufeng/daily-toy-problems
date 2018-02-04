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

    Steps

    Skeleton
*/

var waterBlocks = function (blocks) {
  // TODO: Implement
};