/*
  Prompt: https://www.interviewcake.com/question/javascript/permutation-palindrome
*/

/*
  Inputs & Outputs
*/

const input1 = 'aabb';
const output1 = true;

const input2 = 'livic';
const output2 = false;

const input3 = 'penguin';
const output3 = false;

/*
  Strategy
    Make a hash map of letters & their count (iterate thru string)
    Count num of odd occurences (which can only happen once for valid palindrome) (iterate thru hash map)

  Big-O
    Time: Linear => O(2n)
    Space: Constant to size of input O(1)

  Constraint
    Input will only be lowercase letters
    Efficient!

  Skeleton
    
*/