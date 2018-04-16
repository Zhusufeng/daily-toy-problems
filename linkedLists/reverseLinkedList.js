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
      Save nextNode.next as nextNextNode
      If nodeToChange is root, set currentNode's next as null
      Update nextNode's next to currentNode
      Update nodeToChange to nextNextNode

  Constraints
    Do it in place

  Illustrative Steps 1
    root = 1 -> 2 -> 3 -> null
    nodeToChange = 1 -> 2 -> 3 -> null

      currentNode = 1 -> 2 -> 3 -> null
      nextNode = 2 -> 3 -> null
      nextNextNode = 3 -> null
      currentNode = 1 -> null
      nextNode = 2 -> 1 -> null
      nodeToChange = 3 -> null

  Strategy 2
    Save root
    Set nodeToChange to root
    Set newList to LinkedListNode(null)
    While nodeToChange is not null
      Set currentNode to LinkedListNode(nodeToChange.value)
      Set currentNode.next to newList
      Update newList to currentNode
      Update nodeToChange to nodeToChange.next
    Set root to newList

  Illustrative Steps 2
    root = 1 -> 2 -> 3 -> null
    nodeToChange = 1 -> 2 -> 3 -> null
    newList = null

      currentNode = 1 -> null
      currentNode = 1 -> null
      newList = 1 -> null
      nodeToChange = 2 -> 3 -> null

      currentNode = 2 -> null
      currentNode = 2 -> 1 -> null
      newList = 2 -> 1 -> null
      nodeToChange = 3 -> null

      currentNode = 3 -> null
      currentNode = 3 -> 2 -> 1 -> null
      newList = 3 -> 2 -> 1 -> null
      nodeToChange = null
    
    root = newList

  Strategy 3
    Set currentNode to root
    Set prevNode to null
    Set nextNode to null
    While currentNode is not null
      Copy pointer to next node
      Reverse the next pointer
      Step forward in the list

  Illustrative Steps 3
    root = 1 -> 2 -> 3 -> null
    currentNode = 1 -> 2 -> 3 -> null
    prevNode = null
    nextNode = null

      nextNode = 2 -> 3 -> null
      currentNode.next = null
      currentNode = 1 -> null
      prevNode = 1 -> null
      currentNode = 2 -> 3 -> null

      nextNode = 3 -> null
      currentNode.next = 1 -> null
      currentNode = 2 -> 1 -> null
      prevNode = 2 -> 1 -> null
      currentNode = 3 -> null

      nextNode = null
      currentNode.next = 2 -> 1 -> null
      currentNode = 3 -> 2 -> 1 -> null
      prevNode = 3 -> 2 -> 1 -> null
      currentNode = null

*/






