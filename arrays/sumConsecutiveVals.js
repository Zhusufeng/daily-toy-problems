/*
  Prompt: Verbal - John's Challenge 1
*/

const sumConsecutiveValues = arr => {
  const results = [];
  let lastVal = null;

  for (let i = 0; i < arr.length; i++) {
    if (lastVal !== arr[i]) {
      results.push(arr[i]);
      lastVal = arr[i];
    } else {
      results.push(results.pop() + arr[i]);
    }
  }

  return results;
};

console.log(sumConsecutiveValues([1, 2, 2, 2, 5, 8])); // [1, 6, 5, 8]
console.log(sumConsecutiveValues([1, 2, 2, 2, 5, 2, 8])); // [1, 6, 5, 2, 8]
console.log(sumConsecutiveValues([1, 1, 1, 2, 2, 2, 3, 4])); // [3, 6, 3, 4]


/*
  Input & Output
    const input1 = [1, 2, 2, 2, 5, 8];
    const output1 = [1, 6, 5, 8];

    const input2 = [1, 2, 2, 2, 5, 2, 8];
    const output2 = [1, 6, 5, 2, 8];

    const input3 = [1, 1, 1, 2, 2, 2, 3, 4]
    const output3 = [3, 6, 3, 4]

  Strategy
    Iterate thru input, if el does not eql lastVal, push el to results. Otherwise, pop off results and push it plus the el into results

  Big-O
    Time: Linear - O(n)
    Space: Constant - O(1) additional

  Constraints
    Input will never be empty
    Input will contain integers

  Steps
    Given [1, 2, 2, 2, 5, 2, 8]
    lastVal = null

    i = 0, input[0] = 1, 1 !== null
    lastVal = 1
    results = [1]

    i = 1, input[1] = 2, 2 !== 1
    lastVal = 2
    results = [1, 2]

    i = 2, input[2] = 2, 2 === 2
    updatedVal = results.pop() = 2
    results.push(updatedVal + input[i])
    results = [1, 4]

    i = 3, input[3] = 2, 2 === 2
    updatedVal = results.pop() = 4
    results.push(updatedVal + input[i])
    results = [1, 6]

    i = 4, input[4] = 5, 5 !== 2
    lastVal = 5
    results = [1, 6, 5]

    i = 5, input[5] = 2, 2 !== 5
    lastVal = 2
    results = [1, 6, 5, 2]

    i = 6, input[6] = 8, 8 !== 2
    lastVal = 8
    results = [1, 6, 5, 2, 8]

  Skeleton
  const sumConsecutiveValues = arr = {
    const results = [];
    let lastVal = null;
    // Iterate thru arr
      // If lastVal doesn't eql arr[i], push it to results, update lastVal to arr[i]
      // Else pop from results, push that val + arr[i] to results
    return results;
  };
*/