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



  Constraints
    The array is non-empty
    The majority element always exist in the array

  Steps

  Skeleton
    const majorityElement = (nums) => {
      // The array is non-empty
      // The majority element always exist in the array
    };
*/