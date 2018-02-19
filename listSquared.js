/*
  Prompt: https://www.codewars.com/kata/integers-recreation-one
*/

/*
O: Array of tuples
I: Numbers
C:
  Time: 
  Space: 
E: 

Part 1: Find Divisors
-------------------------
Make array to hold divisors
Make a loop where i = 1 and it goes til i = sqrt of n
If n is divisible by i, 
  Add it to the divisors array

Part 2: Square Divisors
-------------------------
When added to the divisors array, square it!

Part 3: Sum the squared divisors
-------------------------
Use reduce to sum the divisors array

Part 4: Test if the sum's square root is a whole number
-------------------------
Get square root of sum (use math.sqrt)


Part 5: Add that number to answer array
-------------------------
If sqrt mod 1 is 0
  it is a whole number
  Push n and the sum to the answer array

Else it is not a whole number

Part 6: Optimize
-------------------------

*/

function listSquared(m, n) {
  let answerArray = [];

  while (m <= n) {
    let total = m * m;

    for (let i = 1; i <= m/2; i++) {
      if (m % i === 0) {
        total += i * i;
      }
    }

    if (Math.sqrt(total) % 1 === 0) {
      answerArray.push([m, total]);
    }

    m++;
  }

  return answerArray;
}

console.log(listSquared(40, 42));
console.log(listSquared(1, 250));
console.log(listSquared(42, 250));
console.log(listSquared(250, 500));

