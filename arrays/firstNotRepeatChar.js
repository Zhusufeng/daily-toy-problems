/*
  Write a solution that only iterates over the string once and uses O(1) additional memory

  Given a string s, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.

  Example

  For s = "abacabad", the output should be
  firstNotRepeatingCharacter(s) = 'c'.

  There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.

  For s = "abacabaabacaba", the output should be
  firstNotRepeatingCharacter(s) = '_'.

  There are no characters in this string that do not repeat.

  [input] A string that contains only lowercase English letters.
  Guaranteed constraints:
  1 ≤ s.length ≤ 105

  [output] char
  The first non-repeating character in s, or '_' if there are no characters that do not repeat.
*/

/*
  Inputs & Outputs
  const input1 = 'abacabad';
  const output1 = 'c';

  const input2 = 'abacabaabacaba';
  const output2 = '_';

  const input3 = 'abcdabcdef';
  const output3 = 'e';

  const input4 = 'cccccc';
  const output4 = '_';

  const input5 = 'cccccce';
  const output5 = 'e';

  Constraints
  1. Iterates over the string once
  2. Uses O(1) additional memory

  Strategy

  Big-O

  Steps

  Skeleton
*/