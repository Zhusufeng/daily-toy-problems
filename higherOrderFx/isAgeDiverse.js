/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-9-higher-order-functions-series-is-the-meetup-age-diverse
*/

/*
O: Boolean
I: Array of objects
C:
  Time: Quadratic
  Space: Constant
E:
INPUT                          OUTPUT
---------------------------------------
[]                             false
[
  {age: 88}
]                              false
[
  {age: 88},
  {age: 22},
  {age: 35}
]                              false
[
  {age: 88},
  {age: 22},
  {age: 35},
  {age: 16},
  {age: 49},
  {age: 56},
  {age: 69},
  {age: 159},
  {age: 98},
  {age: 73}
]                              true

GENERAL PLAN
--------------
const ages = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian']
Iterate through the ages array and make sure every item is inside some of the persons array

*/

function isAgeDiverse(list) {
  const ages = ['teens', 'twenties', 'thirties', 'forties', 'fifties', 'sixties', 'seventies', 'eighties', 'nineties', 'centenarian'];

  return ages.every(function(generation) {
    return list.some(function(person) {
      let determinedGen = '';
      let age = person.age;
      // console.log('age is ', age);
      if (age >= 13 && age < 20) {
        determinedGen = 'teens';
      } else if (age >= 20 && age < 30) {
        determinedGen = 'twenties';
      } else if (age >= 30 && age < 40) {
        determinedGen = 'thirties';
      } else if (age >= 40 && age < 50) {
        determinedGen = 'forties';
      } else if (age >= 50 && age < 60) {
        determinedGen = 'fifties';
      } else if (age >= 60 && age < 70) {
        determinedGen = 'sixties';
      } else if (age >= 70 && age < 80) {
        determinedGen = 'seventies';
      } else if (age >= 80 && age < 90) {
        determinedGen = 'eighties';
      } else if (age >= 90 && age < 100) {
        determinedGen = 'nineties';
      } else if (age >= 100) {
        determinedGen = 'centenarian';
      }
      // console.log('the gen is ', determinedGen);
      return generation === determinedGen;
    });
  });
}

// Tests
console.log(isAgeDiverse([
  {age: 88}
]));
console.log(isAgeDiverse([
  {age: 88},
  {age: 22},
  {age: 35}
]));
console.log(isAgeDiverse([
  {age: 16},
  {age: 22},
  {age: 35},
  {age: 49},
  {age: 56},
  {age: 69},
  {age: 73},
  {age: 88},
  {age: 98},
  {age: 159}
]));
console.log(isAgeDiverse([
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 19, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 39, language: 'Ruby' },
  { firstName: 'Noa', lastName: 'A.', country: 'Israel', continent: 'Asia', age: 40, language: 'Ruby' },
  { firstName: 'Andrei', lastName: 'E.', country: 'Romania', continent: 'Europe', age: 59, language: 'C' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 60, language: 'C' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 75, language: 'Python' },
  { firstName: 'Chloe', lastName: 'K.', country: 'Guernsey', continent: 'Europe', age: 88, language: 'Ruby' },
  { firstName: 'Viktoria', lastName: 'W.', country: 'Bulgaria', continent: 'Europe', age: 98, language: 'PHP' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript' }
]));