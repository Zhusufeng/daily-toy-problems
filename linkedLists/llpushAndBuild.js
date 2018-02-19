/* 
  Prompt: http://www.codewars.com/kata/linked-lists-push-and-buildonetwothree
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function push(head, data) {
  // Create new node
  var newNode = new Node(data);
  
  // Set newNode's next
  newNode.next = head;

  // Set head to newNode
  head = newNode;

  return head;
}

function buildOneTwoThree() {
  var head = null;
  head = push(head, 3);
  head = push(head, 2);
  head = push(head, 1);

  return head;
}

// Test
// var chained = null
// console.log('chained ==> ', chained);
// chained = push(chained, 3);
// console.log('chained, 3 ==> ', chained);
// chained = push(chained, 2);
// console.log('chained, 2 ==> ', chained);
// chained = push(chained, 1);
// console.log('chained, 1 ==> ', chained);
// chained = push(chained, 8) // === 8 -> 1 -> 2 -> 3 -> null
// console.log('chained, 8 ==> ', JSON.stringify(chained, null, 2));

console.log(buildOneTwoThree());
