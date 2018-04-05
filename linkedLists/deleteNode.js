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
    Change b.value to this.next and b.next to this.next.next

  Constraints
    You are only given a variable pointing to that node
  
  Skeleton
    const deleteNode = node => {
    
    };
*/

