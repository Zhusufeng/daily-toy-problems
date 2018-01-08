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
  ["bl", at", "ta", "lb']
  Output:
  [
    ["at", "ta"],
    ["bl", "lb"]
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
*/