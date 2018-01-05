/*
Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Ie.
1 -> 2 -> 3 -> 4
You are given the third node with the value 3
The linked list should now look like:
c
*/

/*
Definition for singly-linked list
function ListNode(val) {
  this.val = val;
  this.next = null;
}
*/

/*
O: Nothing
I: node
C:
  Time: Constant
  Space: Constant
E:
1 -> 2 -> 3 -> 4, 3 => 1 -> 2 -> 4
1 -> 2 -> 3 -> 4, 4 => 1 -> 2 -> 3 -> 4
1 -> 2 -> 3 -> 4, 1 => 2 -> 3 -> 4

General Plan
  If node.next is truthy (not the tail)
    Replace node's val with node.next's val
    Replace node's next with node.next's next
*/

var deleteNode = function(node) {
  if (node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
}

function listNode(val) {
  this.val = val;
  this.next = null;
}

const node1 = new listNode(1);
const node2 = new listNode(2);
const node3 = new listNode(3);
const node4 = new listNode(4);
node1.next = node2;
node2.next = node3;
node3.next = node4;
console.log(JSON.stringify(node1, null, 2));  // 1 -> 2 -> 3 -> 4
deleteNode(node3);
console.log(JSON.stringify(node1, null, 2));  // 1 -> 2 -> 4
console.log(node3); // val is 4, next is null