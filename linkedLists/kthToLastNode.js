/*
  Prompt: https://www.interviewcake.com/question/javascript/kth-to-last-node-in-singly-linked-list
*/

/* Inputs & Outputs */
function LinkedListNode(value) {
    this.value = value;
    this.next = null;
}

var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

// kthToLastNode(2, a);
// returns the node with value "Devil's Food" (the 2nd to last node)

/*
  Strategy 1
    Iterate thru entire linked list saving into an array, return array[array.length - k]

*/

const kthToLastNode = (k, head) => {
  const array = [];
  while (head.next) {
    array.push(head);
    head = head.next;
  }
  return array[array.length - k];
};
/*
  Time Complexity: Linear
  Space Complexity: Constant as saving references in array?
*/

console.log(kthToLastNode(2, a));