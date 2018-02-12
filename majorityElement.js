/*
  Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

  You may assume that the array is non-empty and the majority element always exist in the array.
*/

/*
  Inputs and Outputs
    const input1 = [6, 5, 5, 5, 5, 5, 5, 5, 6]
    n = 9
    obj = {
      6: 2
      5: 7 
    }
    9/2 = 4+ 
    4+ < 7
    const majority1 = 5

  const input2 = [6, 5, 5, 5, 5, 6]
  n = 6
  obj = {
    6: 2,
    5: 4
  }
  6/2 = 3
  3 < 4
  const majority2 = 5

  const input3 = [5, 5, 5, 5, 5, 6, 6, 6, 6]
  n = 9
  obj = {
    5: 5
    6: 4
  }
  9/2 = 4+
  4+ < 5
  const majority3 = 5

  Strategy
    Iterate through the array and create a hash & count their instances. Find n/2. Iterate over hash to find majority (which is n/2 > majority)

  Big-O
    Time: Linear
    Space: Constant

  Constraints
    The array is non-empty
    The majority element always exist in the array

  Steps
    Given [5, 5, 5, 5, 5, 6, 6, 6, 6]. Create hash
    i = 0 hash = { 5: 1 }
    i = 1 hash = { 5: 2 }
    i = 2 hash = { 5: 3 }
    i = 3 hash = { 5: 4 }
    i = 4 hash = { 5: 5 }
    i = 5 hash = { 5: 5, 6: 1 }
    i = 6 hash = { 5: 5, 6: 2 }
    i = 7 hash = { 5: 5, 6: 3 }
    i = 8 hash = { 5: 5, 6: 4 }
    Find n/2. n = 9. n/2 = 4.5.
    Iterate thru hash to find key with value greater than n/2 & is the greatest
    key = 5 val = 5, 5 > 4.5 Yes, set majority = val
    key = 6 val = 4, 4 < 4.5 
    Return 5  
  
  Skeleton
    const majorityElement = (nums) => {
      // The array is non-empty
      // The majority element always exist in the array
    };
*/