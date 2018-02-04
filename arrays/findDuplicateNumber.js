/*
  Solution should be O(n) time complexity and O(1) additional space complexity

  Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. 

  In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

  Example

  For a = [2, 3, 3, 1, 5, 2], the output should be
  firstDuplicate(a) = 3.

  There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than than second occurrence of 2 does, so the answer is 3.

  For a = [2, 4, 3, 5, 1], the output should be
  firstDuplicate(a) = -1.
*/

/*
  Inputs & Outputs
    const input1 = [2, 3, 3, 1, 5, 2];
    const output1 = 3;

    const input2 = [2, 4, 3, 5, 1];
    const output2 = -1;

    const input3 = [1, 2, 3, 4, 2];
    const output3 = 2;  

    const input4 = [1, 2, 3, 4, 4, 2];
    const output4 = 4; 

  Constraints
    Time complexity: O(n), Space complexity: O(1)

  Strategy
    Iterate through array. For the val at array at curr index, update the matching index to a negative value of itself. If the matching index is already negative, return the index + 1, else return null 

  Big-O
    Time complexity: O(n), Space complexity: O(1)

  Step by Step
    

  Skeleton


*/