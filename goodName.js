/*
#The rules:

1) If website's name contains "o", replace it to "0". like this:

codewars.com ---> c0dewars.com
2) If website's name contains "l", replace it to "1". like this:

leetcode.com ---> 1eetcode.com
3) If website's name has a substring contains two or more duplicated characters, one of them will be removed. like this:

leetcode.com ---> letcode.com
facebook.com ---> facebok.com
fighter2000.com ---> fighter200.com
4) The top-level domain name of the site should not be changed, such as .com .net .org etc.

5) John wants to see all the schemes, so the results should contain all the possible changes. That is, the return should be a string array. Each scheme has only one character different from the original name.

6) The returned array should be sorted(in Unicode code point order). If the name of the site can not change the character, return an empty array.

goodName("goodlink.com") = ["g0odlink.com","go0dlink.com","godlink.com","good1ink.com"]
*/

/*
O: Array of strings
I: String
C: 
  Time:
  Space:
E:
  See above
  gooo.com => ['g0oo.com', 'go0o.com', 'goo0.com', 'goo.com']
  looo.com => ['1ooo.com', 'l0oo.com', 'lo0o.com', 'loo0.com', 'loo.com']

General Plan:
  Declare results as an empty array
  Get array by splitting string by decimal
  Loop through array at index 0
    If array[0][index] is 'o'
      Push to results array[0].slice(0, index) + '0' + array[0].slice(index + 1, array[0].length)
    If array[0][index] is 'l'
      Push to results array[0].slice(0, index) + '1' + array[0].slice(index + 1, array[0].length)
    If array[0][index] equals array[0][index - 1] && array[0][index] does not equal array[0][index + 1]
      Push to results array[0].slice(0, index) + array[0].slice(index + 1, array[0].length)
  Return results
*/

function goodName(name) {
  let results = [];
  let array = name.split('.');

  let givenName = array[0];
  let domain = '.' + array[1];
  let length = givenName.length;

  for (let i = 0; i < givenName.length; i++) {
    if (givenName[i] === 'o') {
      results.push(givenName.slice(0, i) + '0' + givenName.slice(i + 1, length) + domain);
    }
    if (givenName[i] === 'l') {
      results.push(givenName.slice(0, i) + '1' + givenName.slice(i + 1, length) + domain);
    }
    if (givenName[i] === givenName[i - 1] && givenName[i] !== givenName[i + 1]) {
      results.push(givenName.slice(0, i) + givenName.slice(i + 1, length) + domain);
    }
  }

  return results;
}

console.log(goodName('gooo.com'));
console.log(goodName('looo.com'));
console.log(goodName('goodlink.com'));
