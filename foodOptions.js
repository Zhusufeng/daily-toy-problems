/*
Source: https://www.codewars.com/kata/583952fbc23341c7180002fd/train/javascript

INPUT:
var attendees = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C',
    meal: 'vegetarian' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript',
    meal: 'standard' },
  { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby',
    meal: 'vegan' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C',
    meal: 'vegetarian' },
];

OUTPUT:
{ vegetarian: 2, standard: 1, vegan: 1 }

FOOD OPTIONS:
'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'

*/

function orderFood(list) {

}

/*
O: Object
I: Array of people objects
C:
  Time: Linear
  Space: Constant
E:
  Examples:
  INPUT                                OUTPUT
  --------------------------------------------
  []                                   {}
  [
    {meal: 'standard'},
    {meal: 'standard'},
    {meal: 'standard'},
    {meal: 'standard'},
  ]                                    { standard: 4 }

  [
    {meal: 'standard'},
    {meal: 'vegan'},
    {meal: 'standard'},
    {meal: 'vegan'},
  ]                                    { standard: 2, vegan: 2 }


  General Plan/Pseudocode
  -----------------------
  (Using forEach)
  Initialize order as empty object
  Iterate through list (using forEach)
    If current element has meal key
      If order does not have a key that is meal's value
        Create key in order that is meal's value and set to 1
      Else
        Increment order with key that is meal's value by 1
  Return order
*/