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

Idea #3
  Create node equal to head
  Create counter equal to 0
  Iterate through linked list until node doesn't exist
    Increment counter (ie 6)
  Create currentNode equal to head
  Create complementNode (1st round should equal currentNode.next.next.next.next.next.next)
  Create j to 0
  Create nextCounter to counter
  Iterate through linkedlist until j is half of counter
    Iterate starting i at 0, until i is less than nextCounter, increment i by 1
      complementNode = complementNode.next
    If currentNode's data is NOT equal to complementNode's data
      Return false
    Set currentNode equal to currentNode.next
    Decrement nextCounter by 1
    Increment j
  Return true
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}
var isPalindrome = function(head) {
  let node = head;
  let counter = 0;

  while (node.next) {
    // console.log(counter);
    // console.log(node.data);
    counter++;
    node = node.next;
  } 
  console.log(counter);

  let currentNode = head;
  let nextCounter = counter;
  
  for (let j = 0; j < Math.ceil(counter/2); j++) {
    let complementNode = head;
    console.log(`nextCounter is ${nextCounter}`);
    console.log(`j is ${j}`);

    for (let i = 0; i < nextCounter; i++) {
      complementNode = complementNode.next;
    }

    console.log(`currentNode.data is ${currentNode.data}`);
    console.log(`complementNode.data is ${complementNode.data}`);
    if (currentNode.data !== complementNode.data) return false;
    currentNode = currentNode.next;
    nextCounter--;
  }
  return true;
};

let sample1 = {
  data: 'r',
  next: {
    data: 'a',
    next: {
      data: 'c',
      next: {
        data: 'e',
        next: {
          data: 'c',
          next: {
            data: 'a',
            next: {
              data: 'r',
              next: null
            }
          }
        }
      }
    }
  }
};
let sample2 = {
  data: 'r',
  next: {
    data: 'a',
    next: {
      data: 'c',
      next: {
        data: 'c',
        next: {
          data: 'a',
          next: {
            data: 'r',
            next: null
          }
        }
      }
    }
  }
};

console.log(isPalindrome(sample1)); // true
console.log(isPalindrome(sample2)); // true
