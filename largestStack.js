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
  Stack.call(this); // get props set up by Stack
  this.maxesStack = new Stack();
}

MaxStack.prototype = Object.create(Stack.prototype); // set inheritance

MaxStack.prototype.constructor = MaxStack; // set MaxStack constructor func

// push a new item to the last index
MaxStack.prototype.push = function(item) {
  this.items.push(item);
  if (!this.maxesStack.peek() || item >= this.maxesStack.peek()) {
    this.maxesStack.push(item);
  }
};

MaxStack.prototype.pop = function () {
  let item = this.items.pop();
  if (item === this.maxesStack.peek()) {
    this.maxesStack.pop();
  }
  return item;
}

MaxStack.prototype.getMax = function () {
  return this.maxesStack.peek();
};

/*
  Initial Idea
  Time: Linear
  Space: Constant

  Iterate thru this.items
    If this.items[i] is largest, update it
  Return largest


  this.items.forEach(item => {
    largest = Math.max(item, largest);
  });
*/
