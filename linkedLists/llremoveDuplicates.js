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
  1 -> null                               => 1 -> null
  3 -> 3 -> 3 -> null                     => 3 -> null
  0 -> 1 -> 2 -> 3 -> 4 -> 4 -> 4 -> null => 0 -> 1 -> 2 -> 3 -> 4 -> null
  1 -> 2 -> 3 -> 4 -> 4 -> 4 -> 5 -> null => 1 -> 2 -> 3 -> 4 -> 5 -> null
General Plan
  If head is null, return null
  Create node equal to head
  Create prevNode

  Iterate through linked list
    If prevNode's data equals node's data
      Set prevNode's next to node's next
    Else 
      Set prevNode equal to node
    If node.next equals null
      return head
    Set node equal to node.next

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
let sample3 = {
  data: 1,
  next: null
}
let sample4 = {
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
            next: {
              data: 5,
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
console.log(removeDuplicates(sample3)); // 1 -> null
// console.log(removeDuplicates(sample4)); // 1 -> 2 -> 3 -> 4 -> 5 -> null
