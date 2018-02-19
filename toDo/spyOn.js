/*
  Prompt: http://www.codewars.com/kata/i-spy
*/

/*
O: An instance of spyOn
I: Arguments that the function takes
C: 
  Time: Depends on input function
  Space: Depends on input function
E: See above

General Plan
-------------
spyOn
Takes in a function
Create spy to equal spyOn.prototype
spy.func equals given function
spy.timesCalled equals 0
spy.storage equals empty object
Returns spy.func

spyOn.callCount 
Returns Number (this.timesCalled)

spyOn.wasCalledWith
Takes in an argument
If key in this.storage exists, return true
Else return false

spyOn.returned
Takes in an argument
If value in this.storage exists, return true
Else return false
*/

var spyOn = function(func) {
  var spy = Object.create(spyOn.prototype);
  spy.func = func;
  spy.timesCalled = 0;
  spy.storage = {};
  // console.log(arguments);
  let args = Array.prototype.slice.call(arguments);
  console.log(args);
  if (args.length > 1) {
    return spy.func;
  }

  return spy;
};

// spyOn.prototype.constructor = spyOn;

spyOn.prototype.callCount = function() {
  return this.timesCalled;
};

spyOn.prototype.wasCalledWith = function(arg){
  if (this.storage[arg]) {
    return true;
  }
  return false;
};

spyOn.prototype.returned = function(value) {
  for (key in this.storage) {
    if (this.storage[key] === value) {
      return true;
    }
  }
  return false;
};

// Test code
function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

// console.log(adderSpy(2, 4)); // returns 6
// console.log(adderSpy(3, 5)); // returns 8
console.log(adderSpy.callCount()); // returns 2
console.log(adderSpy.wasCalledWith(4)); // true
console.log(adderSpy.wasCalledWith(0)); // false
console.log(adderSpy.returned(8)); // true
console.log(adderSpy.returned(0)); // false
