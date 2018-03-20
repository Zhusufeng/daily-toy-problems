/*
  Prompt: https://leetcode.com/problems/longest-palindromic-substring/description/
*/

/*
  Input & Output
*/
    const input1 = 'babad';
    const output1 = 'bab'; // or 'aba'

    const input2 = 'cbbd';
    const output2 = 'bb';

    const input3 = 'abatacocat';
    const output3 = 'tacocat';

    const input4 = 'tacocatacocat';
    const output4 = 'tacocatacocat';

/*
  Strategy
    Constraints
        Max length of string is 1000

    Idea #1 
      Iterate thru string
        Iterate thru remaining string
          Add substring to an array
      Iterate thru array
        Use a helper func isPalindrome to check if string inside is palindrome
        Add palindromes to an array
      Iterate thru array
        Update longestPalindrome to longestPalindrome found

    Idea #1 Big-O
      Time: Quadratic
      Space: Quadratic/Polynomial

    Steps
      Given 'cbbd'
      i = 0
        substring = c
        substrings = [c]
          j = 1
          substring = cb
          substrings = [c, cb]
          j = 2
          substring = cbb
          substrings = [c, cb, cbb]
          j = 3 
          substring = cbbd
          substrings = [c, cb, cbb, cbbd]
      i = 1
        substring = b
        substrings = [c, cb, cbb, cbbd, b]
        j = 2
          substring = bb
          substrings = [c, cb, cbb, cbbd, b, bb]
        j = 3
          substring = bbd
          substrings = [c, cb, cbb, cbbd, b, bb, bbd]
      i = 2
        substring = b
        substrings = [c, cb, cbb, cbbd, b, bb, b]
          j = 3
          substring = bd
          substrings = [c, cb, cbb, cbb, cbbd, b, bb, b, bd]
      i = 3
        substring = d
        substrings = [c, cb, cbb, cbbd, b, bb, b, bd, d]

      i = 0, c === palindrome
      palindromes = [c]
      i = 1, cb !== palindrome
      i = 2, cbb !== palindrome
      i = 3, cbbd !== palindrome
      i = 4, b === palindrome
      palindromes = [c, b]
      i = 5, bb = palindrome
      palindromes = [c, b, bb]
      i = 6, b = palindrome
      palindromes = [c, b, bb, b]
      i = 7, bd !== palindrome
      i = 8, d === palindrome
      palindromes = [c, b, bb, b, d]

      i = 0, longestPalindrome = c
      i = 1, longestPalindrome = c
      i = 2, longestPalindrome = bb
      i = 3, longestPalindrome = bb
      i = 4, longestPalindrome = bb

    Idea #2
      longestPalindrome = ''
      Iterate thru string
        Iterate thru remaining string
          Use helper func isPalindrome to check if string inside is palindrome
          If it is, check if palindromic substring is longer than longestPalindrome
            If longer, update longestPalindrome to substring

    Idea #2 Big-O
      Time: Quadratic
      Space: Constant

  Skeleton  
    const longestPalindrome = s => {
      let longestPalindrome = '';
      // iterate thru str, i = 0
        // iterate thru str, j = i + 1
          // if (isPalindrome)
            // longestPalindrome = (substring.length > longestPalindrome.length) ? substring : longestPalindrome;
    };

    const isPalindrome(s) = s => {
      // iterate thru s, i++, j--
        // if s[i] !== s[j] return false
    }
*/

const isPalindrome = s => {
  for (let i = 0, j = s.length - 1; i <= j; i += 1, j -= 1) {
    if (s[i] !== s[j]) return false;
  }
  return true;
}

const longestPalindrome = s => {
  let longest = '';
  for (let i = 0; i < s.length; i += 1) {
    let sub = '';
    for (let j = i; j < s.length; j += 1) {
      sub += s[j];
      if (isPalindrome(sub)) {
        longest = sub.length > longest.length ? sub : longest;
      }
    }
  }
  return longest;
};

// Check isPalindrome working
// Time: Linear
// Space: Constant
// console.log(isPalindrome('a')); // true
// console.log(isPalindrome('')); // true
// console.log(isPalindrome('aba')); // true
// console.log(isPalindrome('abc')); // false

// Check longestPalindrome
console.log(longestPalindrome('abc')); // 'a'
console.log(longestPalindrome('aba')); // 'aba'
console.log(longestPalindrome('cbbd')); // 'bb'
console.log(longestPalindrome('tacocat')); // 'tacocat'
console.log(longestPalindrome('betacocatpt')); // 'tacocat'
console.log(longestPalindrome('babad')); // 'bab'
// 82 / 94 test cases passed
// Time limit exceeded for 1000 b's....
// Hint: If “aba” is a palindrome, is “xabax” and palindrome? Similarly is “xabay” a palindrome?
// Hint: If we use brute-force and check whether for every start and end position a substring is a palindrome we have O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for palindromic checks to O(1) by reusing some previous computation.