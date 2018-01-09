/**
 * Write a function that takes a number as its argument and
 * returns a string that represents that number's simplified fraction.
 *
 * Example: toFraction(0.5) === '1/2'
 *
 * Whole numbers and mixed fractions should be returned as irregular fractions
 *
 * Example: toFraction(4.0) === '4/1'
 *
 * Example: toFraction(3.5) === '7/2'
 *
 */

/*
  O: String
  I: Number
  C: 
    Time:
    Space:
  E:
    0.5 => '1/2'
    4.0 => '4/1'
    3.5 => '7/2'
    4.25 => '17/4'
    0.33 => '1/3'
    0.875 => '7/8'

  General Plan

  Focus on tenths first
  0.1 => 1/10
  0.2 => 2/10 -> 1/5
  0.3 => 3/10
  0.4 => 4/10 -> 2/5
  0.5 => 5/10 -> 1/2

  How do you do it in math?
    0.5 => '1/2'
    5 is numerator
    10 is denominator

  Next hundredths...
  Example:
    0.75
    75 is numerator
    100 is denominator
    Check if numerator & denominator are divisible by same num - up to denom (100)
    1, 2, 3, 4, 5 (both divisible)
    Divide both by 5
    15 is numerator
    20 is denominator
    Check if numerator & denominator are divisible by same num - up to denom (20)
    1, 2, 3, 4, 5 (both divisible)
    Divide both by 5
    3 is numerator
    4 is denominator
    Check if numerator & denominator are divisible by same num - up to denom (4)
    No, so return
    numerator + / + denominator
    3 + / + 4

*/
var toFraction = function(num) {

}