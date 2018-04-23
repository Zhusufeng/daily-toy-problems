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

// const kthToLastNode = (k, head) => {
//   const array = [];
//   while (head.next) {
//     array.push(head);
//     head = head.next;
//   }
//   return array[array.length - k];
// };
// /*
//   Time Complexity: Linear
//   Space Complexity: Constant as saving references in array?
// */

// console.log(kthToLastNode(2, a)); // Works :)

// /*
//   Strategy 2
//     Iterate thru entire linked list & making it a doubly linked list & walk back k nodes
// */
// const kthToLastNode = (k, head) => {
//   let prev = null;
//   let counter = 1;
//   let last = null;
//   let kthNode = null;
//   while (head !== null) {
//     // add new property to node to make it doubly linked
//     head.prev = prev;

//     // save node to be used in the next node
//     prev = head;

//     // if you are at last node, save it as last
//     if (head.next === null) {
//       last = head;
//     }

//     // go to next node
//     head = head.next    
//   }
//   while (counter <= k && last.prev) {
//     if (counter === k) {
//       kthNode = last;
//       break;
//     }
//     counter += 1;
//     last = last.prev;
//   }
//   return kthNode;
// };
// /*
//   Time Complexity: Linear
//   Space Complexity: Constant
// */

// console.log(kthToLastNode(2, a)); 

/*
  Strategy 3
    Find length of list. Check if k is less than length of list. Go down length of list until reach length - k and return that node
*/
const kthToLastNode = (k, head) => {
  if (k < 1) {
    throw new Error ('k is invalid. k needs to be larger than 1');
  }
  let listLength = 1;
  let currentNode = head;
  let kthSpot = 0;

  while (currentNode.next) {
    listLength += 1;
    currentNode = currentNode.next;
  }

  if (k > listLength) {
    throw new Error ('k is larger than length of list');
  }

  console.log(listLength, k);
  kthSpot = listLength - k;
  console.log(kthSpot);

  currentNode = head;

  for (let i = 0; i < kthSpot; i += 1) {
    currentNode = currentNode.next;
  }

  return currentNode;
};
/*
  Time Complexity: Linear
  Space Complexity: Constant
*/

console.log(kthToLastNode(2, a)); 
