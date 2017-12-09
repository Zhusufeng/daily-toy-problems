/*
Linked Lists - Insert Nth

Implement an InsertNth() function (insert_nth() in PHP) which can insert a new node at any index within a list.

InsertNth() is a more general version of the Push() function that we implemented in the first kata listed below. Given a list, an index 'n' in the range 0..length, and a data element, add a new node to the list so that it has the given index. InsertNth() should return the head of the list.

insertNth(1 -> 2 -> 3 -> null, 0, 7) === 7 -> 1 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 1, 7) === 1 -> 7 -> 2 -> 3 -> null)
insertNth(1 -> 2 -> 3 -> null, 3, 7) === 1 -> 2 -> 3 -> 7 -> null)
You must throw/raise an exception (ArgumentOutOfRangeException in C#, InvalidArgumentException in PHP) if the index is too large.
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


