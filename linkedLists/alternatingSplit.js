/*
  Linked Lists - Alternating Split

  Write an AlternatingSplit() function that takes one list and divides up its nodes to make two smaller lists. The sublists should be made from alternating elements in the original list. So if the original list is a -> b -> a -> b -> a -> null then one sublist should be a -> a -> a -> null and the other should be b -> b -> null.

  ###JavaScript

  var list = 1 -> 2 -> 3 -> 4 -> 5 -> null
  alternatingSplit(list).first === 1 -> 3 -> 5 -> null
  alternatingSplit(list).second === 2 -> 4 -> null

  For simplicity, we use a Context object to store and return the state of the two linked lists. A Context object containing the two mutated lists should be returned by AlternatingSplit().

  If the passed in head node is null/None/nil or a single node, throw an error.
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
  // Your code goes here.
  // Remember to return the context.
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

console.log(alternatingSplit(example1));