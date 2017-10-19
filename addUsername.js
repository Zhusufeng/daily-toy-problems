/*
Given the following input array:

var list1 = [
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
];
write a function that adds the username property to each object in the input array:

[
  { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby',
    username: 'emilyn1990' },
  { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure',
    username: 'nore2000' }
]
The value of the username property is composed by concatenating:

firstName in lower-case;
first letter of the lastName in lower-case; and
the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
Notes:

The input array will always be valid and formatted as in the example above.
Age is represented by a number which can be any positive integer.
Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.
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

function addUsername(list) {
  const currYear = new Date().getFullYear();

  list.forEach(function(person) {
    const firstName = person.firstName.toLowerCase();
    const lastName = person.lastName.toLowerCase();
    const birthYear = currYear - person.age;
    const username = firstName + lastName + birthYear;
    element['username'] = username;
  });

  return list;
}
