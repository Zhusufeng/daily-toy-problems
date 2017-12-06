/*
Linked Lists - Length & Count

Implement Length() to count the number of nodes in a linked list.
length(null) === 0
length(1 -> 2 -> 3 -> null) === 3

Implement Count() to count the occurrences of an integer in a linked list.
count(null, 1) === 0
count(1 -> 2 -> 3 -> null, 1) === 1
count(1 -> 1 -> 1 -> 2 -> 2 -> 2 -> 2 -> 3 -> 3 -> null, 2) === 4
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  // Your code goes here.
  let node = head;
  let length = 0;

  while (node.next !== null) {
    length++;
    node = node.next;
  }

  return length;
}

function count(head, data) {
  // Your code goes here.
}

let sample = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
}