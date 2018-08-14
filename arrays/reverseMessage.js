/*
  Prompt: https://www.interviewcake.com/question/javascript/reverse-words?section=array-and-string-manipulation&course=fc1
*/

/*
  Inputs & Outputs
*/
var input1 = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];
var output1 = [ 's', 't', 'e', 'a', 'l', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                 'c', 'a', 'k', 'e'];

/*
  Strategy

    #1 
    Join 'cake pound steal'
    Split on spaces ['cake', 'pound', 'steal']
    Loop backwards on new array ['steal', 'pound', 'cake']
    Join with spaces in between 'steal pound cake'
    Split every char
*/

const reverseMessage = (arr) => {
  const backwards = arr.join('').split(' ');
  const forwards = [];
  for (let i = backwards.length - 1; i >= 0; i--) {
    forwards.push(backwards[i]);
  }
  return forwards.join(' ').split('');
};
console.log(reverseMessage(input1));
