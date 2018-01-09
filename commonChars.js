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

*/

var commonChars = function(str1, str2) {
  // TODO: Your code here!
};