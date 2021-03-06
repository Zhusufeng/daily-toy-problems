/*
  Prompt: http://www.codewars.com/kata/linked-lists-alternating-split
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function Context(first, second) {
  this.first = first;
  this.second = second;
}

function alternatingSplit(head) {
  if (!head) throw new Error ('Empty list');

  let node1 = new Node(null);
  let first = node1;

  let node2 = new Node(null);
  let second = node2;

  let counter = 1;

  while (head) {
    if (counter % 2 === 1) {
      first.next = new Node(head.data);
      first = first.next;
    } else if (counter % 2 === 0) {
      second.next = new Node(head.data);
      second = second.next;
    } 
    counter += 1;
    head = head.next;
  }
  if (!node2.next) throw new Error ('Single node list');

  return new Context(node1.next, node2.next);
}

/*
Strategy: Iterate through linked list. While linked list
  if odd, add to first. If even, add to second.
  Return new Context with first and second

Time Complexity: O(n) - linear - need to iterate through entire linked list

function alternatingSplit(head) {
  // Create first, second and counter starting at 1
  // Iterate through linked list
    // If odd, add new node to first
    // If even, add new node to second
  // Return new Context with first and second
}
*/
const example1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: {
        data: 4,
        next: {
          data: 5,
          next: null
        }
      }
    }
  }
};

console.log(JSON.stringify(alternatingSplit(example1), null, 2));