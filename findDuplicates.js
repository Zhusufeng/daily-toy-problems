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
    Create answer as empty array // Linear
    Make b into a set
    Iterate through a // Linear
      If set has a at current index  // Constant
        Push a at current index to answer // Constant
    Return answer

    Time complexity: Linear - 2n + 2
    Assumptions:
      a does not have duplicates
      Elements in a and b are Numbers
    Positives:
      This works with unsorted arrays
*/

function findDupes(a, b) {
  const answer = [];
  const setB = new Set(b);

  for (let i = 0; i < a.length; i++) {
    if (setB.has(a[i])) {
      answer.push(a[i]);
    }
  }

  return answer;
}

console.log(findDupes([1, 2, 3, 5, 6, 7], [0, 3, 6, 7, 9, 20, null])); // [3, 6, 7]
console.log(findDupes([0, 1, 2, 3], [0, 1, 2, 3])); // [0, 1, 2, 3]
console.log(findDupes([0, 1, 2, 3], [0, 1, 2])); // [0, 1, 2]
console.log(findDupes([], [0, 1, 2, 3])); // []
console.log(findDupes([0, 1, 2, 3], [])); // []
console.log(findDupes([3, 5, 2, 4, 9], [6, 4, 7])); // [4]



