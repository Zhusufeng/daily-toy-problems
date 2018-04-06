/*
  Prompt: https://www.interviewcake.com/question/javascript/linked-list-cycles
*/

/*
  Strategy
*/

/*
  Inputs & Outputs
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

const a = new LinkedListNode('a');
const b = new LinkedListNode('b');
const c = new LinkedListNode('c');
const d = new LinkedListNode('d');
a.next = b;
b.next = c;
c.next = d;
d.next = c;

containsCycle(a); // true
