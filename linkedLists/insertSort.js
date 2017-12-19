/*
Linked Lists - Insert Sort

Write an InsertSort() function which rearranges nodes in a linked list so they are sorted in increasing order. You can use the SortedInsert() function that you created in the "Linked Lists - Sorted Insert" kata below. The InsertSort() function takes the head of a linked list as an argument and must return the head of the linked list.

var list = 4 -> 3 -> 1 -> 2 -> null
insertSort(list) === 1 -> 2 -> 3 -> 4 -> null
If the passed in head node is null or a single node, return null or the single node, respectively. You can assume that the head node will always be either null, a single node, or a linked list consisting of multiple nodes.
*/

/*
O: linkedList that is sorted, null or single node 
I: linkedList, null or single node
C: 
  Time:
  Space:
E:
  null ==> null
  100 -> null ==> 100 -> null
  4 -> 3 -> 1 -> 2 -> null ==> 1 -> 2 -> 3 -> 4 -> null
  10 -> 6 -> 12 -> 4 -> null ==> 4 -> 6 -> 10 -> 12 -> null
  

*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  // Your code goes here.
  // Remember to return the head of the list.
}

function sortedInsert(head, data) {
  if(!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
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