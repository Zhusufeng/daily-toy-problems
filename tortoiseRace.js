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
lead + (timeA * rateA) = timeB * rateB

*/