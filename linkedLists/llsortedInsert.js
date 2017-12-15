/*
Linked Lists - Sorted Insert

Write a SortedInsert() function which inserts a node into the correct location of a pre-sorted linked list which is sorted in ascending order. SortedInsert takes the head of a linked list and data used to create a node as arguments. SortedInsert() should also return the head of the list.

sortedInsert(1 -> 2 -> 3 -> null, 4) === 1 -> 2 -> 3 -> 4 -> null)
sortedInsert(1 -> 7 -> 8 -> null, 5) === 1 -> 5 -> 7 -> 8 -> null)
sortedInsert(3 -> 5 -> 9 -> null, 7) === 3 -> 5 -> 7 -> 9 -> null)
*/

/*
O: Head of sorted linked list passed in
I: Sorted linked list, Number
C: 
  Time: Linear
  Space: Constant
E:
  1, 2, 3, null / 4 => 1, 2, 3, 4, null
  1, 7, 8, null / 5 => 1, 5, 7, 8, null
  3, 5, 9, null / 7 => 3, 5, 7, 9, null
  null / 1 => 1, null
  1, null / 5 => 1, 5, null
  10, null / 5 => 5, 10, null
  What if number exists already in linkedList?

General Plan
  Create insertNode as a new Node passing in data
  Create node which equals head
  Create nodeLast to equal null

  If node does not exist
    insertNode's next equals node
    head equals insertNode
  Else 
    While node exists
      If node's data is greater than data
        If node equals head 
          1, null / 5 or 10, null / 5
        Else
          Set insertNode's next equal to nodeLast's next
          nodeLast's next equals insertNode
          Break
      Set nodeLast to node
      Set node equal to node's next
  Return head

  ^ For cases where null or empty linkedList is sent in,
  may need to move out of while loop and into separate if statement
*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  // Your code goes here.
  // Remember to return the head of the list.
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