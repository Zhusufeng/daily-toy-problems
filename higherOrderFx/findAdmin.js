/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-12-higher-order-functions-series-find-github-admins
*/

/*
O: Array of objects
I: Array of objects, language
C: 
  Time: Linear
  Space: Linear
E: 

EX.1 
[
  {language: 'JavaScript', githubAdmin: 'yes'}
]
[
  {language: 'JavaScript', githubAdmin: 'yes'}
]

EX.2
[
  {language: 'JavaScript', githubAdmin: 'yes'},
  {language: 'JavaScript', githubAdmin: 'no'}
]
[
  {language: 'JavaScript', githubAdmin: 'yes'}
]

EX.3 
[
  {language: 'JavaScript', githubAdmin: 'yes'},
  {language: 'Java', githubAdmin: 'no'}
]
[
  {language: 'JavaScript', githubAdmin: 'yes'}
]

EX.4
[
  {language: 'JavaScript', githubAdmin: 'yes'},
  {language: 'Java', githubAdmin: 'yes'}
]
[
  {language: 'JavaScript', githubAdmin: 'yes'}
]

EX.5
[
  {language: 'JavaScript', githubAdmin: 'yes'},
  {language: 'JavaScript', githubAdmin: 'yes'}
]
[
  {language: 'JavaScript', githubAdmin: 'yes'},
  {language: 'JavaScript', githubAdmin: 'yes'}
]

GENERAL PLAN
-------------
Return iterate through list using filter
If list at current index's language equals language param AND githubAdmin equals yes
  Then return that the list at current index

*/

function findAdmin(list, lang) {
  return list.filter(function(dev) {
    return (dev.language === lang && dev.githubAdmin === 'yes'); 
  });
}

// Test

console.log('0 ', findAdmin(
  [
    {language: 'JavaScript', githubAdmin: 'yes'}
  ],
  'JavaScript'
));

console.log('1 ', findAdmin(
  [
    {language: 'JavaScript', githubAdmin: 'yes'},
    {language: 'JavaScript', githubAdmin: 'no'}
  ],
  'JavaScript'
));

console.log('2 ', findAdmin(
  [
    {language: 'JavaScript', githubAdmin: 'yes'},
    {language: 'Java', githubAdmin: 'no'}
  ],
  'JavaScript'
));

console.log('3 ', findAdmin(
  [
    {language: 'JavaScript', githubAdmin: 'yes'},
    {language: 'Java', githubAdmin: 'yes'}  
  ],
  'JavaScript'
));

console.log('4 ', findAdmin(
  [
    {language: 'JavaScript', githubAdmin: 'yes'},
    {language: 'JavaScript', githubAdmin: 'yes'}
  ],
  'JavaScript'
));

console.log('5 ', findAdmin(
  [  
    { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
    { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
    { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
  ],
  'JavaScript'
));