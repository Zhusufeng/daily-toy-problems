/*
  Prompt: http://www.codewars.com/kata/linked-lists-length-and-count
*/

function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let node = head;
  let length = 0;

  while (node) {
    length++;
    node = node.next;
  }

  return length;
}

function count(head, data) {
  let node = head;
  counter = 0;

  while(node) {
    if (node.data === data) {
      counter++;
    }
    node = node.next;
  }

  return counter;
}

let sample = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 2,
      next: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 1,
            next: {
              data: 2,
              next: null
            }
          }
        }
      }
    }
  }
};

console.log(length(sample));
console.log(count(sample, 2));
