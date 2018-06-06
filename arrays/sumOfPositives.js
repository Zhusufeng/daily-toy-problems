/*
  Source: http://www.codewars.com/kata/sum-of-positive/train/javascript
*/

/*
  Inputs & Outputs
*/
const input1 = [3, -3, 4];
const output1 = 7;

const input2 = [-2, -3, -4];
const output2 = 0;

const input3 = [1, 2];
const output3 = 3;

/*
  Strategy
    #1
      Use forEach and add to a sum if el is positive

    #2
      Use reduce 
*/
const positiveSum = (arr) => {
  if (!arr.length) return 0;
  return arr.reduce((sum, el) => {
    if (el > 0) {
      sum += el;
    }
    return sum;
  }, 0);
};

console.log(positiveSum(input1));
console.log(positiveSum(input2));
console.log(positiveSum(input3));
