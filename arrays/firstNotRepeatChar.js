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
    #1
    Iterate over string. Save a hashMap with the char as key and # of times it appears value. Increment value by 1 if you visit it again. Iterate over hashMap as it keeps order of insertion and return first key with val of 1

    #2
    Iterate over string. Save a hashMap with char as key and keep array as value which holds the indexes the char appears in the string. Iterate over hashMap looking for 1st key whose val (array) has length of 1

  Big-O
    Time: Linear
    Space: O(1)

  Steps
    Given 'ababcd'. Iterate over s
    i = 0, s[i] = 'a', add to hashMap key: 'a', val: 1
    i = 1, s[i] = 'b', add to hashMap key: 'b', val: 1
    i = 2, s[i] = 'a', set hashMap key: 'a', val: val + 1
    i = 3, s[i] = 'b', set hashMap key: 'b', val: val + 1
    i = 4, s[i] = 'c', add to hashMap key: 'c', val: 1
    i = 5, s[i] = 'd', add to hashMap key: 'd', val: 1
    Iterate over hashMap
    {a: 2, b: 2, c: 1}
    key = 'a', val: 2
    key = 'b', val: 2
    key = 'c', val: 1 <-- first with val of 1, return it!

  Skeleton
*/