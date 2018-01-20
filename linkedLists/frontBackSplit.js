/*
  Linked Lists - Front Back Split

  Write a FrontBackSplit() function that takes one list and splits it into two sublists — one for the front half, and one for the back half. If the number of elements is odd, the extra element should go in the front list. For example, FrontBackSplit() on the list 2 -> 3 -> 5 -> 7 -> 11 -> null should yield the two lists 2 -> 3 -> 5 -> null and 7 -> 11 -> null. Getting this right for all the cases is harder than it looks. You will probably need special case code to deal with lists of length < 2 cases.

  var source = 1 -> 3 -> 7 -> 8 -> 11 -> 12 -> 14 -> null
  var front = new Node()
  var back = new Node()
  frontBackSplit(source, front, back)
  front === 1 -> 3 -> 7 -> 8 -> null
  back === 11 -> 12 -> 14 -> null
  You should throw an error if any of the arguments to FrontBackSplit are null or if the source list has < 2 nodes.

  Hint. Probably the simplest strategy is to compute the length of the list, then use a for loop to hop over the right number of nodes to find the last node of the front half, and then cut the list at that point. There is a trick technique that uses two pointers to traverse the list. A "slow" pointer advances one nodes at a time, while the "fast" pointer goes two nodes at a time. When the fast pointer reaches the end, the slow pointer will be about half way. For either strategy, care is required to split the list at the right point.
*/

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  let every1LoopCounter = 0;
  let every2LoopCounter = 0;
  let list = front;
  let source2 = source;

  while (source || list) {
    every1LoopCounter += 1;
    let newNode = new Node(source.data);

    list.next = newNode;

    if (every1LoopCounter % 2 === 0) {
      every2LoopCounter += 1;
      list = list.next;
    } 
    source = source.next;
    if (!source) {
      list.next = back;
      list.next = null;
      front = front.next;
      break;
    }
  }
}

/*
  Strategy: every1LoopCounter, copy to backList
  every2LoopCounter goes through backList
  Once every1LoopCounter reaches null, split backList

  Big-O: O(n) - Linear because we go through the list
  Transform Steps:

  function frontBackSplit(source, front, back) {
    let every1LoopCounter = 0;
    let every2LoopCounter = 0;
    let list = new Node(null);
    front = list;
    let source2 = source;
    // While source or list
      // every1LoopCounter increment
      // Copy source to list
      // if every1LoopCounter is even, increment every2LoopCounter
        // list is list.next
      // source is source.next
      // if source is null
        // list.next is back
        // list.next is null
        // break
    // front = front.next
  }
*/
const source1 = {
  data: 2,
  next: {
    data: 3,
    next: {
      data: 5,
      next: {
        data: 7,
        next: {
          data: 11,
          next: null
        }
      }
    }
  }
};
const front1 = new Node();
const back1 = new Node();
const frontOutput = {
  data: 2,
  next: {
    data: 3,
    next: {
      data: 5,
      next: null
    }
  }
};
const backOutput = {
  data: 7,
  next: {
    data: 11,
    next: null
  }
};

frontBackSplit(source1, front1, back1);
console.log(JSON.stringify(front1, null, 2));
console.log(JSON.stringify(back1, null, 2));
