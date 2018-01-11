/*
  Using array a, find the duplicates in array b
  a: [1, 2, 3, 5, 6, 7]
  b: [0, 3, 6, 7, 9, 20, null]
  Returns [3, 6, 7]
*/

/*
  O: Array of items in a and b
  I: 2 arrays: a and b
  C: 
    Time: 
    Space:
  E:
  [1, 2, 3, 5, 6, 7], [0, 3, 6, 7, 9, 20, null] => [3, 6, 7]
  [0, 1, 2, 3], [0, 1, 2, 3] => [0, 1, 2, 3]
  [0, 1, 2, 3], [0, 1, 2] => [0, 1, 2]
  [], [0, 1, 2, 3] => []
  [0, 1, 2, 3], [] => []

General Plan
  Idea #1
    Create answer as empty array
    Make b into a set
    Iterate through a
      If set has a at current index 
        Push a at current index to answer
    Return answer
*/

function findDupes(a, b) {

}

