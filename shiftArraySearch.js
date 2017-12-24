/*
A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

Explain your solution and analyze its time and space complexities.

Example:

input:  shiftArr = [9, 12, 17, 2, 4, 5], num = 2 # shiftArr is the
                                                 # outcome of shifting
                                                 # [2, 4, 5, 9, 12, 17]
                                                 # three times to the left

output: 3 # since it’s the index of 2 in arr
Constraints:

[time limit] 5000ms
[input] array.integer arr
[input] integer num
[output] integer
*/

/*
O: Number
I: Array of integers, Integer number
C: 
  Time: Linear
  Space: Constant
E: 
  [3, 4, 5, 1, 2], 1 => 3
  [9, 12, 17, 2, 4, 5], 2 => 3
  [0, 1, 2, 3, 4, 5], 4 => 4
  [0, 1], 1 => 1
  [1, 22, 33, 44, 55], 66 => -1
  Maybe...
  [11, 22, 33], 11 => 0
  [11, 22, 33], 33 => 2

General Plan
  Iterate through shiftArr
    If shiftArr at current index equals num
      Return current index
  Return -1
*/

// function shiftedArrSearch(shiftArr, num) {
//   for (let i = 0; i < shiftArr.length; i++) {
//     if (shiftArr[i] === num) {
//       return i;
//     }
//   }
//   return -1
// }

// console.log(shiftedArrSearch([3, 4, 5, 1, 2], 1)); // 3
// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2)); // 3
// console.log(shiftedArrSearch([0, 1, 2, 3, 4, 5], 4)); // 
// console.log(shiftedArrSearch([0, 1], 1)); // 1
// console.log(shiftedArrSearch([1, 22, 33, 44, 55], 66)); // -1

// console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 4)); // 4


// Time Complexity of above code: 
// Linear as the worst case is that it goes through the whole data set

// Space Complexity of above code:
// Constant as it returns only 1 value from memory, which is i or -1

/*
Part 2: Now each array we pass in as 'shiftArr' was sorted. How can you improve the time complexity of the search?
*/

/*
We can use an augmented binary search

General Plan:
  shiftedArraySearch
    Set point equal to findPoint with shiftedArr

    If pivot is 0 or num is less than shiftArr[0]
      Look on the left (pivot to end)
      Return binarySearch with shiftedArr, point, shiftedArr.length - 1, num

    Look on the right (begin to pivot - 1)
    Return binarySearch with shiftedArr, 0, point - 1, num

  Find original end point
    Set begin to 0
    Set end to arr.length - 1
    Set mid to 0
    While begin is less than or equal to end
      Set mid to begin + (end - begin)/2 (underestimate with Math.floor)
      If mid equals 0 or mid is less than mid -1
        Return mid
      Else if mid is bigger than 0
        Look at the left: Set begin to mid + 1
      Else
        Look at the right: Set end to mid -1

  Binary Search
    Set mid to 0
    While begin is less than or equal to end
    If num equals shiftArr[begin]
      Return begin
    Iterate from begin to end
      Set mid to begin + (end - begin)/2 (underestimate with Math.floor)
      If shiftArr[mid] is less than num 
        Set begin to mid + 1
      Else if shiftArr[mid] equals num
        Return mid
      Else 
        Set end to mid - 1
*/

// function shiftedArrSearch(shiftArr, num) {
//   // Find where array shifted
//   let pivot = findPoint(shiftArr);

//   if (pivot === 0 || num < shiftArr[0]) {
//     // Look to the left
//     return binarySearch(shiftArr, pivot, shiftArr.length - 1, num);
//   }

//   // Look to the right
//   return binarySearch(shiftArr, 0, pivot - 1, num);
// }

// function findPoint(arr) {
//   let begin = 0;
//   let end = arr.length - 1;
//   let mid = 0;

//   while (begin <= end) {
//     mid = Math.floor((end + begin) / 2);
//     if (mid === 0 || arr[mid] < arr[mid - 1]) {
//       // You found the pivot point
//       return mid;
//     } else if (arr[mid] > arr[0]) {
//       // Look at the left
//       begin = mid + 1;
//     } else {
//       // Look at the right
//       end = mid - 1;
//     }
//   }
// }

// function binarySearch(arr, begin, end, num) {
//   let mid = 0;

//   while (begin <= end) {
//     mid = begin + Math.floor((end - begin) / 2);

//     if (arr[mid] === num) {
//       return mid;
//     } else if (arr[mid] < num) {
//       // Look to the left
//       begin = mid + 1;
//     } else {
//       // Look to the right
//       end = mid - 1;
//     }
//   }

//   return -1;
// }

