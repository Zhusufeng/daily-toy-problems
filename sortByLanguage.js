/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
Write a function that returns the array sorted alphabetically by the programming language. In case there are some developers that code in the same language, sort them alphabetically by the first name:

[
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' }
];
Notes:

The input array will always be valid and formatted as in the example above.
The array does not include developers coding in the same language and sharing the same name
*/
/*
O: Array of objects
I: Array of objects
C: Linear
E:

General Plan:
Use sort and sort by language

*/

function sortByLanguage(list) {
  return list.sort(function(dev1, dev2) {
    if (dev1.language > dev2.language) {
      return 1;
    } else if (dev1.language === dev2.language) {
      if (dev1.firstName > dev2.firstName) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  });
}

// Allysson's solution I edited
// function sortByLanguage(list) {
//   return list.sort((a,b) => {
//     if (a.language === b.language) {
//       return a.firstName > b.firstName ? 1 : -1;
//     }
//     return a.language > b.language ? 1 : -1;
//   });
// }

// Test
var list1 = [
  { firstName: 'Nikau', lastName: 'R.', country: 'New Zealand', continent: 'Oceania', age: 39, language: 'Ruby' },
  { firstName: 'Precious', lastName: 'G.', country: 'South Africa', continent: 'Africa', age: 22, language: 'JavaScript' },
  { firstName: 'Maria', lastName: 'S.', country: 'Peru', continent: 'Americas', age: 30, language: 'C' },
  { firstName: 'Agustin', lastName: 'V.', country: 'Uruguay', continent: 'Americas', age: 19, language: 'JavaScript' }
];
console.log(sortByLanguage(list1));