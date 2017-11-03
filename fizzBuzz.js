/*
Write a program that outputs the string representation of numbers from 1 to n.

But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.

Example:

n = 15,

Return:
[
    "1",
    "2",
    "Fizz",
    "4",
    "Buzz",
    "Fizz",
    "7",
    "8",
    "Fizz",
    "Buzz",
    "11",
    "Fizz",
    "13",
    "14",
    "FizzBuzz"
]
*/

/*
O: Array of strings
I: Number
C:
  Time: Linear
  Space: Linear
E:
  What if n is 0
    Return empty array
  What if n is negative?
    Return empty array
  What if n is not a whole number?
    Return up to the nearest whole number

  General Plan
  -------------
    Create an answer which is an array to hold all strings
    Create a counter with value of 0
    While counter is not n
      If 15 mod n is 0
        Push "FizzBuzz"
      Else if 3 mod n is 0
        Push "Fizz"
      Else if 5 mod n is 0
        Push "Buzz"
      Else
        Push counter
      Increment counter
    Return answer

*/