/*
  Prompt: https://leetcode.com/problems/longest-palindromic-substring/description/
*/

/*
  Input & Output
*/
    const input1 = 'ababad';
    const output1 = 'bab'; // or 'aba'

    const input2 = 'cbbd';
    const output2 = 'bb';

    const input3 = 'abatacocat';
    const output3 = 'tacocat';

    const input4 = 'tacocatacocat';
    const output4 = 'tacocatacocat';

/*
  Strategy
    Idea #1 
      Iterate thru string
        Iterate thru remaining string
          Add substring to an array
      Iterate thru array
        Use a helper func isPalindrome to check if string inside is palindrome
        Add palindromes to an array
      Iterate thru array
        Update longestPalindrome to longestPalindrome found

  Big-O
    Time: Quadratic
    Space: Quadratic/Polynomial

  Constraints
    Max length of string is 1000

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


  Skeleton  
    const longestPalindrome = s => {
  
    };
*/
