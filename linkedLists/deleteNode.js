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

/*
  Strategy
    Change b.value to this.next.value and b.next to this.next.next

  Constraints
    You are only given a variable pointing to that node
  
  Skeleton
    const deleteNode = node => {
      node.value = node.next.value;
      node.next = node.next.next;
    };
*/

const deleteNode = node => {
  if (node.next) {
    node.value = node.next.value;
    node.next = node.next.next;
  } else {
    throw new Error ('Cannot delete the last node!');
  }  
};
deleteNode(b);
console.log(a); // 'A' -> 'C'

/*
  Important Note: By doing this (updating references), this 
  can cause side effects. If someone uses var b, it is not b
  any more but c.
*/
