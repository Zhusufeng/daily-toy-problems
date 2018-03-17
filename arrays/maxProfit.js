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

  return maxProfit
};