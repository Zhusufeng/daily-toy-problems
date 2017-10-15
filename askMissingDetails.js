/*
var list1 = [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value). The value of the question property should be the following string:

Hi, could you please provide your <property name>.

 and returns only the developers with missing details:

 [
  { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
  question: 'Hi, could you please provide your firstName.' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null,
  question: 'Hi, could you please provide your language.' }
]

- At most only one of the values will be null.
- Preserve the order of the original list.
- Return an empty array [] if there is no developer with missing details.
- The input array will always be valid and formatted as in the example above.
*/

function askForMissingDetails(list) {
  var answer = list.filter(function(person) {
    for (var key in person) {
      if (!person[key]) {
        person['question'] = 'Hi, could you please provide your ' + key + '.';
        return person;
      }
    }
  });

  return answer;
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