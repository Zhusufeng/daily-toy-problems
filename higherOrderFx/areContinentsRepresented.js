/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-8-higher-order-functions-series-will-all-continents-be-represented
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

/*
Great usage of arrays only by Seminioni:
function allContinents(list) {
  return ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
    .every(function(x){
    return list.some(function(y){
      return x === y.continent;
    });
  });
}
*/