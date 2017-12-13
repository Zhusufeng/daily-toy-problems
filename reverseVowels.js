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

Pseudocode
  Create arr as the split of s
  Create vowelKey as array of vowels
  Create vowels as an empty array
  Iterate through arr
    If arr at index i has an index in vowelKey
      Push obj with arr at index i and i to vowels
  j is 0
  k is length of vowels - 1
  While j is less than k
    array[vowels[k].index] becomes vowels[j].char
    array[vowels[j].index] becomes vowels[k].char 
  Return joined array
*/

// var reverseVowels = function(s) {
//   let arr = s.split('');
//   const vowelKey = ['a', 'e', 'i', 'o', 'u'];
//   let vowels = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (vowelKey.indexOf(arr[i]) > -1) {
//       vowels.push({ char: arr[i], index: i });
//     }
//   }
//   console.log(vowels);

//   let j = 0;
//   let k = vowels.length -1;

//   while (j < k) {
//     console.log(j, k);
//     arr[vowels[j].index] = vowels[k].char;
//     arr[vowels[k].index] = vowels[j].char;
//     j++;
//     k--;
//   }

//   return arr.join('');
// };
// Time Complexity: Linear (split, iterate through arr + indexOf, join)
// Space Complexity: Linear (create arr, create vowels)
// 92 ms

var reverseVowels = function(s) {
  let arr = s.split('');
  const vowelKey = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  let vowels = [];

  for (let i = 0; i < arr.length; i++) {
    if (vowelKey.has(arr[i])) {
      vowels.push({ char: arr[i], index: i });
    }
  }

  let j = 0;
  let k = vowels.length -1;

  while (j < k) {
    arr[vowels[j].index] = vowels[k].char;
    arr[vowels[k].index] = vowels[j].char;
    j++;
    k--;
  }

  return arr.join('');
};
// Time Complexity: Linear (split, create Set, iterate through arr, join)
// Space Complexity: Linear (create arr, create vowels)
// 72 ms
// Your runtime beats 86.18% of JS submissions

// More efficient algorithm:
// var reverseVowels = function(s) {
//          const vowels = {
//         'a' : true,
//         'e' : true,
//         'i' : true,
//         'o' : true,
//         'u' : true,
//         'A' : true,
//         'E' : true,
//         'I' : true,
//         'O' : true,
//         'U' : true
//     }
//     letters = s.split("");
//     for(let i=0, j=letters.length-1; j > i;){
//         if(vowels[letters[i]] === undefined){
//             i++;
//             continue;
//         }
//         if(vowels[letters[j]] === undefined){
//             j--;
//             continue;
//         }
//         let temp = letters[i];
//         letters[i] = letters[j];
//         letters[j] = temp;
        
//         i++;
//         j--;
//     }
//     return letters.join("");
    
// };

console.log(reverseVowels('abi'));
console.log(reverseVowels('beluga'));
console.log(reverseVowels('smartphone'));
console.log(reverseVowels('luau'));
console.log(reverseVowels('aeiou'));
