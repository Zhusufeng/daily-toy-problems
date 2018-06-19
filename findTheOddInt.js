/*
  Prompt: https://www.codewars.com/kata/find-the-odd-int
*/

/* Inputs & Outputs */
const input1 = [1, 2, 3, 1, 2, 3, 4];
const output1 = 4;

const input2 = [1, 1, 1]
const output2 = 1;

const input3 = [1, 1, 2, 1, 2];
const output3 = 1;

const input4 = [-2, -2, -2, -3, -3];
const output4 = -2

/* 
  Strategy 
  
    #1 - forEach & object, iterate
      Iterate thru the array & create obj that counts each time the same element appears
      Iterate thru the object & return the key with the odd value
    
    #2 - forEach & object, toggle
      Iterate thru the array & create obj that logs each el
      If el is already there toggle between 0 & 1
      Return key with value of 1

    #3 - Array, toggle
      Iterate thru the array & create an array with the integer as the index
      If index exists, toggle between 0 & 1
      Return index with value of 1
*/

function findOdd(A) {
  const placeholder = [];

  A.forEach(el => {
    if (!placeholder[el]) {
      placeholder[el] = 1;
    } else {
      placeholder[el] = 0;
    }
  });
  
  return placeholder.indexOf(1);
  
}

console.assert(findOdd(input1)===output1, 'Expected ' + output1);
console.assert(findOdd(input2)===output2, 'Expected ' + output2);
console.assert(findOdd(input3)===output3, 'Expected ' + output3);
// console.log(findOdd(input4));
// console.assert(findOdd(input4)===output4, 'Expected ' + output4);

