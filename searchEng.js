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

  Strategy
    
  Big-O

  Transformative Steps
*/

function searchEng(string,searchWord,searchMethod,newWord) {
  //Write your code in here
}