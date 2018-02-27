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
    Should not use same movie twice! (Should not make users see same movie in a row)

  Steps
    Given time as 240 and movies as [100, 140, 120, 180]
    Movies is a set now
    i = 0 240 - 100 = 140, true

    Given time as 200 and movies as [100, 130, 120, 180]
    Movies is a set now
    i = 0 200 - 100 = 100
    If diff is not the same as curr el return true, otherwise continue
    Return false

  Skeleton
    const findTwoMovies = (time, movies) => {
      let movieSet = new Set(movies);

      // Iterate thru movieSet
        let diff = time - item
        // Check that movieSet has diff
          // If diff eqls item continue
          // Else return true
      return false;
    };
*/

const findTwoMovies = (time, movies) => {
  let movieSet = new Set(movies);

  for (let item of movieSet) {
    let diff = time - item;
    if (movieSet.has(diff)) {
      if (diff === item) {
        continue;
      } else {
        return true;
      }
    }   
  }

  return false;
};

console.assert(findTwoMovies(240, [100, 140, 120, 180]) === true, 'Given 240, [100, 140, 120, 180], it should return true but got false');
console.assert(findTwoMovies(240, [100, 130, 120, 180]) === false, 'Given 240, [100, 130, 120, 180], it should return false but got true');