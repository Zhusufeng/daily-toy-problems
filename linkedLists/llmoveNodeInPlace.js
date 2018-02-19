/*
  Prompt: http://www.codewars.com/kata/linked-lists-move-node-in-place
*/

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function moveNode(source, dest) {
  if (!source || !dest) throw new Error('No Source or Dest list');
  if (!source.data) throw new Error('No source.data');

  let newDestNode;
  if (!dest.data) { // if dest is empty
    dest.data = source.data; 
  } else {
    newDestNode = new Node(dest.data);
    newDestNode.next = dest.next;
    dest.next = newDestNode;
    dest.data = source.data;  
  }

  if (source.next) { // if source has next
    source.data = source.next.data;
    source.next = source.next.next;
  } else {
    source.data = null;
  }
  
}

// Strategy
// Dest:
// Create new node with dest.data
// This new node's next is dest.next
// Insert this new node after dest
// Get value of head in source and update dest.data
// Source:
// Update source's data to equal source.next.data
// Update source's next to equal source.next.next

// Time Complexity
// Constant time

let source1 = null;

let dest1 = null;

let source2 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
};

let dest2 = {
  data: 4,
  next: {
    data: 5,
    next: {
      data: 6,
      next: null
    }
  }
};

// console.log(moveNode(source1, dest1));
console.log(moveNode(source2, dest2));
console.log(JSON.stringify(source2, null, 2));
console.log(JSON.stringify(dest2, null, 2));