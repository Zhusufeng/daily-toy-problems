/*
  Prompt: https://www.interviewcake.com/question/javascript/linked-list-cycles
*/

/*
  Strategy
    Fast iteration & slow iteration through the linked list
    If fast pointer eqls slow pointer return true

  Steps
    slow = a, fast = a, no check, counter = 0
    slow = a, fast = b, a === b?, counter = 1
    slow = b, fast = c, b === c?, counter = 2
    slow = b, fast = d, b === d?, counter = 3
    slow = c, fast = c, c === c?, return true

  Skeleton
    const containsCycle = (node) => {
      let counter = 0;
      let slow = node;
      let fast = node;

      // while slow is not null
        // if counter is not 0 and slow.value eqls fast.value
          // return true
        // increment counter
        // update fast to fast.next
        // if counter is positive
          // update slow to slow.next
      return false;
    };
*/
const containsCycle = (node) => {
  let counter = 0;
  let slow = node;
  let fast = node;

  while (slow !== null) {
    if (counter !== 0 && slow.value === fast.value) {
      return true;
    }
    counter += 1;
    fast = fast.next;
    if (counter % 2 === 0) {
      slow = slow.next;
    }
  }
  return false;
};
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
