/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-16-higher-order-functions-series-ask-for-missing-details
*/

function askForMissingDetails(list) {
  return list.filter((person) => {
    for (var key in person) {
      if (!person[key]) {
        person['question'] = 'Hi, could you please provide your ' + key + '.';
        return person;
      }
    }
  });
};

/*
O: Array of objects
I: Array of objects
C: Linear
E:
  Input                                      Output
  --------------------------------------------------
  []                                         []
  [                                          [
    {fn: null},                                {fn: null, question: 'Hi, could you please provide your fn.'},
    {country: 'Argentina'},                    {age: null, question: 'Hi, could you please provide your age.'}
    {age: null}                              ]
  ]

  General Plan/Brainstorm
  -----------------------
  Take in list
  Create answer
  Make answer equal to filter the list
  Iterate through object
  If there is the 1 null value
  Add question as key to the object
*/

// Test
console.log(
  askForMissingDetails( [
    {fn: null},
    {country: 'Argentina'},
    {age: null}
  ])
);

console.log(
  askForMissingDetails( [
    { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
    { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
    { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
  ])
);