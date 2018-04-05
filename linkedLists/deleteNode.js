/*
  Prompt: https://www.interviewcake.com/question/javascript/delete-node
*/

/*
  Inputs & Outputs
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);

/*
  Strategy
  

  Constraints

  
  Steps

  Skeleton

*/

