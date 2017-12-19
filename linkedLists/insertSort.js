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
  null                          ==> null
  100 -> null                   ==> 100 -> null
  4 -> 3 -> 1 -> 2 -> null      ==> 1 -> 2 -> 3 -> 4 -> null
  10 -> 6 -> 12 -> 4 -> null    ==> 4 -> 6 -> 10 -> 12 -> null
  1 -> 2 -> 3 -> null           ==> 1 -> 2 -> 3 -> null
  
General Plan
  Create node equal to head
  Create lastNode equal to null

  While node exists
    Set new let var insertNode equal to node
    If node equals head
      Set head to node.next
      If node.next equals null
        Return node
    Else 
      Detach node by setting lastNode's next to node's next
    Run sortedInsert with head and insertNode's data
    Set lastNode equal to node
    Set node to node.next

  Return head
*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function insertSort(head) {
  let node = head;
  let lastNode = null;

  while (node) {
    if (node === head) {
      head = node.next;
      if (node.next === null) {
        return node;
      }
    } else {
      lastNode = node.next;
    }
    sortedInsert(head, node.data);
    // lastNode = node; 
    // node = node.next;
  }

}

function sortedInsert(head, data) {
  if(!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}

let sample1 = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
};
console.log(insertSort(sample1)); // 1 -> 2 -> 3 -> null

let sample2 = {
  data: 4,
  next: {
    data: 3,
    next: {
      data: 1,
      next: {
        data: 2,
        next: null
      }
    }
  }
};
console.log(insertSort(sample2)); // 1 -> 2 -> 3 -> 4 -> null

let sample3 = {
  data: 10,
  next: {
    data: 6,
    next: {
      data: 10,
      next: {
        data: 4,
        next: null
      }
    }
  }
};
console.log(insertSort(sample3)); // 4 -> 6 -> 10 -> 12 -> null

let sample4 = {
  data: 10,
  next: null
};
console.log(insertSort(sample4)); // 10 -> null
console.log(insertSort(null)); // null
