/*
Two tortoises named A and B must run a race. A starts with an average speed of 720 feet per hour.
Young B knows she runs faster than A and furthermore has not finished her cabbage.

When she starts, at last, she can see that A has a 70 feet lead but B speed is 850 feet per hour.
How long will it take B to catch A?

More generally: given two speeds v1 (A speed, integer > 0) and v2 (B speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

The result will be an array [h, mn, s] where h, mn, s is the time needed in hours, minutes and seconds (don't worry for fractions of second).

If v1 >= v2 then return nil, nothing, null, None or {-1, -1, -1} for C++, C, Go, Nim.

Examples:

race(720, 850, 70) => [0, 32, 18]
race(80, 91, 37) => [3, 21, 49]
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
*/