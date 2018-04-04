/*
  Prompt: https://www.interviewcake.com/question/javascript/largest-stack
*/

function Stack() {
  // initialize an empty array
  this.items = [];
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);
};

// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
      return null;
  }
  return this.items.pop();
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
      return null;
  }
  return this.items[this.items.length -1];
};

function MaxStack () {
  Stack.call(); // get props set up by Stack
}

MaxStack.prototype = Object.create(Stack.prototype); // set inheritance

MaxStack.prototype.constructor = MaxStack; // set MaxStack constructor func

MaxStack.prototype.getMax = function () {
  let largest = null;

  /*
    Iterate thru this.items
      If this.items[i] is largest, update it
    Return largest
  */

  this.items.forEach(item => {
    largest = Math.max(item, largest);
  });

  return largest;
};