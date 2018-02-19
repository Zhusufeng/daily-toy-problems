/*
  Prompt: https://www.codewars.com/kata/tortoise-racing
*/

/*
Math first
-----------
Rate is feet per hour
rate (feet per minute) = feet * 60 minutes
Ie. 720 feet per hour = 12 feet per minute
rate (feet per second) = feet * 60 minutes * 60 seconds
Ie. 720 feet per hour = 0.2 feet per second

A's distance = lead + (time * rate);
B's distance = time * rate;

So when do A's distance = B's distance
AKA
lead + (time * rateA) = time * rateB
Ie.
70 + (32m 18s * 720) = 32m 18s * 850
32m 18s = 1938s
720/60/60 = 0.2 feet per second
850/60/60 = 0.2361 feet per second
70 + (1938s * 0.2) = 1938s * 0.2361
70 + 387.6 = 457.5618
457.6 = 457.5618


Then translate time into hours, minutes, seconds
return hours, mins, seconds in an array

lead + (time * rateA) = time * rateB
Ie. 720t + 70 = 850t
70 = 850t - 720t
70 = 130t
70/130 = t
0.5384 = time
0.5384 * 60 = 32.31 minutes

lead = (time * rateB) - (time * rateA)
g/(rateB - rateA) = time in hours - Math.floor it
g/(rateB - rateA) * 60 = time in minutes - Turn to string. Split on decimal
g/(rateB - rateA) * 60 * 60 = time in seconds - .31 * 60 = 18.6  - Math.floor it

O: Array
I: Number, Number, Number
C:
  Time: Constant
  Space: Constant
E:
  900, 500, 60 => null
  900, 900, 60 => null
  720, 850, 70 => [0, 32, 18]
  80, 91, 37   => [3, 21, 49]
  80, 100, 40  => [2, 0, 0]

  General Plan
  ------------
  const hours, minAndSec, minutes, seconds

  if v1 is greater than or equal to v2
    return null
  else
    hours = Math.floor(g/(v2 - v1))
    minAndSec = ((g/(v2 - v1) * 60).toString()).split('.')
    minutes = minAndSec[0]
    seconds = Math.floor(parseFloat('.' + minAndSec[1]) * 60);
    return [hours, minutes, seconds];
*/

// function race(v1, v2, g) {
//   let hours, minAndSec, minutes, seconds;

//   if (v1 >= v2) {
//     return null;
//   } else {
//     hours = Math.floor(g/(v2 - v1));
//     minAndSec = ((g/(v2 - v1) * 60).toString()).split('.');
//     if (parseInt(minAndSec[0]) < 59) {
//       minutes = parseInt(minAndSec[0]);
//     } else {
//       minutes = parseInt(minAndSec[0]) % 60;
//     }
//     if (!minAndSec[1]) {
//       seconds = 0;
//     } else {
//       seconds = Math.floor(parseFloat('.' + minAndSec[1]) * 60);
//     }
//     return [hours, minutes, seconds];
//   }
// }

// Refactor
function race(v1, v2, g) {
  let hours, minutes, seconds;

  if (v1 >= v2) {
    return null;
  } else {
    hours = Math.floor(g/(v2 - v1));
    minutes = Math.floor((g/(v2 - v1) * 60) % 60);
    seconds = Math.floor((g/(v2 - v1) * 3600) % 60);
    return [hours, minutes, seconds];
  }
}

// Test
console.log(race(900, 500, 60));
console.log(race(900, 900, 60));
console.log(race(720, 850, 70)); // [0, 32, 18]
console.log(race(80, 91, 37));   // [3, 21, 49]
console.log(race(80, 100, 40));  // [2, 0, 0]