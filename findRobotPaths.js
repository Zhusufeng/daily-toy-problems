/*
  A robot is on a grid starting in the top left corner, 
  and it needs to get to the bottom right corner.
  The robot can move up, down, left, or right one square at a time.
  It cannot visit the same spot more than once.
  Find out how many unique paths the robot can take to get 
  to the bottom right corner.
 */

 /*
12.23.17
O: Number
I: Number (grid size)
C: 
  Space: Constant
  Time: Linear
E:
 n = 1, 1
 n = 2, 2
 n = 3, 12

 if n is 3
 [
  [f, f, f],
  [f, f, f],
  [f, f, f]
 ]

General Plan
  Create the grid based off of n
  Create counter which is 0
  
  Create subroutine to countPaths
    If coordinates equal n - 1, n - 1, we made it to the bottom
      Increment counter
    If coordinates have been visited before
      Return
    Toggle coordinates as visited
    


  Call subroutine countPaths with i & j (which are locations in the matrix)
  Return counter
  
*/

var makeGrid = function(n) {
  var grid = [];
  for (var i = 0; i < n; i++) {
    grid.push([]);
    for (var j = 0; j < n; j++) {
      grid[i].push(false);
    }
  }
  grid.toggleVisit = function(i, j) {
    this[i][j] = !this[i][j];
  };
  grid.hasBeenVisited = function(i, j) {
    return !!this[i][j];
  };
  return grid;
};

