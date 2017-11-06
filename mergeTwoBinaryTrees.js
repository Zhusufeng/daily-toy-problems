/*
Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.

Example 1:
Input:
  Tree 1                     Tree 2
          1                         2
         / \                       / \
        3   2                     1   3
       /                           \   \
      5                             4   7
Output:
Merged tree:
       3
      / \
     4   5
    / \   \
   5   4   7
Note: The merging process must start from the root nodes of both trees.
*/

/*
O: New binary tree
I: 2 binary trees
C:
  Time: Linear as we iterate through the trees
  Space: Constant
E:

INPUT                                                       OUTPUT
----------------------------------------------------------------------
  Tree 1                     Tree 2                      Merged Tree
          1                         2                                3
         / \                       / \                              / \
        3   2                     1   3                            4   5
       /                           \   \                          / \   \
      5                             4   7                        5   4   7

Tree1 = {
  value: 1,
  children: [
    {
      value: 3,
      children: [
        {
          value: 5,
          children: []
        }
      ]
    },
    {
      value: 2,
      children: []
    },
  ]
}

General Plan
--------------
node function
  this.value is null
  this.children is []

Adding
If tree1 is null,
  val1 = 0
Else
  val1 = tree1.value
If tree2 is null,
  val2 = 0
Else
  val2 = tree2.value
sum = val1 adding val2
If sum is greater than 0
  mergedTree = Create new node (node(sum))
  If counter is greater than 0
    return mergedTree
Else
  return


Children
Loop through trees using for loop where i is 0 til it goes up to 2, i++
node = mergeTrees(tree1.children[i], tree2.children[i], counter++);
Push node to mergedTree.children

return mergedTree
*/

var mergeTrees = function(t1, t2, counter = 0) {
  let val1, val2, sum, mergedTree;
  if (!t1.val) {
    val1 = 0;
  } else {
    val1 = t1.val;
  }
  if (!t2.val) {
    val2 = 0;
  } else {
    val3 = t2.val;
  }
  sum = val1 + val2;
  if (sum > 0) {
    mergedTree = new TreeNode(sum);
      if (counter > 0) {
        return mergedTree;
      }
  } else {
    return;
  }

  if (t1.left || t2.left) {
    mergedTree.left = mergeTrees(t1.left, t2.left, counter++);
  }

  if (t1.right || t2.right) {
    mergedTree.right = mergeTrees(t1.right, t2.right, counter++);
  }

  return mergedTree;
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Simple Tests
var tree1 = {
  val: 1,
  left: {
    val: 3,
    left: null,
    right: null
  },
  right: {
    val: 2,
    left: null,
    right: null
  }
};

var tree2 = {
  val: 2,
  left: {
    val: 1,
    left: null,
    right: null
  },
  right: {
    val: 3,
    left: null,
    right: null
  }
};

console.log(mergeTrees(tree1, tree2));