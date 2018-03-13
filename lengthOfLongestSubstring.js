/*
  Prompt: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
*/

/*
  Inputs & Outputs
    const input1 = 'abcabab'
    const output1 = 'abc'

    const input2 = 'ooooo'
    const output2 = 'o'

    const input3 = 'pwwkew'
    const output3 = 'wke'

  Strategy
    
    Idea #1
      Have a max that equals longest substring
      Split string input into an array
      Keep track of current substring in an array
      Keep track of all unique substrings in substrings array
      Iterate thru input array 
        If current char is already in substring (indexOf)
          Push current substring (joined) to substrings
          Restart substring with current char as 1st element
        Else 
          Push current char to current substring
      Iterate over substrings
        Keep track of substring with longest length (Math.max)
      Return longest substring.length

    Big-O of Idea #1
      Time: Worst O(n^2 + n) -> Quadratic
      Space: O(n) -> Linear

    Idea #2
      Have a max that equals longest substring (let)
      Keep track of current substring as a set (let)
      Iterate thru input 
        If current char is in current substring 
          If current substring's length is greater than max
            Set max to current substring.length
          Restart substring as a new Set with current char
        Else 
          Add current char to substring
      Return max
      
    Big-O of Idea #2
      Time: O(n) -> Linear
      Space: O(1) -> Constant
*/
const lengthOfLongestSubstring = (s) => {
    
};