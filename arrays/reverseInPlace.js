/*
  Prompt: https://www.interviewcake.com/question/javascript/reverse-string-in-place
*/

/* Inputs & Outputs */
const input1 = [1, 2, 3, 4, 5];
const output1 = [5, 4, 3, 2, 1];

const input2 = ['a', 'b', 'c', 'd'];
const output2 = ['d', 'c', 'b', 'a'];

/*
  Strategy 1
    Swap front and back

  Complexities
    Time: Linear
    Space: Constant
*/

const reverseInPlace = (arr) => {
  for (let a = 0, z = arr.length - 1; a <= z; a += 1, z -= 1) {
    let temp = arr[a];
    arr[a] = arr[z];
    arr[z] = temp;
  }
};

console.log(reverseInPlace(input1));
console.log(input1);
console.log(reverseInPlace(input2));
console.log(input2);