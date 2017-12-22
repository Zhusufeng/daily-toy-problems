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

General Plan
Idea #1
  Iterate through linked list pushing values into an array
  Iterate through array checking if i (start from beginning) equals j (start from end)
    If it doesn't equal return false
  Return true

Idea #2
  Iterate through linked list 
    Create new linked list where you addToHead
  Iterate through linked list
    Check if linked list node equals the second linked list's node
      If not return false
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
 
};