/*
Write a MoveNode() function which takes the node from the front of the source list and moves it to the front of the destintation list. You should throw an error when the source list is empty. For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by moveNode.

MoveNode() is a handy utility function to have for later problems.

JavaScript

var source = 1 -> 2 -> 3 -> null
var dest = 4 -> 5 -> 6 -> null
moveNode(source, dest).source === 2 -> 3 -> null
moveNode(source, dest).dest === 1 -> 4 -> 5 -> 6 -> null
*/

/*
O: Context Object
I: Source linked list, destination linked list
C:
  Time: Constant
  Space: Constant
E:
  s = null, dest = null,                            throw err
  s = null, dest = 1 -> 2 -> null,                  throw err
  s = 1 -> null, dest = null,                       s = null, dest = 1 -> null
  s = 1 -> 2 -> null, dest = 4 -> 5 -> null         s = 2 -> null, dest = 1 -> 4 -> 5 -> null

General Plan
Idea #1
  Set temp to source.next
  Set source.next to dest
  Set dest to source
  Set source to temp

Idea #2
  If source is null, throw new Error 'source is null'
  Set newHead to source.next 
  Set source.next to dest
  Set dest to source
  Set source to newHead
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(source, dest) {
  this.source = source;
  this.dest = dest;
}

function moveNode(source, dest) {
  // Your code goes here.
  // Remember to return the context.
  return new Context(source, dest);
}

source1 = null;
dest1 = null;
dest2 = {
  data: 1,
  next: {
    data: 2,
    next: null
  }
};
source3 = {
  data: 1,
  next: null
};
source4 = {
  data: 1,
  next: {
    data: 2,
    next: null
  }
};
dest4 = {
  data: 4,
  next: {
    data: 5,
    next: null
  }
}