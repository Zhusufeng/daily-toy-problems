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
  enqueueStack = [1, 2]
*/
oddNums.enqueue(3);
/*
  enqueueStack = [1, 2, 3]
*/
oddNums.dequeue();
/*
  dequeueStack = [3]
  dequeueStack = [3, 2]
  dequeueStack = [3, 2, 1]
  enqueueStack = []
  dequeueStack = [3, 2]
*/
oddNums.enqueue(4);
/*
  enqueueStack = [2]
  enqueueStack = [2, 3]
  enqueueStack = [2, 3, 4]
  dequeueStack = []
*/

/*
  Strategy
    Queue made of 2 stacks
    Stacks are last in first out 

    Enqueue
      Iterate thru dequeueStack (empty stack)
        Pop items from dequeueStack onto the enqueueStack
      Push val to enqueueStack

    Dequeue
      Iterate thru enqueueStack
        Pop items from enqueueStack onto the dequeueStack
      Return dequeueStack.pop()
      
  Skeleton
    class Queue {
      constructor () {
        this.enqueueStack = [];
        this.dequeueStack = [];
      }

      enqueue (val) {
        // iterate thru dequeueStack & pop off each to enqueueStack
        // push val to enqueueStack
      }

      dequeue (val) {
        // iterate thru enqueueStack & pop off each to dequeueStack
        // return dequeueStack.pop();
      }
    }

*/

class Queue {
  constructor () {
    this.enqueueStack = [];
    this.dequeueStack = [];
  }

  enqueue (val) {
    for (let i = 0; i < this.dequeueStack.length; i += 1) {
      this.enqueueStack.push(this.dequeueStack.pop());
    }
    this.enqueueStack.push(val);
  }

  dequeue (val) {
    // iterate thru enqueueStack & pop off each to dequeueStack
    for (let i = 0; i < this.enqueueStack.length; i += 1) {
      this.dequeueStack.push(this.enqueueStack.pop());
    }
    return dequeueStack.pop();
  }
}