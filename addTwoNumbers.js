/*
  Prompt: https://leetcode.com/problems/add-two-numbers/description/
*/

/*
  Input & Output
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

  while (nodeA !== null && nodeB !== null) {
    // TODO if nodeA.val does not exist
    let temp = nodeA.val + nodeB.val;
    nodeOut.next = new ListNode(temp);
    // TODO if no null
    nodeA = nodeA.next;
    nodeB = nodeB.next;
    nodeOut = nodeOut.next;
  }

  return output.next;
};