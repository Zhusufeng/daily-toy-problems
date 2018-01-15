/*
  Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

  Example
  madam -> True
  adamm -> True
  junk -> False

  Hint
  The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

/*
  O: Boolean
  I: String
  C:
    Time:
    Space:
  E:
    madam -> True
    adamm -> True
    junk -> False
    ada -> True
    a -> True
    aad -> True

    General Plan
      Idea #1 - Permutation
        Initialize permutation array as empty array

        Create subroutine getPerms, takes in string, word as empty string
          If string is empty
            Push word to permutation array
          Iterate through array
            Call getPerms with string without current index, word + array at index
        
        Call getPerms with string

        Create function checkIfPalindrome, takes in a string
          Iterates over string
            Checks if string at i equals string at length - 1 - i
            If not equal 
              Return false
          Return true

        Iterate through permutation array
          If checkIfPalindrome with current word
            Return true
        
        Return false

      Idea #2 Math
        Create a tracker obj
        Iterate through input
          If obj at input at i is not there
            Set obj at input at i to 1
          Else
            Increment obj at input at i plus 1
        Create oddCounter
        Iterate through tracker obj
          If value is odd
            Increment oddCounter
        If oddCounter is greater than 1
          Return false
        Return true
*/

// Idea #1
// function permuteAPalindrome (input) { 
//   const permutation = [];

//   function getPerms(str, word = '') {
//     if (!str) {
//       permutation.push(word);
//     }
//     for (let i = 0; i < str.length; i++) {
//       getPerms(str.slice(0, i) + str.slice(i + 1), word + str[i]);
//     }
//   }

//   getPerms(input);
//   // console.log(permutation);

//   function checkIfPalindrome(str) {
//     for (let j = 0; j < str.length; j++) {
//       if (str[j] !== str[str.length - 1 - j]) {
//         return false;
//       }
//     }
//     return true;
//   }

//   for (let k = 0; k < permutation.length; k++) {
//     if (checkIfPalindrome(permutation[k])) {
//       return true;
//     }
//   }

//   return false;
// }

// Idea #2
function permuteAPalindrome(input) {
  const tracker = {};
  let oddCounter = 0;

  for (let i = 0; i < input.length; i++) {
    if (tracker[input[i]]) {
      tracker[input[i]]++;
    } else {
      tracker[input[i]] = 1;
    }
  }

  for (let key in tracker) {
    if (tracker[key] % 2 === 1) {
      oddCounter++;
    }
    if (oddCounter > 1) {
      return false;
    }
  }
  
  return true;
}

console.log(permuteAPalindrome('abc')); // false
console.log(permuteAPalindrome('madam')); // true
console.log(permuteAPalindrome('junk')); // false
console.log(permuteAPalindrome('racecar')); // true
console.log(permuteAPalindrome('toyot')); // true
