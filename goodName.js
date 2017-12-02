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


*/