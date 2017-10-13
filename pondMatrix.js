/*
Count how many ponds there are in a given matrix.

Ie. Where 1's are ponds
[[ 0, 1, 1, 0],
 [ 1, 0, 0, 0],
 [ 0, 0, 1, 1],
 [ 1, 0, 0, 1]] => 4
*/

function countPonds(matrix) {

}

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

  Create searchDown, which takes in i, j
    Iterate through matrix
      If matrix[i][j] is equal to 1
        If [i][j] does NOT exist in waterAccountedFor
          Add [i][j] as key to waterAccountedFor, set value to true
        If it is NOT 1
          Break!

  Create searchRight

  Create searchLeft

WALK THROUGH
------------


*/

// Testing