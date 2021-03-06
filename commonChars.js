/*

 Given 2 strings, return a string of the common characters.
 The order of the returned string should be based off of the 1st argument.
 The returned string should have no duplicate characters.
 Do not count spaces as a character.

 */

/*
O: String (in order appear in 'string1')
I: String 1, String 2
C: 
  Time: Linear
  Space: Constant?
E:
  'abeginotu', 'acehimosu' => 'aeiou'
  'have', 'have' => 'have'
  'have', 'eavh' => 'have'
  'happy', 'happy' => 'hapy'
  'happy', 'hapy' => 'hapy'
  'h ave', 'h a v e' => 'have'
  '', 'have' => ''
  'have', '' => ''
  'hyz', 'aetf' => ''
  'a', 'htapttz' => 'a'
  '123', '39612' => '123'
  '39612', '123' => '312'

General Plan

Idea #1
  Create a empty string called answer
  Iterate through string1 'abeginotu'
    For each el in string1, iterate through string2  ('a', going to go through 'acehimosu')
      Look if string2 has 'a' ('a' , string2[i])
        Concat string1 el to answer
        Break
  Return answer
  // 2 for loops

Idea #2
  Create an empty array called answer
  Iterate through string1 'abeginotu'
    If current el 'a' is included inside of string2 (.includes or .contains())
      If answer has current el inside already - No dupes - using indexOf
        Push current el to answer
  Return answer joined

Idea #3
  Create an empty set called answer
  Create set2 from str2
  Iterate through str1
    If set2 has current el of str1
      Add current el to answer set
  Return spread of answer set into array
*/

var commonChars = function(str1, str2) {
  const answer = new Set();
  const set2 = new Set(str2);

  for (let i = 0; i < str1.length; i++) {
    if (str1[i] === ' ') {
      continue;
    } else if (set2.has(str1[i])) {
      answer.add(str1[i]);
    }
  }

  return [...answer].join('');
};

console.log(commonChars('abeginotu', 'acehimosu')); // 'aeiou'

console.log(commonChars('have', 'have')); // 'have'
console.log(commonChars('h ave', 'h a v e' )); // 'have'
console.log(commonChars('have', 'eavh')); // 'have'

console.log(commonChars('happy', 'happy')); // 'hapy'
console.log(commonChars('happy', 'hapy')); // 'hapy'

console.log(commonChars('', 'have')); // ''
console.log(commonChars('have', '')); // ''
console.log(commonChars('hyz', 'aetf')); // ''

console.log(commonChars('a', 'htapttz')); // 'a'
console.log(commonChars('123', '39612')); // '123'
console.log(commonChars('39612', '123')); // '312'


