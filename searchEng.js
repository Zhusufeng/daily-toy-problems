/* 
Build a mini search engine by writing a function that takes four parameters: (1) a string, (2) a word to search for, (3) a search method and (possibly) (4) a new word.

The string can contain any characters (alphanumeric and/or symbols).
The words (both searchWord and newWord) can contain only letters and/or numbers
The search method can only take two numbers: 
  1 - for searching for a specific word only
  2 - for searching and replacing each occurrence of a specific word. 
The default search method is 1.

The function should return an object with two properties called matches and newString.

If the search method is set to 1, the matches property should be equal to the number of matches and the newString property should be equal to the empty string. If the search method is 2, the matches property should be the number of replacements and the newString should be the new string where all the matches are replaced with the new word.

The function should be case sensitive. If invalid input is entered, return 'No valid input'.

Let's see some examples:

searchEng('OMG, today is Monday!','day', 1); // should return {matches: 0, newString: ''}
searchEng('Today is my day!','day', 2, 'birthday'); // should return {matches: 1, newString: 'Today is my birthday!'}
searchEng('Today is my day.','day.', 2, 'birthday!'); // should return 'No valid input'
*/

/*
  Constraints
    1. Input string can contain alphanumeric + symbol characters
    2. Search word can only be letters and/or numbers
    3. New word can only be letters and/or numbers
    4. Search method can only take 1 number - either 1 or 2, nothing else

  input: 'tom Tom Tomm Tommy', 'tom', 1
  output: matches: 1

  input: 'tom Tom Tomm Tommy', 'tom', 2, 'jim'
  output: matches: 1, newString: 'jim Tom Tomm Tommy'

  input: 'tom Tom Tomm Tommy', 'thom', 2, 'jim'
  output: matches: 0, newString: ''

  input: 'tom Tom Tomm Tommy!', 'Tommy!', 1
  output: No valid input

  Strategy
    Check that search method, search word & new word is legit else return 'No valid input'
    Split input string to array on spaces. Iterate through it checking if array[i] equals search word. If it does, increment matches by 1. If search method is 2, update array[i] to equal new word
    
  Big-O
    Linear- visit each word in the array

  Transformative Steps
    Given input: 'tom Tom Tomm Tommy', 'tom', 2, 'jim'
    Split to ['tom', 'Tom', 'Tomm', 'Tommy']
    Iterate through array
      If array[i] === searchWord ('tom' === 'tom')
        Increase match by 1
        If searchMethod === 2
          array[i] = newWord (array[i] = 'jim')
    Set newString equal to array.join
    return {match, newString}
*/

function searchEng(string, searchWord, searchMethod, newWord) {
  if (searchMethod > 2 || searchMethod < 1) return 'No valid input';
  if (!isValidWord(searchWord)) return 'No valid input';
  if (newWord && !isValidWord(newWord)) return 'No valid input';

  let match = 0;
  let newString = '';

  const arr = string.split(' ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchWord) {
      match += 1;
      if (searchMethod === 2) {
        arr[i] = newWord;
      }
    }
  }
  if (searchMethod === 2) newString = arr.join(' ');
  return {match, newString};
}

function isValidWord(word) {
  for (let i = 0; i < word.length; i++) {
    if (word.charCodeAt(i) < 48 || (word.charCodeAt(i) > 57 && word.charCodeAt(i) < 65) || (word.charCodeAt(i) > 90 && word.charCodeAt(i) < 97) || word.charCodeAt(i) > 123) {
      return false;
    }
  }
  return true;
}

// Test searchMethod when 1
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 1));
console.log(searchEng('tom Tom Tomm Tommy', 'tom1', 1));

// Test searchMethod when 2
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim'));
console.log(searchEng('tom Tom Tomm Tommy', 'tom1', 2, 'jim'));
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim10'));

// Test searchWord is invalid
console.log(searchEng('tom Tom Tomm Tommy', 'tom.', 2, 'jim'));

// Test newWord is invalid
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim.'));
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim?'));
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim]'));
console.log(searchEng('tom Tom Tomm Tommy', 'tom', 2, 'jim}'));
