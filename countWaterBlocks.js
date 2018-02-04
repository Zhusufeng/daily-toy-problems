/*
  O: Number (of water blocks)
  I: Array of Numbers
  C: 
    Time:
    Space:
  E:
    [5, 2, 3, 2, 1, 3] => 4
    #
    #
    # - # - - #
    # # # # - #
    # # # # # #
    -----------------------------------------
    
    [4, 4, 4, 4] => 0
    [4, 4, 4, 3] => 0
    [4, 3, 2, 1] => 0
    [4, 2, 1, 1] => 0
    [3, 4, 4, 3] => 0
    [1, 4, 4, 1] => 0
    
    1stHighPt
    2ndHighPt
    If there is no 2ndHighPt
      There is 0 water (it all flows down)
    -----------------------------------------
    
    [4, 4, 3, 4] => 1 
      1stHighPt @ 1 = 4
      2ndHighPt @ 3 = 4
      
      
      
    [4, 3, 3, 4] => 2
      1stHighPt @ 0 = 4
      2ndHighPt @ 3 = 4
      
      Index 0: 0 water
      Index 1: 1 water  
      Index 2: 1 water
      Index 3: 0 water
      
      Find the lower of the 2 high points
      Iterate through the array that were inbetween the high points
        Subtract arr[lower] - arr[i]
        Add the difference to waterCount
      
    [4, 3, 2, 4] => 3
      1stHighPt @ 0 = 4
      2ndHighPt @ 3 = 4
      
    [4, 3, 1, 4] => 4
      1stHighPt @ 0 = 4
      2ndHighPt @ 3 = 4
      
    [4, 1, 1, 4] => 6
      1stHighPt @ 0 = 4
      2ndHighPt @ 3 = 4    
    
    -----------------------------------------
  
  General Plan
    Create waterCount, set to 0
    
    Loop through array
      Find 1stHighPt
      Find 2ndHighPt
        If there is no 2ndHighPt
          There is 0 water (it all flows down)
        Find the lower of the 2 high points
        Iterate through the array that were inbetween the high points
          Subtract arr[lower] - arr[i]
          Add the difference to waterCount
      Set 1stHighPt equal to 2ndHighPt
      Set 2ndHighPt to null
      Repeat

*/

var waterBlocks = function (blocks) {
  // TODO: Implement
};