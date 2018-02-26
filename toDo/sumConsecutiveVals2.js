/*
##### Challenge 2

Given an array and a starting edge and an ending edge sum consecutive like numbers, if there are numbers that are also like prior to the starting edge go back and add those in as well (given [1,1,1,2,2,2] and a starting edge with index 1 and an ending edge with index 4 return [3,6]


       S=2         E=6
       |           |
[2, 1, 1, 1, 4, 3, 6, 6, 1] => [2, 3, 4, 3, 12, 1]


Start / End = Edge
*/

/*
  Input & Output
  const arr1 = [1,1,1,2,2,2];
  const start = 1;
  const end = 4;
  const output1 = [3, 6];

*/