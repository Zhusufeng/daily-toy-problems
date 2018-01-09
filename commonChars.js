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


*/

var commonChars = function(str1, str2) {
  // TODO: Your code here!
};