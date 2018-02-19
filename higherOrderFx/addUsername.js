/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-10-higher-order-functions-series-create-usernames
*/

/*
O: Nothing
I: Array of objects
C:
  Time: Linear
  Space: Constant
E:
INPUT:
[
  { firstName: 'Emily', lastName: 'N.', age: 30}
]
OUTPUT:
[
  { firstName: 'Emily', lastName: 'N.', age: 30, username: 'emilyn1990'}
]


GENERAL PLAN
-------------
Iterate through given list of people
  Get firstName as lowercase
  Get lastName's first letter as lowercase
  Get currYear which you make a new Date and run getFullYear
  Get birthYear which you do currYear - age
  Create username = firstName + lastName + birthYear
  Add username to element

PSEUDOCODE
-----------
Iterate through list (forEach)
  Create firstName equal to element.firstName.toLowerCase
  Create lastName equal to element.lastName[0].toLowerCase
  Create currYear by making instance of Date and running getFullYear
  Get birthYear equal to currYear - element.age
  Create username equal t firstName + lastName + birthYear
  Add username to element

*/

// function addUsername(list) {
//   const currYear = new Date().getFullYear();

//   list.forEach((person) => {
//     const firstName = person.firstName.toLowerCase();
//     const lastName = person.lastName[0].toLowerCase();
//     const birthYear = currYear - person.age;
//     const username = firstName + lastName + birthYear;
//     person['username'] = username;
//   });

//   return list;
// }

function addUsername(list) {
  const currYear = new Date().getFullYear();

  list.forEach((person) => {
    person['username'] = (person.firstName + person.lastName[0]).toLowerCase() + (currYear - person.age);
  });

  return list;
}

// Test
console.log(addUsername([{ firstName: 'Emily', lastName: 'N.', age: 30}]));
console.log(addUsername([
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
]));