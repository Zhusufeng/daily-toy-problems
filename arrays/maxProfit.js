/*
  Prompt: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/
*/

/*
  Input & Output
*/
    const input1 = [7, 1, 5, 3, 6, 4];
    const output1 = 5;

    const input2 = [8, 4, 7];
    const output2 = 3;

    const input3 = [5, 5, 5];
    const output3 = 0;

    const input4 = [];
    const output4 = 0;

    const input5 = [7, 6, 4, 3, 1];
    const output5 = 0;

    const input6 = [1, 2, 3, 4, 5, 6, 7];
    const output6 = 6;

/*
  Strategy
    Keep track of the smallest number & iterate thru to find max

  Big-O
    Time: Linear
    Space: Constant

  Steps
    maxProfit = 0
    Given [8, 4, 7]
    smallest = 8
    smallest = 4    
    currProfit = 7 - 4 = 3
    maxProfit = 3

  Pseudo
*/

const maxProfit = prices => {
  if (!prices.length) return 0;
  let maxProfit = 0;
  let smallest = prices[0];

  prices.forEach(price => {
    smallest = Math.min(price, smallest);
    currProfit = price - smallest;
    maxProfit = Math.max(maxProfit, currProfit);
  });

  return maxProfit;
};

console.log(maxProfit(input1)); // 5
console.log(maxProfit(input2)); // 3
console.log(maxProfit(input3)); // 0
console.log(maxProfit(input4)); // 0
console.log(maxProfit(input5)); // 0
console.log(maxProfit(input6)); // 6

