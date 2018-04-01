/*
  Prompt: https://www.interviewcake.com/question/javascript/queue-two-stacks
*/

/*
  Inputs & Outputs
*/

const oddNums = new Queue();
oddNums.enqueue(1);
// oddNums.storage = 1
oddNums.enqueue(2);
// oddNums.storage = 1, 2
oddNums.enqueue(3);
// oddNums.storage = 1, 2, 3
oddNums.dequeue();
// oddNums.storage = 2, 3

/*
  Strategy
    stack1
    stack2

  Constraints
    Constant enqueue and dequeue
*/