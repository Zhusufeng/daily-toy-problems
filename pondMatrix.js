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


BRAINSTORM
----------
Think of N-Queens algorithm. Toggle on/off to show if water element has been accounted for


Idea #1
Make empty object called waterAccountedFor
Use waterAccountFor when you visit a water square and count it towards pond count

Iterate through matrix
  Go to each element (which is an array)
  Iterate through each element in that array
    If element is 0, ignore?
    If element is 1,
      Add matrix[i][j] as key with the



PSEUDOCODE
----------


WALK THROUGH
------------


*/

// Testing