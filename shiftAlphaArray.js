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

var findPivot = function (array, start, end) {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  
  for (let i = 1; i < array.length; i++) {
    if (letters.indexOf(array[i][0]) < letters.indexOf(array[i - 1][0])) {
      return i;
    }
  }
  return null;
};
// Info about above implementation
/*
  Time complexity: Linear
  Space complexity: Constant
  Idea 1 has assumptions:
    No nums or chars besides English alphabet in lowercase
    There is only 1 pivot (rotation) because given array was ordered before
*/

// Simple Tests
console.log(findPivot(['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat'])); // 3
console.log(findPivot(['apple', 'bear', 'cat'])); // null
console.log(findPivot(['cat', 'apple', 'bear'])); // 1

/*
  Idea 2
  Use a binary search-esque method
  
  Break array into half - Find mid pt index (Floor array.length/2)
  start index is 0
  end index is length - 1
  
  While start is less than end
    If array at midpt at 0's tolowerCase's charCode is less than start
      Return midpt
    If array at midpt at 0's toLowerCase's charCode is greater than start's
      Look to the right: Change low to midpt + 1
    If array at midpt at 0's toLowerCase's charCode is less than end's
      Look to the left: Change high to midpt - 1
  
  Return null
  
  Idea 2 has assumptions:
    No nums or chars besides English alphabet in lowercase
    There is only 1 pivot (rotation) because given array was ordered before
*/