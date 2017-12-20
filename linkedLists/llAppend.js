/* 
Linked Lists - Append

Write an Append() function which appends one linked list to another. The head of the resulting list should be returned.

var listA = 1 -> 2 -> 3 -> null
var listB = 4 -> 5 -> 6 -> null
append(listA, listB) === 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> null
If both listA and listB are null/NULL/None/nil, return null/NULL/None/nil. If one list is null/NULL/None/nil and the other is not, simply return the non-null/NULL/None/nil list.
*/

/*
O: linked list or null
I: linked list 1, linked list 2
C:
  Time: Linear
  Space: Constant
E:
  null, null => null
  null, 1 -> 2 -> null => 1 -> 2 -> null
  1 -> 2 -> null, null => 1 -> 2 -> null
  1 -> 2 -> null, 1 -> 2 -> null => 1 -> 2 -> 1 -> 2 -> null

General Plan
  If listA and listB are null
    Return listA (null)
  If listA is null
    Return listB
  If listB is null
    Return listA
  Create node set to listA head
  While node exists
    If node.next is null
      Set node.next to listB
      Return listA
    Set node equal to node.next
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function append(listA, listB) {
  if (listA === null && listB === null) {
    return listA;
  }
}

let sample1 = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: null
    }
  }
};

let sample2 = {
  data: 300,
  next: {
    data: 400,
    next: {
      data: 500,
      next: null
    }
  }
};

console.log(append(null, null)); // null
console.log(append(sample1, null)); // 0 -> 1 -> 2 -> null
console.log(append(null, sample2)); // 300 -> 400 -> 500 -> null
console.log(append(sample1, sample2)); // 0 -> 1 -> 2 -> 300 -> 400 -> 500 -> null
console.log(append(sample2, sample1)); // 300 -> 400 -> 500 -> 0 -> 1 -> 2 -> null

