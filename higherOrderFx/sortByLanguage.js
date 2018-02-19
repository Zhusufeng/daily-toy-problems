/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-17-higher-order-functions-series-sort-by-programming-language
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