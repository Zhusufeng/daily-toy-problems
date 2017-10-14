/*
Count how many ponds there are in a given matrix.

Ie. Where 1's are ponds
[[ 0, 1, 1, 0],
 [ 1, 0, 0, 0],
 [ 0, 0, 1, 1],
 [ 1, 0, 0, 1]] => 4
*/

/* --------------------------------------------------------- */

/*
O: Number
I: Matrix of 0s and 1s
C:
  Time: Linear
  Space: Constant? / Linear
E:
  INPUT                         OUTPUT
  ------------------------------------
  []                              0
  [[ 0, 0, 0, 0]]                 0
  [[ 0, 1, 1, 0]]                 1
  [[0, 1],
   [0, 1]]                        1
  [[1, 0],
   [0, 1]]                        2
  [[1, 1, 0],
   [0, 1, 0],
   [1, 1, 1]]                     1
  [[ 1, 1, 1, 1]]                 1
  [[ 1, 0, 1, 0]]                 2
  [[ 0, 1, 0, 0],
   [ 0, 1, 0, 0],
   [ 0, 1, 0, 0],
   [ 0, 1, 0, 0]]                 1
  [[ 0, 1, 0, 0],
   [ 0, 1, 0, 0],
   [ 0, 1, 1, 1],
   [ 0, 1, 0, 0]]                 1
  [[ 0, 1, 1, 0],
   [ 1, 0, 0, 0],
   [ 0, 0, 1, 1],
   [ 1, 0, 0, 1]]                 4
  [[ 0, 1, 1, 0, 0],
   [ 1, 0, 0, 0, 0],
   [ 0, 0, 1, 1, 0],
   [ 1, 0, 0, 1, 0]]              4
  [[ 0, 0, 0, 1, 0],
   [ 0, 0, 0, 1, 0],
   [ 1, 1, 1, 1, 0]
   [ 0, 0, 0, 1, 0],]              1


BRAINSTORM
----------
Think of N-Queens algorithm. Toggle on/off to show if water element has been accounted for


Idea #1
Make number called totalPonds and set to 0

Make empty object called waterAccountedFor
Use waterAccountFor when you visit a water square and count it towards pond count

Iterate through matrix
  Go to each element (which is an array)
  Iterate through each element in that array
    If element is 0, ignore?
    If element is 1,
      Check if [i][j] DOES NOT exist in waterAccountedFor
        If it does not, add [i][j] as key with value of true in waterAccountedFor
        Run searchDown

        searchDown
        Now iterate through the matrix/visit the next i at the same j and see if it is 1
          Check if [i+1][j] DOES NOT exist in waterAccountedFor
           If it does not, add [i+1][j] as key with value of true
           If it is NOT 1
             Break!
          Run searchLeft
          Run searchRight

        searchRight
        Now iterate through the array/visit the next j and see if it is 1
          Check if [i+1][j] DOES NOT exist in waterAccountedFor
            If it does not, add [i][j+1] as key with value of true
            If it is NOT 1
              Break!
          Run searchDown


        searchLeft
        Now iterate through the array/visit the j before and see if it is 1
          Check if [i+1][j] DOES NOT exist in waterAccountedFor
            If it does not, add [i][j+1] as key with value of true
            If it is NOT 1
              Break!
            Run searchDown

        Increment totalPonds

PSEUDOCODE
----------

Create findPonds, which takes in matrix
  Create totalPonds and set to 0
  Create waterAccountedFor and set to empty object

  Iterate through matrix
    Iterate through each array
      If element is equal to 1
        If [i][j] does NOT exist in waterAccountedFor
          Add [i][j] as key to waterAccountedFor, set value to true
          Call searchDown, pass in i, j
          Call searchRight, pass in i, j
        Increment totalPonds

  Create searchDown, which takes in i, j
    Iterate through matrix
      If matrix[y][j] is equal to 1
        If [y][j] does NOT exist in waterAccountedFor
          Add [y][j] as key to waterAccountedFor, set value to true
          Call searchRight, pass in y, j
          Call searchLeft, pass in y, j
        If it is NOT 1
          Break!

  Create searchRight, which takes in i, j
    Iterate through array (incrementing x)
      If matrix[i][x] is equal to 1
        If [i][x] does NOT exist in waterAccountedFor
          Add [i][x] as key to waterAccountedFor, set value to true
          Call searchDown, pass in i, x
        If it is NOT 1
          Break!

  Create searchLeft, which takes in i, j
    Iterate through array (decrementing x)
      If matrix[i][x] is equal to 1
        If [i][x] does NOT exist in waterAccountedFor
          Add [i][x] as key to waterAccountedFor, set value to true
          Call searchDown, pass in i, x
        If it is NOT 1
          Break!

  Return totalPonds

*/

function countPonds(matrix) {
  let totalPonds = 0;
  let waterAccountedFor = {};

  const searchDown = function(i, j) {
    for (let y = i + 1; y < matrix.length; y++) {
      if (matrix[y][j] === 1) {
        let key = y + ', ' + j;
        if (!waterAccountedFor[key]) {
          waterAccountedFor[key] = true;
          searchRight(y, j);
          searchLeft(y, j);
        }
      } else {
        break;
      }
    }
  };

  const searchRight = function(i, j) {
    for (let x = j + 1; x < matrix[i].length; x++) {
      if (matrix[i][x] === 1) {
        let key = i + ', ' + x;
        if (!waterAccountedFor[key]) {
          waterAccountedFor[key] = true;
          searchDown(i, x);
        } else {
          break;
        }
      }
    }
  }

  const searchLeft = function(i, j) {
    for (let x = j - 1; x >= 0; x--) {
      if (matrix[i][x] === 1) {
        let key = i + ', ' + x;
        if (!waterAccountedFor[key]) {
          waterAccountedFor[key] = true;
          searchDown(i, x);
        } else {
          break;
        }
      }
    }
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        let key = i + ', ' + j;
        if (!waterAccountedFor[key]) {
          waterAccountedFor[key] = true;
          searchDown(i, j);
          searchRight(i, j);
          totalPonds++;
        }
      }
    }
  }

  return totalPonds;
}

/*

WALK THROUGH
------------
  INPUT                         OUTPUT
  ------------------------------------
  [[1, 1, 0],
   [0, 1, 0],
   [1, 1, 1]]                     1

*/

// Testing