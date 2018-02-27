/*
  Prompt: https://www.interviewcake.com/question/javascript/inflight-entertainment
*/

/*
  Inputs & Outputs
    const time1 = 240;
    const movies1 = [100, 140, 120, 180];
    const output1 = true;

    const time2 = 240;
    const movies2 = [100, 130, 120, 180];
    const output2 = false;

    const time2 = 200;
    const movies2 = [100, 130, 120, 180];
    const output2 = false;

  Strategy
    Idea #1
      Iterate thru movies and then iterate again thru movies to see if you found the complement

    Idea #2
      Sort the array. Iterate thru movies and then binary search for complement

    Idea #3
      Create set from movies. Iterate thru set and use has to seek complement

  Big-O
    Time: O(2n) - Linear
    Space: O(1) additional

  Constraints
    Should not use same movie twice!

  Steps

  Skeleton
*/