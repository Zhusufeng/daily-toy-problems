/*
  Prompt: https://www.interviewcake.com/question/javascript/balanced-binary-tree
*/

function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};

/*
  ** ITERATIVE ATTEMPT **
*/

/*
  Iterative Notes

  Strategy
    Keep track of nodes. Use a stack to look at each node. Loop through stack to see if we add more than 2 depths. (If there are more than 2 depths, we have a nonbalanced tree)

  Big-O
    Time: Linear
    Space: Linear (create a stack for each node)

  Steps
    Given input3
    depths = []
    nodes = [[node, 0]]
    curr value: 0, has left, has right - push into nodes
    depths = []   
    nodes = [[node.left (4), 1], [node.right (6), 1]] 
    curr value: 4, no left, no right, push into depths
    depths = [1]
    nodes = [[node.right (6), 1]] 
    curr value: 6, has left, has right - push into nodes
    depths = [1]
    nodes = [[node.left (2), 2], [node.right (7), 2]]
    curr value: 2, has left, has right - push into nodes
    depths = [1]
    nodes = [[node.left (7), 2], [node.left (5), 3], [node.left (10), 3]]
    curr value: 5, no left, no right, push into depths
    depths = [1, 3]
    if depths.length is greater than 1, look at depths
    difference = 1 - 3 = Math.abs(2)
    If difference is greater than 1, return false

  Skeleton
    const isTreeSuperBalanced = node => {
      const depths = [];
      const nodes = [[node, 0]];

      // while nodes is not empty
        // if no left and no right, it's a leaf: push depth into depths
        // if depths.length is greater than 1, get the difference
          // if difference is greater than 1, return false
        // if node has left, push it and depth + 1 to nodes
        // if node has right, push it and depth + 1 to nodes
      return true
    };
*/

/*
   ** RECURSIVE ATTEMPT **
*/
// const isTreeSuperBalanced = (tree, depth = 0, depths = []) => {
//   if (tree.left === null && tree.right === null) {
//     depths.push(depth);
//     return;
//   }
  
//   depth += 1;
//   if (tree.left) {
//     isTreeSuperBalanced(tree.left, depth, depths);
//   }
//   if (tree.right) {
//     isTreeSuperBalanced(tree.right, depth, depths);
//   }
  
//   // Get total max depth first
//   // get the minimum
  
//   // Keep stuff below here? Or move around? \/

//   let minDepth = null;
//   let maxDepth = null;
  
//   for (let i = 0; i < depths.length; i++) {
//     if (!minDepth) {
//       minDepth = depths[i];  
//     }
//     if (!maxDepth) {
//       maxDepth = depths[i];
//     }
//     if (depths[i] < minDepth) {
//       minDepth = depths[i];
//     }
//     if (depths[i] > maxDepth) {
//       maxDepth = depths[i];
//     }
//   }
//   // hey use Math.min(), Math.max()
  
//   const maximumDifference = maxDepth - minDepth;
  
//   if (maximumDifference > 1) {
//     return false; // not superbalanced
//   } else {
//     return true; // superbalanced
//   }
// };


/*
  Inputs & Outputs
    const input1 = {
      value: 0,
      left: {
        value: 4,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      },
      right: {
        value: 6,
        left: {
          value: 13,
          left: null,
          right: null
        },
        right: null
      }
    };
    
    const output1 = true; // superbalanced with depth of 0 between any two leaves
    
    const input2 = {
      value: 0,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 2,
          left: null,
          right: null
        },
        right: {
          value: 7,
          left: null,
          right: null
        }
      }
    };
    const output2 = true; // superbalanced with depth of 1 between any two leaves
    
    const input3 = {
      value: 0,
      left: {
        value: 4,
        left: null,
        right: null
      },
      right: {
        value: 6,
        left: {
          value: 2,
          left: {
            value: 5,
            left: null,
            right: null
          },
          right: {
            value: 10,
            left: null,
            right: null
          }
        },
        right: {
          value: 7,
          left: {
            value: 15,
            left: null, 
            right: null
          },
          right: {
            value: 20,
            left: null,
            right: null
          }
        }
      }
    };
    const output3 = false; // not balanced bc deppt between some of the leaves was 2

    Strategy
      Ideas
        Kept track of leaf depths in an array (input3 -> [1, 3, 3, 3])
        Find the min depth and max depth of leaves 
        Subtract min and max depth
        If max - min depth > 1, return false
    
    Big-O
      Time: Linear
      Space: Constant 
    
    Constraints
    
    Steps
      Given input3
      let depth = 0;
      const depths = []
      depth: 0, curr value: 0, left is an obj, right is an obj
      depth: 1, curr value: 4, left is null, right is null, => depths.push(1) return
      depth: 1, curr value: 6, left is an obj, right is an obj
      depth: 2, curr value: 2, left is an obj, right is an obj
      depth: 3, curr value: 5, left is null, right is null, => depths.push(3)
      depth: 3, curr value: 10, left is null, right is null, => depths.push(3)
      depth: 2, curr value: 7, left is an obj, right is an obj
      depth: 3, curr value: 15, left is null, right is null, => depths.push(3)
      depth: 3, curr value: 20, left is null, right is null, => depths.push(3)
      depths [1, 3, 3, 3]
      
      Iterate over depths looking for minDepth = null and maxDepth = null
        minDepth = 1
        maxDepth = 3
      maximumDifference = maxDepth - minDepth
      
      If maximumDifference > 1 aka 2 > 1 return false
    
    Skeleton
      const isTreeSuperBalanced = (tree, depth = 0, depths = []) => {
        // if tree.left && tree.right are null, push depth to depths and return
        // If left isn't null, call isTreeSuperBalanced(tree.left, depth, depths)
        // If right isn't null, call isTreeSuperBalanced(tree.right, depth, depths)
        
        let minDepth = null;
        let maxDepth = null;
        // iterate thru depths and get minDepth and maxDepth
        // If maxDepth > 1 return false otherwise true
      };
*/

const input1 = {
  value: 0,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null
    },
    right: {
      value: 7,
      left: null,
      right: null
    }
  },
  right: {
    value: 6,
    left: {
      value: 13,
      left: null,
      right: null
    },
    right: null
  }
};

console.log('Test input1 should be true: ', isTreeSuperBalanced(input1)); // true

const input3 = {
  value: 0,
  left: {
    value: 4,
    left: null,
    right: null
  },
  right: {
    value: 6,
    left: {
      value: 2,
      left: {
        value: 5,
        left: null,
        right: null
      },
      right: {
        value: 10,
        left: null,
        right: null
      }
    },
    right: {
      value: 7,
      left: {
        value: 15,
        left: null, 
        right: null
      },
      right: {
        value: 20,
        left: null,
        right: null
      }
    }
  }
};

console.log('Test input3 should be false: ', isTreeSuperBalanced(input3)); // false
