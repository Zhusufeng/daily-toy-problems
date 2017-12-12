/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".
*/

/*
O: String with reversed vowels
I: String
C: 
  Time: 
  Space: 
E:
 "hello" => "holle"
 "leetcode" => "leotcede"
  "aeiou" => "uoiea"
  "laiu" => "luia"
  "luau" => "luau"

General Plan
  Split string into an array (so it is mutable)
  Iterate through array
    Collect vowels by saving them in an array 'vowels' with key of counter and values of char, index
    Ie. vowels = [
      {char: 'e', index: 1},
      {char: 'o', index: 4},      
    ]

  While i is less than j
    Do swaps outward to in updating the array
    Start i at 0 and j as length - 1 of vowels
    Increment i and decrement j
*/

var reverseVowels = function(s) {
    
};
