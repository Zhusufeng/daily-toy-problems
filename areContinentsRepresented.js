/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return:

true if all of the following continents / geographic zones will be represented by at least one developer: 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'.
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' },
];
your function should return true as there is at least one developer from the required 5 geographic zones.

Notes:

The input array and continent names will always be valid and formatted as in the list above for example 'Africa' will always start with upper-case 'A'.
*/

/*
O: Boolean
I: Array of objects
C:
  Time: Linear
  Space: Constant
E:

INPUT                                OUTPUT
------------------------------------------------
[
  {continent: 'Africa'}
]                                     False
[
  {continent: 'Africa'},
  {continent: 'Africa'},
  {continent: 'Africa'}
]                                     False
[
  {continent: 'Africa'},
  {continent: 'Americas'},
  {continent: 'Asia'},
  {continent: 'Europe'},
  {continent: 'Oceania'}
]                                     True

GENERAL PLAN/BRAINSTORM
-----------------------
Create let currentContinents with 5 continents as keys with values of false
Iterate over array (forEach)
  Get element's continent and toggle currentContinents to true
Iterate over currentContinents
  If any are false
    Return false
Return true


PSEUDOCODE
------------
let currentContinents = {
  Africa: false,
  Americas: false,
  Asia: false,
  Europe: false,
  Oceania: false
}
Iterate over list
  Set currentContinent at key of element's continent property to true
Iterate over currentContinents
  If currentContinents at key is false
    Return false
Return true

*/

function allContinents(list) {
  let currentContinents = {
    Africa: false,
    Americas: false,
    Asia: false,
    Europe: false,
    Oceania: false
  };

  list.forEach((person) => {
    if (!currentContinents[person['continent']]) {
      currentContinents[person['continent']] = true;
    }
  });

  for (let key in currentContinents) {
    if (!currentContinents[key]) {
      return false;
    }
  }

  return true;
}

// TESTS
console.log(allContinents([
  {continent: 'Africa'}
])); // f

console.log(allContinents([
  {continent: 'Africa'},
  {continent: 'Africa'},
  {continent: 'Africa'}
])); // f

console.log(allContinents([
  {continent: 'Africa'},
  {continent: 'Americas'},
  {continent: 'Asia'},
  {continent: 'Europe'},
  {continent: 'Oceania'}
])); // t

console.log(allContinents([
  { firstName: 'Fatima', lastName: 'A.', country: 'Algeria', continent: 'Africa', age: 25, language: 'JavaScript' },
  { firstName: 'Agustín', lastName: 'M.', country: 'Chile', continent: 'Americas', age: 37, language: 'C' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Laia', lastName: 'P.', country: 'Andorra', continent: 'Europe', age: 55, language: 'Ruby' },
  { firstName: 'Oliver', lastName: 'Q.', country: 'Australia', continent: 'Oceania', age: 65, language: 'PHP' }
])); // t