/*
Given a singly linked list, determine if it is a palindrome. 
Follow up: Could you do it in O(n) time and O(1) space?
*/

/*
O: Boolean
I: Linked list
C: 
  Time:
  Space:
E:
  'a' -> 'c' -> 'a' -> null                   => true
  'o' -> 't' -> 'a' -> 't' -> 'o' -> null     => true
  'a' -> 'c' -> 'e' -> null                   => false
  'o' -> 't' -> 'a' -> 't' -> 'r' -> null     => false
  'a' -> null                                 => ?
  'a' -> 'a' -> null                          => true
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
 
};