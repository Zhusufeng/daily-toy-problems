/*
  Prompt: http://www.codewars.com/kata/linked-lists-sorted-insert
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
    head equals insertNode
    Return head

  While node exists
    If node's data is greater than data
      If node is head (10, null / 5)
        Set insertNode's next to equal head
        Set head to insertNode
        Break
      Else (1, 2, 3, 7, null / 5)
        Set insertNode's next to equal nodeLast's next (5 -> 7)
        nodeLast's next equals insertNode (3 -> 5)
        Break
    Set nodeLast to node
    Set node equal to node's next
    If node is null (1, null / 5) or (1, 2, null / 5)
      Set nodeLast's next to insertNode

  Return head

*/


function Node(data) {
  this.data = data;
  this.next = null;
}

function sortedInsert(head, data) {
  const insertNode = new Node(data);
  let node = head;
  let nodeLast = null;

  if (!node) {
    head = insertNode;
    return head;
  }

  while (node) {
    if (node.data > data) {
      if (node === head) {
        insertNode.next = head;
        head = insertNode;
        break;
      } else {
        insertNode.next = nodeLast.next;
        nodeLast.next = insertNode;
        break;
      }
    }
    nodeLast = node;
    node = node.next;
    if (!node) {
      nodeLast.next = insertNode;
    }
  }
  return head;
}

let sample1 = {
  data: 2,
  next: {
    data: 3,
    next: {
      data: 4,
      next: {
        data: 5,
        next: {
          data: 6,
          next: {
            data: 7,
            next: {
              data: 20,
              next: null
            }
          }
        }
      }
    }
  }
};

let sample2 = null;

// if node is empty
console.log(JSON.stringify(sortedInsert(sample2, 4), null, 2)); // 4 -> null

// if data is smaller than first node && is 0 (falsy value)
console.log(JSON.stringify(sortedInsert(sample1, 0), null, 2)); // 0 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 20 -> null

// if data is greater than last node
console.log(JSON.stringify(sortedInsert(sample1, 50), null, 2)); // 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 20 -> 50 -> null

// if data is inbetween values
console.log(JSON.stringify(sortedInsert(sample1, 10), null, 2)); // 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 10 -> 20 -> null

// Here is a very concise answer using recursion
function sortedInsert(head, data) {
  if(!head || data < head.data) return new Node(data, head);
  else {
    head.next = sortedInsert(head.next, data);
    return head;
  }
}
