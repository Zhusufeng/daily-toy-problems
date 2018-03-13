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

    Split string input into an array
    Keep track of current substring in an array
    Keep track of all unique substrings in substrings array
    
    Idea #1
      Iterate thru input array 
        If current char is already in substring (indexOf)
          Push current substring to substrings
          Restart substring with current char as 1st element
        Else 
          Push current char to current substring
      Iterate over substrings
        Keep track of substring with longest length (Math.max)
      Return longest substring


  Big-O  
*/