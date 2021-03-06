/*
  Prompt: https://www.interviewcake.com/question/javascript/permutation-palindrome
*/

/*
  Inputs & Outputs
*/

const input1 = 'aabb';
const output1 = true;

const input2 = 'livic';
const output2 = false;

const input3 = 'penguin';
const output3 = false;

const input4 = 'bbb';
const output4 = true;

const input5 = 'bbbccc';
const output5 = false;

/*
  Strategy
    Make a hash map of letters & their count (iterate thru string)
    Count num of odd occurences (which can only happen once for valid palindrome) (iterate thru hash map)

  Big-O
    Time: Linear => O(2n)
    Space: Constant to size of input O(1)

  Constraint
    Input will only be lowercase letters
    Efficient!

  Skeleton
    const isPalindrome = s => {
      const hash = {};
      let oddCount = 0;
      // Iterate thru string & add count of a letter occurence to hash
      // Iterate thru hash & if oddCount is 0 or 1, return true, otherwise false
    };
*/
// const isPalindrome = s => {
//   const hash = {};
//   let oddCount = 0;

//   for (let i = 0; i < s.length; i += 1) {
//     if (hash[s[i]]) {
//       hash[s[i]] += 1;
//     } else {
//       hash[s[i]] = 1;
//     }
//   }
  
//   for (let key in hash) {
//     if (hash[key] % 2 === 1) oddCount += 1;
//   }

//   return oddCount <= 1;
// };

const isPalindrome = s => {
  const set = new Set();

  for (let i = 0; i < s.length; i += 1) {
    set.has(s[i]) ? set.delete(s[i]) : set.add(s[i]);
  }

  return set.size <= 1;
};

// Time: Linear
// Space: Constant

console.log(isPalindrome(input1)); // t
console.log(isPalindrome(input2)); // f
console.log(isPalindrome(input3)); // f
console.log(isPalindrome(input4)); // t
console.log(isPalindrome(input5)); // f



