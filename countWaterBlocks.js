/*
  O: Number (of water blocks)
  I: Array of Numbers
  C: 
    Time:
    Space:
  E:
    [5, 2, 3, 2, 1, 3] => 4
    #
    #
    # - # - - #
    # # # # - #
    # # # # # #
    -----------------------------------------
    Inputs & Outputs
    [4, 4, 4, 4] => 0
    [4, 4, 4, 3] => 0
    [4, 3, 2, 1] => 0
    [4, 2, 1, 1] => 0
    [3, 4, 4, 3] => 0
    [1, 4, 4, 1] => 0
    
    [5, 1, 1, 5] => 8
    [4, 1, 1, 5, 2, 3] => 7
    [5, 4, 1, 1, 4, 5] => 10
    [4, 1, 5, 2, 4] => 5
    [5, 1, 1, 4, 1, 5] => 13

    Constraints
      Input will only be positive integers

    Strategy
      Use two pointers, one going left to right; the other coming from right going left. 
      Also save the highest values coming from left to the right and right to the left.
      While the two pointers are not equal to each other, check if the left wall is higher than the right. If it is, add high left wall - current value at left pointer to counter. Otherwise add high right wall - current value at right pointer to counter.

    Big-O
      Time: O(n)- traverse array of walls once
      Space: O(1)      

    Steps
      Given [4, 1, 1, 5, 2, 3]
      i = 0, j = 5, counter = 0
      leftWall = 4, rightWall = 3
      rightWall is less than leftWall
        counter += rightWall - arr[5] aka 3 - 3 aka 0
        Decrement j
      i = 0, j = 4, counter = 0
      leftWall = 4, rightWall = 3 or 2
      rightWall is less than leftWall
        counter += rightWall - arr[4] aka 3 - 2 aka 1
        Decrement j
      i = 0, j = 3, counter = 1
      leftWall = 4, rightWall = 3 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[0] aka 4 - 4 aka 0
        Increment i
      i = 1, j = 3, counter = 1
      leftWall = 4 or 1, rightWall = 5 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[1] aka 4 - 1 aka 3
        Increment i
      i = 2, j = 3, counter = 4
      leftWall = 4 or 1, rightWall = 5 or 5
      leftWall is less than rightWall
        counter += leftWall - arr[2] aka 4 - 1 aka 3
        Increment i
      i = 3, j = 3, counter = 7
      leftWall = 4 or 5, rightWall = 5 or 5
        counter += rightWall - arr[3] aka 5 - 5 aka 0
        Increment i
      i is now greater than j, exit loop
      return counter, which is 7

    Skeleton
      const waterBlocks = (walls) => {
        // Constraints: Input will only be positive integers
        let i = 0; // pointer going left to right
        let j = 0; // pointer going right to left
        let leftWall = walls[i]; // highest left wall
        let rightWall = walls[j]; // highest right wall
        let counter = 0; // counts how much water blocks are inbetween walls
        // while i is less than or equal to j
          // check if there is a new high left or right wall
          // if leftWall is higher than rightWall, add the difference of walls[i] from leftWall & increment i
          // otherwise add the difference of walls[j] from rightWall & decrement j
        return counter;
      };  
*/

const waterBlocks = (walls) => {
  let i = 0; // pointer going left to right
  let j = walls.length - 1; // pointer going right to left
  let leftWall = walls[i]; // highest left wall
  let rightWall = walls[j]; // highest right wall
  let counter = 0; // counts how many water blocks are inbetween walls

  while (i <= j) {
    leftWall = Math.max(leftWall, walls[i]);
    rightWall = Math.max(rightWall, walls[j]);

    if (leftWall < rightWall) { // we want to subtract from the shortest highest wall
      counter += leftWall - walls[i];
      i += 1;
    } else {
      counter += rightWall - walls[j];
      j -= 1;
    }
  }

  return counter;
};  

console.log(waterBlocks([4, 1, 1, 5, 2, 3])); //7
console.log(waterBlocks([1, 4, 4, 1])); //0
console.log(waterBlocks([1, 2, 3, 4])); //0
console.log(waterBlocks([5, 1, 1, 5])); //8
console.log(waterBlocks([4, 1, 1, 5, 2, 3])); //7
console.log(waterBlocks([5, 4, 1, 1, 4, 5])); //10
console.log(waterBlocks([4, 1, 5, 2, 4])); //5
console.log(waterBlocks([5, 1, 1, 4, 1, 5])); //13

// Return the largest amount of water blocks in one pocket

/*
  Inputs & Outputs
    const input1 = [4, 1, 1, 4, 1, 4]
    const output1 = 6

    const input2 = [2, 1, 10, 1, 9]
    const output2 =  8
  
    const input3 = [6, 1, 2, 3, 4, 5, 1, 4]
    const output3 = 6

    const input4 = [6, 1, 2, 3, 4, 5, 1, 7]
    const output4 = 20

    const input5 = [6, 1, 2, 3, 4, 5, 1, 7, 1, 10]
    const output5 = 20

  Strategy
     

  Big-O

  Constraints

  Steps

  Skeleton
*/


const findMostWaterInPocket = walls => {

};