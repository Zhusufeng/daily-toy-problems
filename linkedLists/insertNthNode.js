/*
  Prompt: http://www.codewars.com/kata/linked-lists-insert-nth-node
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function insertNth(head, index, data) {
  let node;
  let counter = 0; 
  let insertNode = new Node(data);

  if (!head){
    head = insertNode;
  } else {
    node = head;
  }
  
  while (node){
    if (counter === index - 1) {
      // Set insertNode's next key to node.next's
      insertNode.next = node.next;
      // Set current node's next key to insertNode
      node.next = insertNode;
      break;
    } else if (counter === 0 && index === 0) {
      insertNode.next = node;
      head = insertNode;
      break;
    }

    // Increment counter
    counter++;
    // Move to next node
    node = node.next;
    // If node.next points to null
    if (!node) {
      throw new Error('index is too large');
    }
  }

  return head;
}

let sample = {
  data: 0,
  next: {
    data: 1,
    next: {
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: {
            data: 5,
            next: {
              data: 6,
              next: null
            }
          }
        }
      }
    }
  }
};

let sample2 = {}

console.log(JSON.stringify(insertNth(null, 0, 200), null, 2)); // should be able to insert a node on an empty/null list & value at index 1 should be null

console.log(JSON.stringify(insertNth(sample, 0, -1), null, 2)); // -1, 0, 1, 2, 3, 4, 5, 6
console.log(JSON.stringify(insertNth(sample, 7, 7), null, 2)); // 0, 1, 2, 3, 4, 5, 6, 7
console.log(JSON.stringify(insertNth(sample, 100, 100), null, 2)); // throw error

// Clever short solution 
// function Node(data, nxt) {
//   this.data = data;
//   this.next = nxt;
// }
// function insertNth(head, index, data) {
//   if(index == 0) return new Node(data, head);
//   if(head && index > 0) {
//     head.next = insertNth(head.next, index - 1, data);
//     return head;
//   }
//   throw "Error";
// }

