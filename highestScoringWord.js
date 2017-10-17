/*
Given a string of words, you need to find the highest scoring word.
Each letter of a word scores points according to it's position in the alphabet: a = 1, b = 2, c = 3 etc.
You need to return the highest scoring word as a string.
If two words score the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.
*/

/*
O: Word from string
I: String made of words
C:
  Time Complexity: Linear
  Space Complexity: Linear
E:
  INPUT                                        OUTPUT
  ----------------------------------------------------
  'a b c'                                      c
  'man i need a taxi up to ubud'               taxi
  'what time are we climbing up the volcano'   volcano
  'take me to semynak'                         semynak

GENERAL PLAN
-------------
  Create variable let called words that is an empty obj
  Create variable let called strArr that is a split string into array by space
  Iterate through strArr
    Create variable let called points
    Iterate through each char in each word
      Get charCodeAt for each char and add to points
    Add word to words obj with value of points
  Create variable let called highestValue which equals 0
  Create variable let called highestPointWord which equals empty string
  Iterate through words obj
    If value at key is greater than highestValue
      Value equals highestValue
      highestPointWord equals key
  Return highestPointWord

PSEUDOCODE
-----------
  let words = {};
  let strArr = string.split(' ');
  For loop through strArr incrementing i by 1
    let points = 0;
    For loop through word incrementing by 1
      points += word.charCodeAt(j)
    words[word] = points
  let highestValue = 0
  let highestPointWord = ''
  For in loop through words
    If value at key is greater than highestValue
      highestValue = words[key]
      highestPointWord = key
  Return highestPointWord

*/

function high(x){
  let words = {};
  let strArr = x.split(' ');
  let highestValue = 0;
  let highestPointWord = '';

  for (let i = 0; i < strArr.length; i++) {
    let points = 0;

    for (let j = 0; j < strArr[i].length; j++) {
      points += strArr[i].charCodeAt(j) - 96;
    }
    words[strArr[i]] = points;
  }

  for (let key in words) {
    if (words[key] > highestValue) {
      highestValue = words[key];
      highestPointWord = key;
    }
  }

  return highestPointWord;
}

// Test
console.log(high('a b c'));  // c
console.log(high('man i need a taxi up to ubud'));  // taxi
console.log(high('what time are we climbing up the volcano'));  // volcano
console.log(high('take me to semynak'));  // semynak