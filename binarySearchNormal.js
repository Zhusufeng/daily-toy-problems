/* Binary Search Normal */
/*
  Given a sorted array and a number
  Search for the index of the number
  in the sorted array
  If the number is not in the sorted
  array, return -1

  For this version, do not use recursion
  Use a loop
*/

/*
O: Number
I: Sorted array, Number
C: 
  Time: Logarithmic
  Space: Constant
E:
  [0, 3, 5, 7, 9], 7 => 3
  [5, 10, 15, 20], 10 => 2
  [0, 1, 2, 3, 4], 5 => -1
  [0], 0 => 0
  [], 1 => -1
  [0], 5 => -1

General Plan
  Declare low as 0
  Declare high as sortedArray.length - 1
  Declare mid as middle of sortedArray

  While low is less than or equal to high
    Case 1: If mid equals number
      You found it! Return mid
    Case 2: If mid is less than number
      Look at the left side (mid to high). To do that low equals mid + 1
    Case 3: If mid is greater than number
      Look at the right side (low to mid). To do that high equals mid - 1

  Return -1 since number was not found
*/

function binarySearch (arr, n) {
  let low = 0;
  let high = arr.length;
  let mid = 0;

  while (low <= high) {
    // Get mid for each new low & high
    mid = Math.floor((low + high) / 2);
    // If mid equals the number
    if (arr[mid] === n) {
      return mid;
    } 
    else if (arr[mid] < n) {
      // Look at left side 
      low = mid + 1;
    } else {
      // Look at the right side
      high = mid - 1;
    }
  }

  return -1;
}

console.log(binarySearch([0, 3, 5, 7, 9], 7)); // 3
console.log(binarySearch([5, 10, 15, 20], 10)); // 1
console.log(binarySearch([0, 1, 2, 3, 4], 5)); // -1
console.log(binarySearch([0], 0)); // 0
console.log(binarySearch([], 1)); // -1
console.log(binarySearch([0], 5)); // -1

