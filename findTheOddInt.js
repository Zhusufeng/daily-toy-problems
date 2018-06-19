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
