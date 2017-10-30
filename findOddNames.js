/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
write a function that when executed as findOddNames(list1) returns only the developers where if you add the ASCII representation of all characters in their first names, the result will be an odd number:

[
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
]
Explanation of the above:

Sum of ASCII codes of letters in 'Aba' is: 65 + 98 + 97 = 260 which is an even number
Sum of ASCII codes of letters in 'Abb' is: 65 + 98 + 98 = 261 which is an odd number
Notes:

Preserve the order of the original list.
Return an empty array [] if there is no developer with an "odd" name.
The input array and first names will always be valid and formatted as in the example above.
*/
/*
O: Array of objects
I: Array of objects
C: Linear
E:

General Plan
  Go through programmers
    Create sum variable
    Using programmer's name, go through the name and get charCodes
      Add that current charCode to sum
    If the sum at end of loop modulo 2 is 1
      Return that programmer

Pseudocode
  Initialize oddNames array var to equal the filter through programmers
    Initialize sum variable as 0
    Iterate through programmer's name (string)
      Add current charCode to sum
    If sum modulo 2 equals 1
      Return that programmer's entire object

  If oddNames has no length
    Return []
  Else return oddNames
*/

// function findOddNames(list) {
//   return list.filter(function(dev) {
//     var sum = 0;
//     for (var i = 0; i < dev.firstName.length; i++) {
//       sum += dev.firstName.charCodeAt(i);
//     }
//     if (sum % 2 === 1) {
//       return dev;
//     }
//   });
// };

function findOddNames(list) {
  return list.filter((dev) => {
    let sum = 0;
    dev.firstName
      .split('')
      .forEach((letter) => {
        sum += letter.charCodeAt(0);
      });
    if (sum % 2 === 1) {
      return dev;
    }
  });
};


// Test
var list1 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' },
  { firstName: 'Abb', lastName: 'O.', country: 'Israel', continent: 'Asia', age: 39, language: 'Java' }
];
console.log(findOddNames(list1));

var list2 = [
  { firstName: 'Aba', lastName: 'N.', country: 'Ghana', continent: 'Africa', age: 21, language: 'Python' }
];
console.log(findOddNames(list2));

// deomsj's Solution with reduce
// var findOddNames = (list) =>
//   list.filter(d=>d.firstName
//                   .split('')
//                   .map(c=>c.charCodeAt(0))
//                   .reduce((a,b)=>a+b,0)
//                   % 2 !== 0);