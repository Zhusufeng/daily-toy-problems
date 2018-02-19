/*
  Prompt: http://www.codewars.com/kata/linked-lists-move-node
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
  if (!source) throw new Error('source is null');
  let newHead = source.next;
  source.next = dest;
  dest = source;
  source = newHead;
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
};
// console.log(moveNode(source1, dest1)); // err - works
// console.log(moveNode(source1, dest2)); // err - works
console.log(JSON.stringify(moveNode(source3, dest1), null, 2)); // s = null, dest = 1 -> null
console.log(JSON.stringify(moveNode(source4, dest4), null, 2)); // s = 2 -> null, dest = 1 -> 4 -> 5 -> null

