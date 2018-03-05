/*
  Prompt: https://leetcode.com/problems/add-two-numbers/description/
*/

/*
  Input & Output
*/
    const input1a = {
      val: 1,
      next: {
        val: 2,
        next: {
          val: 3,
          next: null
        }
      }
    };
    const input1b = {
      val: 3,
      next: {
        val: 4,
        next: {
          val: 5,
          next: null
        }
      }
    };
    const output1 = {
      val: 4,
      next: {
        val: 6,
        next: {
          val: 8,
          next: null
        }
      }
    };
    const input2a = {
      val: 8,
      next: {
        val: 9,
        next: null
      }
    };
    const input2b = {
      val: 6,
      next: {
        val: 9,
        next: null
      }
    };
    const output2 = {
      val: 4,
      next: {
        val: 9,
        next: {
          val: 1,
          next: null
        }
      }
    };
/*
  Strategy
    Iterate thru both inputs adding their values

  Big-O
    Time: Linear
    Space: Constant

  Steps
    Given input1a, input1b
    While input1a & input1b is not empty
      1 + 3 = 7, add as node to output 
      2 + 4 = 6, add as node to output
      3 + 5 = 8, add as node to output
    Return head of output

  const addTwoNumbers = (a, b) => {
    let nodeA = a;
    let nodeB = b;
    const output = new ListNode(0);
    let nodeOut = output;

    // iterate thru nodeA & nodeB if not empty
      // set temp to nodeA.val + nodeB.val
      // set nodeOut.next to new ListNode(temp)
      // set nodeA to nodeA.next
      // set nodeB to nodeB.next
      // set nodeOut to nodeOut.next

    return output.next;
  };
*/

function ListNode(val) {
 this.val = val;
 this.next = null;
}
const addTwoNumbers = (a, b) => {
  let nodeA = a;
  let nodeB = b;
  const output = new ListNode(0);
  let nodeOut = output;
  let remainder = 0;

  while (nodeA !== null && nodeB !== null) {
    let valA = nodeA === null ? 0 : nodeA.val;
    let valB = nodeB === null ? 0 : nodeB.val; 
    let temp = 0;
    console.log('110: remainder is ', remainder);
    if (remainder) {
      temp = valA + valB + remainder;
      remainder = 0;
    } else {
      temp = valA + valB;
    } 
    if (temp > 9) {
      console.log('temp is', temp);
      remainder = Math.floor(temp / 10);
      temp = temp % 10;      
      console.log('121: remainder is ', remainder);
    }
    nodeOut.next = new ListNode(temp);
    nodeA = nodeA === null ? null : nodeA.next;
    nodeB = nodeB === null ? null : nodeB.next;
    nodeOut = nodeOut.next;
  }

  return output.next;
};

// Practice no remainders
// console.log(addTwoNumbers(input1a, input1b));
console.log(addTwoNumbers(input2a, input2b));
