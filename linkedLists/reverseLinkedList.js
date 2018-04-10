/*
  Prompt: https://www.interviewcake.com/question/javascript/reverse-linked-list
*/

function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

/*
  Inputs & Outputs
*/
const input1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: null
    }
  }
};

const output1 = {
  value: 3,
  next: {
    value: 2,
    next: {
      value: 1,
      next: null
    }
  }
};
