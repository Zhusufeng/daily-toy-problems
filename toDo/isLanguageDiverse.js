/*
  Prompt: https://www.codewars.com/kata/coding-meetup-number-13-higher-order-functions-series-is-the-meetup-language-diverse
*/

const input1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
  { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
  { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
];


function isLanguageDiverse(list) {
  // thank you for checking out the Coding Meetup kata :)
}

/*
  2.22.18
  Inputs & Outputs
    const input1 = [
      { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'Python' },
      { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'Ruby' },
      { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 43, language: 'Ruby' },
      { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 95, language: 'JavaScript' },
      { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 18, language: 'JavaScript' },
      { firstName: 'Joao', lastName: 'D.', country: 'Portugal', continent: 'Europe', age: 25, language: 'JavaScript' }
    ];

    const output1 = true;

    {
      JavaScript: 3,
      Python: 1,
      Ruby: 2
    }
    const total = 6

    find max
    find min
    max needs to be between min and 2min
    ensure max is within constraints for min

    const input2 = [
      {language: 'Ruby'},
      {language: 'Ruby'},
      {language: 'Python'},
      {language: 'JavaScript'}
    ];
    const total = 4

    max = 2
    min = 1

    const output2 = true;

    let ruby = 0
    let javascript = 0
    let python = 0
    let max = 0
    let min = 0

    Strategy
      Iterate thru array, increment each counter, update max and min
      If max is between min and 2 * min return true

    Big-O
      Time: Linear
      Space: Constant

    Constraints
      Input will always be valid
      3 programming languages will always be represented

    Steps
      Given input2
        i = 0, ruby = 1, max = 1, min = 1
        i = 1, ruby = 2, max = 2, min = 1
        i = 2, python = 1, max = 2, min = 1
        i = 3, javascript = 1, max = 2, min = 1
      Max is between 2 and 1

    Skeleton
      const isLanguageDiverse = list => {
        let ruby = 0;
        let javascript = 0;
        let python = 0;
        let max = 0;
        let min = 0;

        // iterate thru list
          // if list.language is ruby, +1 to ruby
          // if list.language is javascript, +1 to javascript
          // if list.language is python, +1 to python
          // if ruby or js or python is greater than max, set it
          // if ruby or js or python is less than min, set it
        // if max is greater than/eql to min and less than/eql to min * 2, return true
        // return false
      };

*/