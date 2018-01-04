/*
A number is simply made up of digits.
The number 1256 is made up of the digits 1, 2, 5, and 6.
For 1256 there are 24 distinct permuations of the digits:
1256, 1265, 1625, 1652, 1562, 1526, 2156, 2165, 2615, 2651, 2561, 2516,
5126, 5162, 5216, 5261, 5621, 5612, 6125, 6152, 6251, 6215, 6521, 6512.

Your goal is to write a program that takes a number, n, and returns the average value of all distinct permutations of the digits in n. Your answer should be rounded to the nearest integer. For the example above the return value would be 3889.

n will never be negative

A few examples:

permutation_average(2)
return 2

permutation_average(25)
>>> 25 + 52 = 77
>>> 77 / 2 = 38.5
return 39

permutation_average(20)
>>> 20 + 02 = 22
>>> 22 / 2 = 11
return 11

permutation_average(737)
>>> 737 + 377 + 773 = 1887
>>> 1887 / 3 = 629
return 629
Note: Your program should be able to handle numbers up to 6 digits long
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

function permutationAverage(n){
  let sum = 0;
  n = n.toString();

  function makePermutations(str, combo, set) {
    if (!str) {
      set.add(combo);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      makePermutations(str.slice(0, i) + str.slice(i + 1), combo + str[i], set);
    } 
    return set;
  }
  let permutations = makePermutations(n, '', new Set());

  console.log(permutations);

  for (let num of permutations) {
    sum += parseInt(num);
  }
  return Math.ceil(sum/permutations.size);
}

console.log(permutationAverage(2)); // 2
console.log(permutationAverage(25)); // 39
console.log(permutationAverage(20)); // 11
console.log(permutationAverage(737)); // 629
