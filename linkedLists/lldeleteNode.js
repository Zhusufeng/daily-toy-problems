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
*/

var deleteNode = function(node) {

}