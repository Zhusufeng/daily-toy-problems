/*
Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

#Examples:

list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
list_squared(42, 250) --> [[42, 2500], [246, 84100]]
*/

/*
O: Array of tuples
I: Numbers
C:
E: 

Part 1: Find Divisors
-------------------------
Make array to hold divisors
Make a loop where i = 1 and it goes til i = sqrt of n
If n is divisible by i, 
  Add it to the divisors array

Part 2: Square Divisors
-------------------------
When added to the divisors array, square it!

Part 3: Sum the squared divisors
-------------------------
Use reduce to sum the divisors array

Part 4: Test if the sum's square root is a whole number
-------------------------
Get square root of sum (use math.sqrt)


Part 5: Add that number to answer array
-------------------------
If sqrt mod 1 is 0
  it is a whole number
  Push n and the sum to the answer array
  
Else it is not a whole number

Part 6: Optimize
-------------------------

*/

function listSquared(m, n) {
    // your code
}
