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
    If currentNode's val is NOT equal to complementNode's val
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

// Idea 3 with array and linked list
// var isPalindrome = function(head) {
//   if (!head) return true;
//   if (Array.isArray(head)) {
//     console.log('I am an array');
//     for (let k = 0, h = head.length - 1; k < Math.ceil(head.length / 2); k++, h--) {
//       console.log(`head[k] is ${head[k]} / head[h] is ${head[h]}`);
//       if (head[k] !== head[h]) return false;
//     }
//     return true;
//   }

//   let node = head;
//   let counter = 0;
//   while (node.next) {
//     // console.log(`counter is ${counter}`);
//     // console.log(`node.val is ${node.val}``);
//     counter++;
//     node = node.next;
//   } 
//   console.log(`counter is ${counter}`);

//   let currentNode = head;
//   let nextCounter = counter;
  
//   for (let j = 0; j < Math.ceil(counter/2); j++) {
//     let complementNode = head;
//     console.log(`nextCounter is ${nextCounter}`);
//     console.log(`j is ${j}`);

//     for (let i = 0; i < nextCounter; i++) {
//       complementNode = complementNode.next;
//     }

//     console.log(`currentNode.val is ${currentNode.val}`);
//     console.log(`complementNode.val is ${complementNode.val}`);
//     if (currentNode.val !== complementNode.val) return false;
//     currentNode = currentNode.next;
//     nextCounter--;
//   }
//   return true;
// };
// Idea 3 Code passes 25/26 test cases, failing on time limit
// Time: Quadratic
// Space: Not great...1/2 of length of linkedlist


// var isPalindrome = function(head) {
//   if (!head) return true;
//   let node = head;
//   let array = [];

//   while (node) {
//     // console.log(`counter is ${counter}`);
//     // console.log(`node.val is ${node.val}``);
//     array.push(node.val);
//     node = node.next;
//   } 
//   console.log(array);

//   for (let k = 0, h = array.length - 1; k < Math.ceil(array.length / 2); k++, h--) {
//     console.log(`array[k] is ${array[k]} / array[h] is ${array[h]}`);
//     if (array[k] !== array[h]) return false;
//   }
//   return true;

// };
// ^ Array version
// Time: Linear
// Space: Linear
// Runtime: 385 ms
// Percentage Beat: 3.45%


var isPalindrome = function(head) {
  if (!head) return true;
  let node = head;
  let counter = 0;
  let tail;
  let prevNode;

  // Create a doubly linked list: Linear
  while (node) {
    // console.log(`node.val is ${node.val}`);
    // If it's the head
    if (node === head) {
      node.prev = null;
    } else { // If it's NOT the head
      node.prev = prevNode;
    }

    // If we hit the end
    if (node.next === null) {
      // console.log(`you hit the end ${node.val}`);
      tail = node;
      // console.log(`tail is ${tail.val}`);
      break;
    }
    // Set the prevNode
    prevNode = node;

    // Change to the next node
    node = node.next;

    counter++;
  } 
  // console.log(counter);
  let currNode = head;
  let complementNode = tail;

  for (let i = 0; i < Math.ceil(counter / 2); i++) {
    // console.log(`currNode is ${currNode.val} / complementNode is ${complementNode.val}`);
    if (currNode.val !== complementNode.val) return false;
    currNode = currNode.next;
    complementNode = complementNode.prev;
  }
  return true;
};
// ^ Doubly linked list version
// Time: Linear
// Space: Linear?
// Runtime: 95 ms
// Percentage Beat: 93.68% 

// var isPalindrome = function(head) {
//   if (!head) return true;
//   let node = head;
//   let arr = [];

//   while (node) {
//     arr.push(node.val);
//     node = node.next;
//   } 
//   let len = Math.ceil(arr.length / 2);
//   let end = arr.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (arr[i] !== arr[end - i]) return false;
//   }
//   return true;
// };
// ^ Array version 2
// Time: Linear
// Space: Linear
// Runtime: 106ms
// Percentage Beat: 63.79%

let sample1 = {
  val: 'r',
  next: {
    val: 'a',
    next: {
      val: 'c',
      next: {
        val: 'e',
        next: {
          val: 'c',
          next: {
            val: 'a',
            next: {
              val: 'r',
              next: null
            }
          }
        }
      }
    }
  }
};
let sample2 = {
  val: 'r',
  next: {
    val: 'a',
    next: {
      val: 'c',
      next: {
        val: 'c',
        next: {
          val: 'a',
          next: {
            val: 'r',
            next: null
          }
        }
      }
    }
  }
};
let sample3 = {
  val: 'r',
  next: {
    val: 'a',
    next: {
      val: 'c',
      next: {
        val: 'z',
        next: {
          val: 'a',
          next: {
            val: 'r',
            next: null
          }
        }
      }
    }
  }
};
let sample4 = {
  val: 'r',
  next: null
};
let sample5 = null;
let sample6 = {
  val: 1,
  next: {
    val: 2,
    next: null
  }
};
console.log(isPalindrome(sample1)); // true
console.log(isPalindrome(sample2)); // true
console.log(isPalindrome(sample3)); // false
console.log('test 4: ', isPalindrome(sample4)); // true?
console.log('test 5: ', isPalindrome(sample5)); // true based on leetCode
console.log(isPalindrome(sample6)); // false




