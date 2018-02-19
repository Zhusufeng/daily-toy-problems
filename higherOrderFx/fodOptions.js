/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
*/

function orderFood(list) {
  let order = {};

  list.forEach((element) => {
    if (element['meal']) {
      if (!order[element['meal']]) {
        order[element['meal']] = 1;
      } else {
        order[element['meal']]++;
      }
    }
  });

  return order;
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
    { meal: 'standard' },
    { meal: 'standard' },
    { meal: 'standard' },
    { meal: 'standard' },
  ]                                    { standard: 4 }

  [
    { meal: 'standard' },
    { meal: 'vegan' },
    { meal: 'standard' },
    { meal: 'vegan' },
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

const assert = function(actual, expected) {
  if (actual !== expected) {
    console.log('Expected ' + expected + 'but instead got ' + actual);
  } else {
    console.log('Passed');
  }
}

// Tests
assert(JSON.stringify(orderFood([])), JSON.stringify({}));
assert(JSON.stringify(orderFood([{ meal: 'standard' }])), JSON.stringify({ standard: 1 }));
assert(
  JSON.stringify(
    orderFood([
      { meal: 'standard' },
      { meal: 'vegetarian' },
      { meal: 'vegan' },
      { meal: 'diabetic' },
      { meal: 'gluten-intolerant' }
    ])),
  JSON.stringify({
    'standard': 1,
    'vegetarian': 1,
    'vegan': 1,
    'diabetic': 1,
    'gluten-intolerant': 1,
  })
);
assert(
  JSON.stringify(
    orderFood([
      { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', meal: 'vegetarian' },
      { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', meal: 'standard' },
      { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', meal: 'vegan' },
      { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', meal: 'vegetarian' }
    ])),
  JSON.stringify({
    'vegetarian': 2,
    'standard': 1,
    'vegan': 1,
  })
);
