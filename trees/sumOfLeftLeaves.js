/*
  Prompt: https://leetcode.com/problems/sum-of-left-leaves/description/
*/

/*
  Inputs & Outputs
*/
const input1 = {
  val: 3,
  left: {
    val: 9,
    left: null,
    right: null
  },
  right: {
    val: 20,
    left: {
      val: 15,
      left: null,
      right: null
    },
    right: {
      val: 7,
      left: null,
      right: null
    }
  }
};

const output1 = 24;

/*
  Strategy
    Iterate thru entire tree, adding any this.lefts

  Big-O
    Time: Linear
    Space: Constant

  Steps
    sum = 0
    [root]
    sum = 9
    [{9}, {20}]
    sum = 24
    [{9}, {15}, {7}]
    sum = 24
    [{9}, {15}]
    sum = 24
    [{9}]
    sum = 24
    
  const sumOfLeftLeavese = (root, sum) => {
    // Push root to holder array
    // While holder has length
      // Set current to holder.pop
      // If left, add to sum & push to holder array
      // If right, push to holder array
    // Return sum
  }; 
*/

