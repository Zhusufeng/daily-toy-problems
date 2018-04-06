/*
  Prompt: https://www.interviewcake.com/question/javascript/linked-list-cycles
*/

/*
  Strategy
    Fast iteration & slow iteration through the linked list
    If fast pointer eqls slow pointer return true

  Steps
    counter = 0, slow = null, fast = a
    counter = 1, slow = null, fast = b
    counter = 2, slow = a,    fast = c
    counter = 3, slow = a,    fast = d
    counter = 4, slow = b,    fast = c
    counter = 5, slow = b,    fast = d
    counter = 6, slow = c,    fast = c
    return true
 
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
