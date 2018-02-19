/*
  Prompt: http://www.codewars.com/kata/linked-lists-insert-sort
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

// function insertSort(head) {
//   let node = head;
//   let lastNode = null;

//   while (node !== null) {
//     console.log(`current node is ${JSON.stringify(node)}`);
//     console.log(`last node is ${JSON.stringify(lastNode)}`);

//     if (node.next === null) {
//       return head;
//     }
//     if (node === head) {
//       console.log('node is head');
//       head = node.next;
//       if (node.next === null) {
//         return head;
//       }
//     } else {
//       console.log('node is not head');
//       console.log(`before setting, head is ${JSON.stringify(head, null, 2)}`); // 1 -> 2 -> 3 -> null
//       var nextOne = node.next;
//       console.log('nextOne is', node.next);
//       console.log('lastNode is', lastNode);
//       console.log('lastNode.next was', lastNode.next);

//       lastNode.next = nextOne;
//       // lastNode.next = node.next; 
//       console.log(`else head is ${JSON.stringify(head, null, 2)}`); // 1 -> 3 -> null
//     }
//     head = sortedInsert(head, node.data);
//     console.log(`head is now ${JSON.stringify(head)}`);
//     lastNode = node; // Is it ok if node becomes lastNode?
//     node = node.next; // Is it ok if previous node.next is next item to assess?
//   }
//   return head;
// }

function insertSort(head) {
  if (head === null) return null;
  var newHead = new Node(head.data);
  while(head.next) {
    head = head.next;    
    newHead = sortedInsert(newHead, head.data);    
  }
  return newHead;  
}

// function sortedInsert(head, data) {
//   if(!head || data < head.data) return new Node(data, head);
//   else {
//     head.next = sortedInsert(head.next, data);
//     return head;
//   }
// }

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
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null
    }
  }
};
console.log(JSON.stringify(insertSort(sample1), null, 2)); // 1 -> 2 -> 3 -> null

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
// console.log(JSON.stringify(insertSort(sample2), null, 2)); // 1 -> 2 -> 3 -> 4 -> null

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
// console.log(JSON.stringify(insertSort(sample3), null, 2)); // 4 -> 6 -> 10 -> 12 -> null

let sample4 = {
  data: 10,
  next: null
};
console.log(JSON.stringify(insertSort(sample4), null, 2)); // 10 -> null GOOD
console.log(insertSort(null)); // null GOOD

let sample5 = {
  data: 2,
  next: {
    data: 1,
    next: null
  }
};
console.log(JSON.stringify(insertSort(sample5), null, 2)); // 1 -> 2 -> null GOOD

