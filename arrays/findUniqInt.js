/*
  Prompt: https://www.interviewcake.com/question/javascript/find-unique-int-among-duplicates
*/

const findUniqId = arr => {
  arr.sort();
  for (let i = 0; i < arr.length; i += 2) {
    if (!arr[i + 1] || arr[i] !== arr[i + 1]) {
      return arr[i];  
    } 
  }
  return -1;
};

// console.log(findUniqId([100, 101, 102, 103, 100, 101, 102])); // 103
// console.log(findUniqId([100, 101, 102, 100, 101, 102])); // -1
// console.log(findUniqId([100])); // 100

/*
  INPUTS & OUTPUTS
    const input1 = [100, 101, 102, 103, 100, 101, 102];
    const output1 = 103;
  
    const input2 = [100];
    const output2 = 100
    
    Array.length is an odd number
  
  Strategy
    Idea #1 <<<
      Sort the input [100, 100, 101, 101, 102, 102, 103]
      See which element and its +1 is not in the array
    
    XXXX Idea #2
      Iterate thru the input and create a hash that count how many times an order appears
      Iterate thru the hash for the order with the value of 1
      
  Big-O
    Time: Linear - O(n/2 * logn)
    Space: Constant
  
  Constraints
    Unique ID is a positive integer 1249125
  
  Steps
    Given [100, 101, 102, 103, 100, 101, 102];
    Sort the input [100, 100, 101, 101, 102, 102, 103]
    Iterate thru the input, start at 0 til input.length, i += 2
      i = 0, 100 === 100 (input[i] === input[i + 1])
      i = 2, 101 === 101
      i = 4, 102 === 102
      i = 6, 103 input[i + 1] exists? No, return input[i]
  
  Skeleton
    const findUniqId = arr => {
      // Sort arr
      // Iterate thru arr, start at 0 til input.length, i += 2
        // If input[i] does not eql input[i + 1] or input[i + 1] doesn't exist, return input[i]
      return -1;
    };
*/

/** BITWISE VERSION **/

/*
  Inputs & Outputs
    const in1 = [1, 2, 3, 2, 1]
    const out1 = 3

  Strategy
    Iterate thru input and use bitwise OR to add up numbers or take out numbers

  Big-O
    Linear

  Steps
    Given [1, 2, 3, 2, 1]
    temp = 0
    
      i    XOR in base-10    XOR in base-2   updated temp in base-2       
    i = 0     0 ^= 1      ->  0000 ^= 0001      0001 
    i = 1     1 ^= 2      ->  0001 ^= 0010      0011
    i = 2     3 ^= 3      ->  0011 ^= 0011      0000
    i = 3     0 ^= 2      ->  0000 ^= 0010      0010
    i = 4     2 ^= 1      ->  0010 ^= 0001      0011 

    0011 is 3 in base 10

  Skeleton
    const findUniqInt = arr => {
      let temp = 0;

      // iterate thru arr
        // temp bitwise OR current element

      return temp;
    };

*/

const findUniqInt = arr => {
  let temp = 0;

  arr.forEach(int => {
    temp ^= int;
  });

  return temp;
};

console.log(findUniqInt([1, 2, 3, 2, 1])); // 3
console.log(findUniqInt([100, 101, 102, 103, 100, 101, 102])); // 103