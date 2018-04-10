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


/*
  Strategy 1
    Take in root
    Set nodeToChange to root
    While nodeToChange is not null
      Save nodeToChange as currentNode
      Save nodeToChange.next as nextNode
      If nodeToChange is root, set currentNode's next as null
      Update nextNode's next to currentNode
      Update nodeToChange to nodeToChange.next

  Constraints
    Do it in place

  Illustrative Steps
    root = 1 -> 2 -> 3 -> null
    nodeToChange = 1 -> 2 -> 3 -> null

      currentNode = 1 -> 2 -> 3 -> null
      nextNode = 2 -> 3 -> null
      currentNode = 1 -> null
      nextNode = 2 -> 1 -> null
      nodeToChange = 
*/