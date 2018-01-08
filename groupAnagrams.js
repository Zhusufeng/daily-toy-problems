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

*/