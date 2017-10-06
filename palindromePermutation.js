// Given a string, determine if a permutation of the string could form a palindrome.

// For example,
// "code" -> False, "aab" -> True, "carerac" -> True.

/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  let charCount = {};
  let oddCount = 0;

  for (var i = 0; i < s.length; i++) {
    if (charCount[s[i]]) {
      charCount[s[i]]++;
    } else {
      charCount[s[i]] = 1;
    }
  }

  for (var key in charCount) {
    if (charCount[key] % 2 === 1) {
      oddCount++;
    }
  }

  if (s.length % 2 === 0 && oddCount === 0) {
    return true;
  } else if (s.length % 2 === 1 && oddCount === 1) {
    return true;
  } else {
    return false;
  }
};

/*
O: Boolean
I: String
C:
  Time: Linear
  Space: Linear
E:
  Input              Output
  -------------------------
  "code"               False
  "aab"                True
  "carerac"            True
  "bbbcceccbbb"        True
  "bbbcceccbb"         False
  "bbbcceeccbbb"       True
  "eecceccee"          True
  "a"                  True
  "ab"                 False
  ""                   False

  Patterns
  ---------
  If length is even && if all characters have an even amount, it can be a palindrome
  If length is odd && if all characters but one have an event amount, it can be a palindrome

  General Plan
  -------------
  Initialize let charCount as empty object
  Initialize variable oddCount at 0
  Iterate through string
    If char is in charCount
      Increment the char key in charCount by 1
    Else
      Add char key in charCount and set to 1
  Iterate through charCount
    If the value of a key is odd
      Increment oddCount
  If string's length is even && oddCount is 0
    Return true
  If string's length is odd && oddCount is 1
    Return true
  Else
    Return false
*/

// Tests
const assert = function(actual, expected) {
  if (actual !== expected) {
    console.log('Expected to get ' + expected + ' but instead got ' + actual);
  } else {
    console.log('Passed');
  }
};

assert(canPermutePalindrome('code'), false);
assert(canPermutePalindrome('aab'), true);
assert(canPermutePalindrome('carerac'), true);
assert(canPermutePalindrome('bbbcceccbbb'), true);
assert(canPermutePalindrome('bbbcceccbb'), false);
assert(canPermutePalindrome('bbbcceeccbbb'), true);
assert(canPermutePalindrome('eecceccee'), true);
assert(canPermutePalindrome('a'), true);
assert(canPermutePalindrome('ab'), false);
assert(canPermutePalindrome(''), false);  // Got true...