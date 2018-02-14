/*
  Rotate a matrix 90 degrees
*/

/*
  O: Matrix
  I: Matrix
  C: 
    Time:
    Space:
  E:

  var matrix = [
    [1,2,3,4],
    [5,6,7,8],
    [9, 10,11,12],
    [13,14,15,16]
  ];

  var matrix = [ 
   [13,9,5,1],
   [14,10,6,2],
   [15,11,7,3],
   [16,12,8,4]
  ]

  m rows     0, 1, 2, 3 
  n columns  0, 1, 2, 3 (indexes)

  Look at first row -> rotated first row
  before -> rotated
  [m][n] -> [b][c]
  [0][0] -> [0][3]   m + 0, n + 3 
  [0][1] -> [1][3]   m + 1, n + 2
  [0][2] -> [2][3]   m + 2, n + 1
  [0][3] -> [3][3]   m + 3, n + 0

  [1][0] -> [0][2]   m - 1, n + 2
  [1][1] -> [1][2]   m + 0, n + 1
  [1][2] -> [2][2]   m + 1, n + 0
  [1][3] -> [3][2]   m + 2, n - 1

  [2][0] -> [0][1]   m - 2, n + 1
  [2][1] -> [1][1]   m - 1, n + 0
  [2][2] -> [2][1]   m + 0, n - 1
  [2][3] -> [3][1]   m - 1, n - 2

  [3][0] -> [0][0]   m - 3, n + 0
  [3][1] -> [1][0]   m - 2, n - 1
  [3][2] -> [2][0]   m - 1, n - 2
  [3][3] -> [3][0]   m + 0, n - 3

  pattern:
    len = matrix.length - 1
    b: will be n index  
    c: if m was 0, c will be matrix.length - 1 and decrement
       if m was 1, c will be matrix.length - 1 - 1
       if m was 2, c will be matrix.length - 1 - 1 - 1
       if m was 3, c will be matrix.length - 1 - 1 - 1 - 1
       aka m starts at 0 with len and decrement len by 1
    Now get matrix[b][c] = rotatedMatrix[b][c]
    
  strategy
    Make a new array called rotatedMatrix. Iterate thru matrix based on using indexes m and n. Return rotatedMatrix

  big-o
    time: Linear
    space: Constant (in relation to the original input)

  steps

  skeleton


*/

var rotateMatrix = function(matrix) {
  
};
