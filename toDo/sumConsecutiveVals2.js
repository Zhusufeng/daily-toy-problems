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
        s=1         e=4   
         |           |
    [1,  1,  1,  2,  2,  2]

    Steps
      With start, go backwards starting at start - 1 til 0 checking if same as arr[start]
        Whichever is the first most index before a diff number, save as startBegin
      Then go start + 1 checking if same as arr[start]
        Whichever is the last index, save as startEnd
      totalTimes = startEnd - startBegin
      Splice arr from startBegin, delete totalTimes, add totalTimes * arr[start]
      Do the same with the end edge
*/