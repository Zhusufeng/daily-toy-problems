/*
  A robot is on a grid starting in the top left corner, 
  and it needs to get to the bottom right corner.
  The robot can move up, down, left, or right one square at a time.
  It cannot visit the same spot more than once.
  Find out how many unique paths the robot can take to get 
  to the bottom right corner.
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