/*
  Prompt: https://www.interviewcake.com/question/javascript/recursive-string-permutations
*/

/*
  Input & Output
*/
const input1 = 'ab';
const output1 = new Set(['a', 'ab', 'b', 'ba']);


/*
  Constraints
    Must be recursive
    All chars in string are unique

  Strategy
    If not empty add word to perms (return if equal to s.length)
    Iterate thru string
    Add letter to word

  Big-O
    Stack: Exponential?
    Time: ?
    Space: Exponential

  Skeleton
    const makeRecursivePermutations = (s, word = '', perms = []) => {
  
    };
*/

// const makeRecursivePermutations = (s, word = '', perms = []) => {
//   if (s.length === 0) {
//     return [];
//   }
//   for (let i = 0; i < s.length; i += 1) {
//     perms.push(word + s[i]);
//     makeRecursivePermutations(s.substring(0, i) + s.substring(i + 1), word + s[i], perms);
//   }
//   return perms;
// };

// Set version
const makeRecursivePermutations = (s, word = '', perms = new Set()) => {
  if (s.length === 0) {
    return new Set();
  }
  for (let i = 0; i < s.length; i += 1) {
    perms.add(word + s[i]);
    makeRecursivePermutations(s.substring(0, i) + s.substring(i + 1), word + s[i], perms);
  }
  return perms;
};

console.log(makeRecursivePermutations('a'));
console.log(makeRecursivePermutations('ab'));
console.log(makeRecursivePermutations('abc'));
console.log(makeRecursivePermutations('abcc')); 
// set version works with duplicate characters
console.log(makeRecursivePermutations('')); 
// works with empty string



