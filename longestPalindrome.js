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

  Constraints

  Steps

  Skeleton  
    const longestPalindrome = s => {
  
    };
*/
