/* 
Write a function that takes a number or a string and gives back the number of permutations without repetitions that can generated using all of its element.; more on permutations here.

For example, starting with:

1
45
115
"abc"
You could respectively generate:

1
45,54
115,151,511
"abc","acb","bac","bca","cab","cba"
So you should have, in turn:

perms(1)==1
perms(45)==2
perms(115)==3
perms("abc")==6
*/

/*
O: Number
I: Number or string
C: 
  Time: O(n!) Factorial - Quadratic
E: 
  1      => 1
  45     => 2
  115    => 3
  'abc'  => 6
  'aabc' => 12

General Plan
  Turn element into a string called string
  
  Subroutine: getPerms that takes in str, part, array
    If str is empty
      Push part to array
      Return
    Loop through str
      Call getPerms again with str (without currentIndex), part + str at current index, array
    Return array
  
  Set perms to getPerms with string, empty string, empty array

  Set permSet equal to new Set of perms

  Return permSet's size
*/

// function perms(element){
//   let string;

//   if (typeof element !== 'string') {
//     string = element.toString();
//   } else {
//     string = element;
//   }

//   function getPerms(str, part, arr) {
//     if (!str) {
//       arr.push(part);
//       return;
//     }
//     for (let i = 0; i < str.length; i++) {
//       let newStr = str.slice(0, i) + str.slice(i + 1);
//       getPerms(newStr, part + str[i], arr);
//     }

//     return arr;
//   }

//   let perms = getPerms(string, '', []);
//   let permSet = new Set(perms);

//   return permSet.size;
// }

function perms(element){
  let string;

  if (typeof element !== 'string') {
    string = element.toString();
  } else {
    string = element;
  }
  console.log(string);

  function getPerms(str, part, set) {
    if (!str) {
      set.add(part);
      return;
    }
    for (let i = 0; i < str.length; i++) {
      let newStr = str.slice(0, i) + str.slice(i + 1);
      getPerms(newStr, part + str[i], set);
    }
    return set;
  }

  let perms = getPerms(string, '', new Set());
  return perms.size;
}

console.log(perms(1)); // 1
console.log(perms(45)); // 2
console.log(perms(115)); // 3
console.log(perms('abc')); // 6
console.log(perms('aabc')); // 12
console.log(perms('aa')); // 1
// console.log(perms('ugjzxubiahf')); 
// ^ may need to use tail call recursion or trampolining

