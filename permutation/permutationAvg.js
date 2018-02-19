/*
  Prompt: https://www.codewars.com/kata/permutation-average
*/

/*
O: Number
I: Number (1-6 digits)
C: 
  Time: Quadratic?
  Space: Linear?
E:
  INPUT              OUTPUT
  2               => 2
  25              => 39
  20              => 11
  737             => 629
  0               => 0
  12              => 17

General Plan
  Keep track of permutations (Set)
  Get permutations
  Iterate through set to get totalSumOfPerms
  Return totalSumOfPerms/permutations.size rounded up to the nearest integer

Pseudocode
  Set sum to 0

  Turn n to string
  Split string into array

  Make subroutine makePermutations takes in arr, combo, set
    If arr is empty
      Add combo to set
      Return
    Iterate through arr (for loop)
      Call makePermutations with arr with current index spliced out, combo + current index, set
    Return set

  Set permutations to call subroutine makePermutations with array, empty string, empty set

  Iterate through permutations
    Add each value (parsed to an integer) to sum

  Return the sum over permutations.size (rounded up to nearest integer)
*/

// function permutationAverage(n){
//   let sum = 0;
//   n = n.toString();

//   function makePermutations(str, combo = '', set = new Set()) {
//     if (!str) {
//       set.add(combo);
//       return;
//     }
//     for (let i = 0; i < str.length; i++) {
//       makePermutations(str.slice(0, i) + str.slice(i + 1), combo + str[i], set);
//     } 
//     return set;
//   }
//   let permutations = makePermutations(n);
//   for (let i of permutations) {
//     sum += parseInt(i);
//   }
//   let result = sum/permutations.size;
//   if (result % 1 !== 0) {
//     let remainder = result % 1;
//     if (remainder < 0.5) {
//       result = Math.floor(result);
//     } else {
//       result = Math.ceil(result);
//     }
//   }
//   return result;
// }


function permutationAverage(n){
  var sum = 0;
  
  n = n.toString();
  for (var i = 0; i < n.length; i++) {
    console.log('n is ', n);
    sum += parseInt(n);
    console.log('sum is ', sum);
    n = n.slice(-1) + n.substring(0, n.length - 1)
  }
  return Math.round(sum/(n.length));
}

console.log(permutationAverage(2)); // 2
console.log(permutationAverage(25)); // 39
console.log(permutationAverage(20)); // 11
console.log(permutationAverage(737)); // 629
console.log(permutationAverage(76853)); // 64444
console.log(permutationAverage(97754)); // 71110
console.log(permutationAverage(25865)); // 57777

