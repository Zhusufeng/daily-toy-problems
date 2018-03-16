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

const input2 = {
  val: 5,
  left: null,
  right: null
};

const output2 = 0;

const input3 = {};
const output3 = 0;

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
// const sumOfLeftLeaves = root => {
//   let sum = 0;
//   let holder = [];
//   holder.push(root);

//   while (holder.length) {
//     let current = holder.pop();
//     if (current.left) {
//       sum += current.left.val;
//       holder.push(current.left);
//     }
//     if (current.right) {
//       holder.push(current.right);
//     }
//   }
//   return sum;
// }; 
// ^ Above code is for all LEFT trees, not only leaves

const sumOfLeftLeaves = root => {
  let sum = 0;
  let holder = [];
  holder.push(root);

  while (holder.length) {
    let current = holder.pop();
    if (current.left) {
      if (!current.left.left && !current.left.right) {
        sum += current.left.val;
      }
      holder.push(current.left);
    }
    if (current.right) {
      holder.push(current.right);
    }
  }
  return sum;
}; 

console.log(sumOfLeftLeaves(input1));
console.log(sumOfLeftLeaves(input2));
console.log(sumOfLeftLeaves(input3));

