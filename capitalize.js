/*
  Prompt: https://www.codewars.com/kata/indexed-capitalization
*/
/*
O: string
I: string + array of nums
C:
  Time: Linear
  Space: Constant
E:
Examples/Edge Cases
-------------------
'abcdef', [1, 2, 5] => 'aBCdeF'
'abcdef', [1, 2, 5, 100] => 'aBCdeF'
'aaa', [0, 0, 0] => 'Aaa'
'AAA', [0, 0, 0] => 'AAA'
'aaa', [2] => 'aaA'
'aaa', [100, 200, 300] => 'aaa'
'aaa', [5000, 100, 1] => 'aAa'

General Plan
------------
Turn string into an array called newText
Iterate thru array of nums
If index exists, turn letter in newText at that index to a capital
Return joined newText array
*/

function capitalize(s,arr){
  let newText = s.split('');

  arr.forEach(num => {
    if (newText[num]) {
      newText[num] = newText[num].toUpperCase();
    }
  });
  return newText.join('');
};

console.log(capitalize('abcdef', [1, 2, 5]));
console.log(capitalize('abcdef', [1, 2, 5, 100]));
console.log(capitalize('aaa', [0, 0, 0]));
console.log(capitalize('AAA', [0, 0, 0]));
console.log(capitalize('aaa', [2]));
console.log(capitalize('aaa', [100, 200, 300]));
console.log(capitalize('aaa', [5000, 100, 1]));
