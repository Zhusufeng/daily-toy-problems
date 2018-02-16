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
    Now get matrix[m][n] = rotatedMatrix[b][c]
    
  strategy
    Make a new array called rotatedMatrix. Iterate thru matrix based on using indexes m and n. Return rotatedMatrix

  big-o
    time: Linear
    space: Constant (in relation to the original input)

  steps
    Given [
      [1, 2, 3],
      [4, 5, 6].
      [7, 8, 9]
    ]
    len = matrix.length - 1 = 2
    m = 0, n = 0, b = n, c = len, matrix[m][n] aka 1 = rotatedMatrix[0][2]
    m = 0, n = 1, b = n, c = len, matrix[m][n] aka 2 = rotatedMatrix[1][2]
    m = 0, n = 2, b = n, c = len, matrix[m][n] aka 3 = rotatedMatrix[2][2]
    len = len - 1 = 1
    m = 1, n = 0, b = n, c = len, matrix[m][n] aka 4 = rotatedMatrix[0][1]
    m = 1, n = 1, b = n, c = len, matrix[m][n] aka 5 = rotatedMatrix[1][1]
    m = 1, n = 2, b = n, c = len, matrix[m][n] aka 6 = rotatedMatrix[2][1]
    len = len - 1 = 0
    m = 2, n = 0, b = n, c = len, matrix[m][n] aka 7 = rotatedMatrix[0][0]
    m = 2, n = 1, b = n, c = len, matrix[m][n] aka 8 = rotatedMatrix[1][0]
    m = 2, n = 2, b = n, c = len, matrix[m][n] aka 9 = rotatedMatrix[2][0]

    Return
    [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ]
        

  skeleton
  const rotateMatrix = function(matrix) {
    const len = matrix.length - 1;
    let c = len;
    const rotateMatrix = [];
    // Iterate over matrix via index m
      // Iterate over matrix[m] via index n
        // Set b = n
        // Set matrix[m][n] = rotatedMatrix[b][c] 
      // Decrement c by 1
    return rotatedMatrix;
  };

*/

const rotateMatrix = matrix => {
  const rotatedMatrix = [];

  for (let m = 0, c = matrix.length - 1; m < matrix.length; m++, c--) {
    for (let n = 0; n < matrix[m].length; n++) {
      if (!rotatedMatrix[n]) {
        rotatedMatrix.push([]);
      }
      rotatedMatrix[n][c] = matrix[m][n];
    }
  }

  return rotatedMatrix;  
};


const matrix1 = [
  [1,2,3,4],
  [5,6,7,8],
  [9, 10,11,12],
  [13,14,15,16]
];
console.log(rotateMatrix(matrix1));
  // var matrix = [ 
  //  [13,9,5,1],
  //  [14,10,6,2],
  //  [15,11,7,3],
  //  [16,12,8,4]
  // ]