/*
  Prompt: http://www.codewars.com/kata/linked-lists-front-back-split
*/

function Node(data) {
  this.data = data === undefined ? null : data;
  this.next = null;
}

function frontBackSplit(source, front, back) {
  if (!source.data) {
    throw new Error ('Source is empty');
  }
  let loopCounter = 1;
  let fastList = front;
  let slowList = front;

  while (source || fastList) {
    if (!source) {
      if (loopCounter < 2) {
        throw new Error ('Source has less than 2 nodes');
      }
      back.data = slowList.next.data;
      back.next = slowList.next.next;
      slowList.next = null;
      front.data = front.next.data;
      front.next = front.next.next;
      break;
    }

    let newNode = new Node(source.data);
    fastList.next = newNode;

    if (loopCounter % 2 === 1) {
      slowList = slowList.next;
    }     
    loopCounter += 1;
    fastList = fastList.next;
    source = source.next;
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
const source2 = {
  data: 1,
  next: {
    data: 3,
    next: {
      data: 7,
      next: {
        data: 8,
        next: {
          data: 11,
          next: {
            data: 12,
            next: {
              data: 14,
              next: null
            }
          }
        }
      }
    }
  }
};
const front2 = new Node();
const back2 = new Node();
const source3 = new Node();
const front3 = new Node();
const back3 = new Node();
const source4 = {
  data: 1,
  next: null
};
const front4 = new Node();
const back4 = new Node();
const source5 = {
  data: 1,
  next: {
    data: 2,
    next: null
  }
};
const front5 = new Node();
const back5 = new Node();

frontBackSplit(source1, front1, back1);
console.log(JSON.stringify(front1, null, 2)); // 2 -> 3 -> 5 -> null
console.log(JSON.stringify(back1, null, 2)); // 7 -> 11 -> null
frontBackSplit(source2, front2, back2);
console.log(JSON.stringify(front2, null, 2)); // 1-> 3 -> 7 -> 8 -> null
console.log(JSON.stringify(back2, null, 2)); // 11 -> 12 -> 14 -> null
// frontBackSplit(source3, front3, back3); // throw Error for empty source
// frontBackSplit(source4, front4, back4); // throw Error for source less than 2 nodes
frontBackSplit(source5, front5, back5);
console.log(JSON.stringify(front5, null, 2)); // 1 ->  null
console.log(JSON.stringify(back5, null, 2)); // 2 -> null
