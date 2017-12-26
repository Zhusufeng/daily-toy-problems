/*
Linked Lists - Remove Duplicates

Write a RemoveDuplicates() function which takes a list sorted in increasing order and deletes any duplicate nodes from the list. Ideally, the list should only be traversed once. The head of the resulting list should be returned.

var list = 1 -> 2 -> 3 -> 3 -> 4 -> 4 -> 5 -> null
removeDuplicates(list) === 1 -> 2 -> 3 -> 4 -> 5 -> null
If the passed in list is null/None/nil, simply return null.

Note: Your solution is expected to work on long lists. Recursive solutions may fail due to stack size limitations.
*/

/*
O: Linked list
I: Linked list
   assumption: sorted in increasing order
C:
  Time: Linear
  Space: Constant
E:
  null                                    => null
  3 -> 3 -> 3 -> null                     => 3 -> null
  0 -> 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> null => 0 -> 1 -> 2 -> 3 -> 4 -> null

General Plan
  If head is null, return null
  Create prevNode
  
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function removeDuplicates(head) {
  // Your code goes here.
  // Remember to return the head of the list.
}

let sample1 = {
  data: 3,
  next: {
    data: 3,
    next: {
      data: 3,
      next: null
      }
    }
  }
};

let sample2 = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 4,
            next: {
              data: 4,
              next: null
            }
          }
        }
      }
    }
  }
};
console.log(removeDuplicates(null)); // null
console.log(removeDuplicates(sample1)); // 3 -> null
// console.log(removeDuplicates(sample2)); // 0 -> 1 -> 2 -> 3 -> 4 -> null