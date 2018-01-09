/*
O: Number (index of the pivot)
I: Array of strings
C:
  Time: 
  Space: 
E:
  ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'] => 3
  ['apple', 'bear', 'cat'] => null (no pivot)
  ['cat', 'apple', 'bear'] => 1
  ['c', 'a', 'b'] => 1
  ['ee', 'fe', 'ae', 'be', 'ze'] => null (no pivot, just order of order)
  ['3', '1', '2'] => 1??? Or do not mind numbers. Always assume characters?
  
General Plan
  Idea 1
    Create array of letters [a, b, c -> z]
    Iterate through array, starting i at 1 
      If indexOf letter's array at current index is LESS than that of index -1
        Return i
    Return null
    
  Idea 1 has assumptions:
    No nums or chars besides English alphabet in lowercase
    There is only 1 pivot (rotation) because given array was ordered before
    
  Would like to use binary search...
*/

// var findPivot = function (array, start, end) {
//   const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
//   for (let i = 1; i < array.length; i++) {
//     if (letters.indexOf(array[i][0]) < letters.indexOf(array[i - 1][0])) {
//       return i;
//     }
//   }
//   return null;
// };
// Info about above implementation
/*
  Time complexity: Linear
  Space complexity: Constant
  Idea 1 has assumptions:
    No nums or chars besides English alphabet in lowercase
    There is only 1 pivot (rotation) because given array was ordered before
*/

/*
  Idea 2
  Use a binary search-esque method
  
  Break array into half - Find mid pt index (Floor array.length/2)
  start index is 0
  end index is length - 1
  
  While start is less than end
    If array at midpt at 0's tolowerCase's charCode is less than array at midpt - 1 at 0's toLowerCase charCode
      Return midpt
    If array at midpt at 0's toLowerCase's charCode is greater than array at 0 at 0's toLowerCase charcode
      Look to the right: Change start to midpt + 1
    Else
      Look to the left: Change end to midpt - 1
  
  Return null
  
  Idea 2 has assumptions:
    No nums or chars besides English alphabet in lowercase
    There is only 1 pivot (rotation) because given array was ordered before
*/

var findPivot = function (array) {
  let start = 0;
  let end = array.length - 1;
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (mid === 0 || array[mid].charCodeAt(0) < array[mid - 1].charCodeAt(0)) {
      return mid;
    } else if (array[mid].charCodeAt(0) > array[0].charCodeAt(0)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
};

// Simple Tests
console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'])); // 3
console.log(findPivot(['apple', 'bear', 'cat'])); // null
console.log(findPivot(['cat', 'apple', 'bear'])); // 1

/* Info
 Time Complexity: Logarithmic
 Space Complexity: Constant
 Assumptions: 
   Array was ordered before, and was shifted only once. 
   Each string starts with an alphabetical character
*/