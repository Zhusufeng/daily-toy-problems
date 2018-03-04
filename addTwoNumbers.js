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
*/
