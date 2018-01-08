/*
Given an array of strings, group anagrams together.

For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 
Return:

[
  ["ate", "eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note: All inputs will be in lower-case.
*/
/*
O: Array of arrays which contain strings
I: Array of strings
C:
  Time: 
  Space: 
E:
  Input:
  ["eat", "tea", "tan", "ate", "nat", "bat"]
  Output:
  [
    ["ate", "eat","tea"],
    ["nat","tan"],
    ["bat"]
  ]

  Input: 
  ["at", "ta"]
  Output:
  [
    ["at", "ta"]
  ]

  Input: 
  ["bl", "at", "ta", "lb"]
  Output:
  [
    ["at", "ta"],
    ["bl", "lb"]
  ]

  Input: 
  ["bl", "bl", "ta", "lb']
  Output:
  [
    ["ta"],
    ["bl", "bl", lb"]
  ]

General Plan

Idea #1
  Create a permutation obj
  Create a holder obj (that will have arrays as values)
  Create result as an empty arr
  Sort the array
  Go through given array
    If its the 1st element
      Make a set of permutations bl -> bl, lb
      Save this set to the permutation obj using the string as the key and the set as the val
      Save it to the holder obj using the string as the key and value as string in an array
    Else
      Iterate through permutation obj and see if string is inside any of the sets
        If it is
          Get the key of the permutation obj
          Save it to the holder obj using the key from permutation obj and push it to the array
        Else
          Make a set of permutations bl -> bl, lb
          Save this set to the permutation obj using the string as the key and the set as the val
          Save it to the holder obj using the string as the key and value as string in an array
    Iterate through the holder obj
      Push each value to result array
    Return result

Idea #2
  Create library set
  Create result obj
  Create result arr

  Sort the given array
  Go through given array
    Split the element 'eat' -> ['e', 'a', 't']
    Sort ['a', 'e', 't']
    Join the temp array back to a temp string 'aet'
    If library has this string
      Push the element ('eat') to result obj where temp string 'aet' is the key
    Else (library does not have string)
      Add the temp string to library set
      Add the temp string 'aet' as key to result obj with value as the element in an array ['eat']

  Iterate through resultObj
    Push values of resultObj to resultArr

  Return resultArr
*/

// var groupAnagrams = function(strs) {
//   const library = new Set();
//   const resultObj = {};
//   const resultArr = [];

//   for (let i = 0; i < strs.length; i++) {
//     let tempSplit = strs[i].split('');
//     tempSplit.sort();
//     let tempJoin = tempSplit.join('');
//     if (library.has(tempJoin)) {
//       resultObj[tempJoin].push(strs[i]);
//     } else {
//       library.add(tempJoin);
//       resultObj[tempJoin] = [strs[i]];
//     }
//   }

//   for (let key in resultObj) {
//     resultArr.push(resultObj[key]);
//   }

//   return resultArr;
// };

var groupAnagrams = function(strs) {
  const lib = new Map();
  const result = [];

  strs.forEach(el => {
    let tmp = el.split('').sort().join('');
    if (lib.has(tmp)) {
      lib.get(tmp).push(el);
    } else {
      lib.set(tmp, [el]);
    }
  });

  lib.forEach(v => {
    result.push(v);
  });

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
console.log(groupAnagrams(["at", "ta"]));
console.log(groupAnagrams(["bl", "at", "ta", "lb"]));

