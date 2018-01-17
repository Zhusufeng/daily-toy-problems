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
  // Your code goes here.
}

// Strategy
// If source is null, throw err. If dest is null, throw err
// Change temp to source
// Set source to source.next
// Change temp.next to dest
// Set dest to temp

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
console.log(source2);
console.log(dest2);