/*
  Linked Lists - Move Node In-place

  Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. This problem should be done after Linked Lists - Move Node.

  ###JavaScript

  var source = 1 -> 2 -> 3 -> null
  var dest = 4 -> 5 -> 6 -> null
  moveNode(source, dest)
  source === 2 -> 3 -> null
  dest === 1 -> 4 -> 5 -> 6 -> null

  You should throw an error if any of the following conditions exist:
    The source argument is null.
    The dest argument is null.
    The source argument is an "empty" node with a null data attribute.

  Unlike the Linked Lists - Move Node kata, we are not returning a Context object but rather we are changing two objects in-place. We are also introducing the concept of an emtpy Node object whose data attribute is set to null. Passing in an empty node rather than null for the dest argument to indicate an empty destination list enables members/attributes of dest to be mutated within the function with the side effect of changing the destination list outside of the function.
*/

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function moveNode(source, dest) {
  if (!source || !dest) throw new Error;
  if (!source.data || !dest.data) throw new Error;

  let newDestNode = new Node(dest.data);
  newDestNode.next = dest.next;
  dest.next = newDestNode;
  dest.data = source.data;

  source.data = source.next.data;
  source.next = source.next.next;
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

console.log(moveNode(source2, dest2));
console.log(JSON.stringify(source2, null, 2));
console.log(JSON.stringify(dest2, null, 2));