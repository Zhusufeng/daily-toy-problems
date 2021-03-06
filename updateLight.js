/*
  Prompt: http://www.codewars.com/kata/thinkful-logic-drills-traffic-light/train/javascript
*/

/*
  Inputs & Outputs
*/

const input1 = 'green';
const output1 = 'yellow';

const input2 = 'yellow';
const output2 = 'red';

const input3 = 'red';
const output3 = 'green';

/*
  Strategy

    #1 Array
      Make array of ['green', 'yellow', 'red']
                        0        1        2
      If indexOf input -1, return 'Bad input. Choose green, yellow or red'
      If indexOf input is 2, return index 0
      Else return indexOf input + 1

    #2 Switch Statement
      On input, switch
      Default 'Bad input. Choose green, yellow or red'

    #3 If/Else
      If green, return yellow
      If yellow, return red
      If red, return green
      Else 'Bad input. Choose green, yellow or red'

    #4 Object (or Set)
      Make object where green is key & yellow is val, etc
      If obj does not have input as property, return 'Bad input. Choose green, yellow or red'
      Else return obj[light]
*/

const updateLightArr = (light) => {
  const lights = ['green', 'yellow', 'red'];
  const ind = lights.indexOf(light);

  if (ind < 0) {
    return 'Bad input. Choose green, yellow or red';
  } else if (ind === 2) {
    return lights[0];
  } else {
    return lights[ind + 1];
  }
};

console.assert(updateLightArr('green') === 'yellow', 'updateLightArr was given green, should return yellow');
console.assert(updateLightArr('yellow') === 'red', 'updateLightArr was given yellow, should return red');
console.assert(updateLightArr('red') === 'green', 'updateLightArr was given red, should return green');
console.assert(updateLightArr('purple') === 'Bad input. Choose green, yellow or red', 'updateLightArr was given red, should return green');

updateLightSwitch = (light) => {
  switch (light) {
    case 'green':
      return 'yellow';
    case 'yellow':
      return 'red';
    case 'red':
      return 'green';
    default:
      return 'Bad input. Choose green, yellow or red';
  }
};

console.assert(updateLightSwitch('green')==='yellow', 'updateLightSwitch was given green, should return yellow');
console.assert(updateLightSwitch('yellow')==='red', 'updateLightSwitch was given yellow, should return red');
console.assert(updateLightSwitch('red')==='green', 'updateLightSwitch was given red, should return green');
console.assert(updateLightSwitch('purple') === 'Bad input. Choose green, yellow or red', 'updateLightSwitch was given red, should return green');

updateLightIf = light => {
  if (light === 'green') {
    return 'yellow';
  } else if (light === 'yellow') {
    return 'red';
  } else if (light === 'red') {
    return 'green';
  } else {
    return 'Bad input. Choose green, yellow or red';
  }
};

console.assert(updateLightIf('green')==='yellow', 'updateLightIf was given green, should return yellow');
console.assert(updateLightIf('yellow')==='red', 'updateLightIf was given yellow, should return red');
console.assert(updateLightIf('red')==='green', 'updateLightIf was given red, should return green');
console.assert(updateLightIf('purple') === 'Bad input. Choose green, yellow or red', 'updateLightIf was given red, should return green');

updateLightObj = light => {
  const lights = {
    green: 'yellow',
    yellow: 'red',
    red: 'green'
  };
  if (!lights[light]) {
    return 'Bad input. Choose green, yellow or red';
  } else {
    return lights[light];
  }
};

console.assert(updateLightObj('green')==='yellow', 'updateLightObj was given green, should return yellow');
console.assert(updateLightObj('yellow')==='red', 'updateLightObj was given yellow, should return red');
console.assert(updateLightObj('red')==='green', 'updateLightObj was given red, should return green');
console.assert(updateLightObj('purple') === 'Bad input. Choose green, yellow or red', 'updateLightObj was given red, should return green');