/*
12.10.17
General Plan
  Get pivot index
  If array at pivot is greater than num and less than array at length -1
    Look right using binary search
  Look left using binary search

  getPivotIndex
    Takes in array
    Loops through array and looks for pivot point where mid is higher than end
    Returns pivot

  binarySearch
    Takes in array, low index, high index, and number
    Loops through array based on low and high til mid is number
    Returns index or -1
*/

// function shiftedArrSearch(arr, num) {
//   const pivot = getPivotIndex(arr);
//   // console.log(pivot);
//   if (pivot === 0 || num < arr[0]) {
//     // Look right
//     return binarySearch(arr, pivot, arr.length - 1, num);
//   }
//   // Look left
//   return binarySearch(arr, 0, pivot - 1, num);
// }

// function getPivotIndex(arr) {
//   let low = 0;
//   let high = arr.length - 1;
//   let mid = 0;

//   while (low <= high) {
//     mid = Math.floor((low + high) / 2);
//     if (mid === 0 || arr[mid] < arr[mid - 1]) {
//       return mid;
//     } else if (arr[mid] > arr[0]) {
//       // Look at the right
//       low = mid + 1;
//     } else {
//       // Look at the left
//       high = mid - 1;
//     }
//   }
// }

// function binarySearch(arr, low, high, num) {
//   while (low <= high) {
//     let mid = Math.floor((high + low) / 2);
//     if (arr[mid] === num) {
//       return mid;
//     } else if (arr[mid] < num) {
//       // Look to the right
//       low = mid + 1;
//     } else {
//       // Look to the left
//       high = mid - 1;
//     }
//   }
//   return -1;
// }

// 12.23.17 Shifted Array Search
/*
O: Number (index of num)
I: Array (numbers), Number
C:
  Time: Logarithmic
  Space:
E:
  [2, 3, 0, 1], 1 => 3
  [2, 3, 0, 1], 0 => 2
  [2, 3, 0, 1], 2 => 0
  [2, 3, 0, 1], 3 => 1
  [2, 3, 0, 1], 4 => -1
  [5, 6, 0, 1], 4 => -1
  [5, 6, 0, 1, 2], 4 => -1
  [5, 6, 0, 1, 2, 3, 4], 4 => 6
  [5, 6, 7, 8, 9, 0, 1], 4 => -1
  [5, 6, 0], 6 => 1
  [], 3 => -1
  Not an array, 4 => -1

General Plan
  Find where the end of the array *was*
  Then you have 2 halves
  Left half will be larger 
  Right half will be smaller
  If num is bigger than shiftedArr at 0, start on left using binary search
  Otherwise, look in the right half using binary search

  Find where end of array was
    Have high, set to end of array 
    Have low, set to begin of array
    Have mid

    while low is less than or equal to high
      Set mid to the sum of high plus low divided in half
      If array at mid is 0 or array at mid is less than mid - 1
        Return mid
      If array at mid is greater than array at 0 (if midpt is greater than 1st el in arr)
        Set low to mid + 1
      Else (if midpt is less than 1st el in arr)
        Move high to to mid - 1 

  Binary Search
    Create high equal to high
    Create low equal to low
    Create mid

    While low is less than high
      If array at mid equals num
        Return mid
      Else if array at mid is less than num [1, 2, 3, 4, 5], 4
        Look to the right -> Low is mid + 1
      Else if array at mid is greater than num [1, 2, 3, 4, 5], 2
        Look to the left -> High is mid - 1
    Return -1
*/
function shiftedArrSearch(shiftArr, num) {
  let startPt = findStartPoint(shiftArr);

  if (num > shiftArr[0]) { // Look at the left 0 to startPt - 1
    return binarySearch(shiftArr, 0, startPt - 1, num);
  }
  return binarySearch(shiftArr, startPt, shiftArr.length - 1, num);
}

function findStartPoint(arr) {
  let high = arr.length - 1;
  let low = 0;
  let mid;

  while(low <= high) {
    mid = Math.floor((high + low) / 2);
    if (mid === 0 || arr[mid] < arr[mid - 1]) {
      return mid;
    } else if (arr[mid] > arr[0]) { // if midpt is greater than 1st el in arr
      low = mid + 1;
    } else { // midpt is less than 1st el in arr
      high = mid - 1;
    }
  }
  return 0;
}

function binarySearch(arr, low, high, num) {

}

// Tests
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 9)); // 0
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 12)); // 1
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 17)); // 2
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 2)); // 3
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 4)); // 4
console.log(shiftedArrSearch([9, 12, 17, 2, 4, 5], 5)); // 5
console.log(shiftedArrSearch([1, 22, 33, 44, 0], 66)); // -1
