/*
  Prompt: https://www.interviewcake.com/question/javascript/queue-two-stacks
*/

/*
  Inputs & Outputs
*/

const oddNums = new Queue();
oddNums.enqueue(1);
/*
  stack1 = [1]
*/
oddNums.enqueue(2);
/*
  stack1 = [1, 2]
*/
oddNums.enqueue(3);
/*
  stack1 = [1, 2, 3]
*/
oddNums.dequeue();
/*
  stack2 = [3]
  stack2 = [3, 2]
  stack2 = [3, 2, 1]
  stack1 = []
  stack2 = [3, 2]
*/

/*
  Strategy
    Queue made of 2 stacks
    Stacks are last in first out 

  Constraints
    Constant enqueue and dequeue
*/