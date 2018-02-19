/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-6-higher-order-functions-series-can-they-code-in-the-same-language
*/

/*
O: Boolean
I: Array of objects
C: Linear
E:

  INPUT                                               OUTPUT
  ------------------------------------------------------------
  []                                                  true
  [
    {language: 'Ruby'},
    {language: 'Ruby'}
  ]                                                    true
  [
    {language: 'Ruby'},
    {language: 'JavaScript'}
  ]                                                    false


  GENERAL PLAN/BRAINSTORM
  ------------------------
  Iterate through given lost
  Set language from first element as language
  Use every to make sure all have same language

  PSEUDOCODE
  ----------
  Set const language as list[0].language
  Return every with a callback
  The callback will return if element's language equals language
*/

function isSameLanguage(list) {
  const language = list[0].language;

  return list.every((person) => {
    return (person.language === language);
  });
}

// Test
console.log(isSameLanguage(
  [
    {language: 'Ruby'},
    {language: 'Ruby'}
  ]
)); // true

console.log(isSameLanguage(
  [
    {language: 'Ruby'},
    {language: 'JavaScript'}
  ]
)); // false

console.log(isSameLanguage(
  [
    { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
    { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
    { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
  ]
)); // true