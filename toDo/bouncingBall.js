// Incomplete - needs better time complexity

/* 
  Prompt: http://www.codewars.com/kata/bouncing-balls
*/

/*
O: Number
I: Numbers: height, bounce, window
C: 
  Time: Logarithmic?
  Space: ?
E:
3, 0.66, 1.5 => 3
3, 1, 1.5 => -1

General Plan
-------------
3, 0.66, 1.5
seenCounter = 0
if 1.5 > 3
  return -1
seenCounter++
3 * 0.66 = 1.98
if 1.98 > 1.5
  seenCounter += 2 for up and down
  1.98 * 0.66
  if 1.31 > 1.5
    keep going
  else
    return seeCounter
*/

function bouncingBall(h,  bounce,  window) {
  var seenCounter = 0; // Number of times mother sees ball
  var currH = h; // Keep track of ball's current height

  if (h <= 0 || bounce < 0 || bounce > 1 || window >= h) {
  	console.log('This isn\'t going to work');
  	return -1;
  }

  seenCounter++;

  while(currH >= window) {
    console.log(`Inside: The currH is ${currH} and window is ${window}`);
  	currH *= bounce;
  	if (currH >= window) {
  	  seenCounter += 2;
  	} else {
  	  return seenCounter;
  	}
  }

}

// Bad inputs
// console.log(bouncingBall(0, 0.66, 1.5));
// console.log(bouncingBall(3, 2, 1.5));
// console.log(bouncingBall(3, -1, 1.5));
// console.log(bouncingBall(3, 0.66, 5));

// Valid inputs
console.log(bouncingBall(3, 0.66, 1.5)); // 3
console.log(bouncingBall(30.0, 0.66, 1.5)); // 15
/*
0.66    *     7       =     0.545516070... * 30    =    1.63654...
bounce    numOfLoops                       height

(bounce ^ numOfLoops) * height until less than window
(numOfLoops * 2) + 1 = seenCounter
*/


// console.log(bouncingBall(30, 0.9999999999, 1));  // big calculation

