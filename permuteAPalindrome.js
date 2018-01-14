/*
  Write a function that will check whether the permutation of an input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

  Example
  madam -> True
  adamm -> True
  junk -> False

  Hint
  The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

/*
  O: Boolean
  I: String
  C:
    Time:
    Space:
  E:
    madam -> True
    adamm -> True
    junk -> False
    ada -> True
    a -> True
    aad -> True

    General Plan
      Idea #1 - Permutation
        Initialize permutation array as empty array

        Create subroutine getPerms, takes in string, word as empty string
          If string is empty
            Push word to permutation array
          Iterate through array
            Call getPerms with string without current index, word + array at index
        
        Call getPerms with string

        Create function checkIfPalindrome, takes in a string
          Iterates over string
            Checks if string at i equals string at length - 1 - i
            If not equal 
              Return false
          Return true

        Iterate through permutation array
          If checkIfPalindrome with current word
            Return true
        
        Return false

      Idea #2 Math
*/

function permuteAPalindrome (input) { 

  return true;
}