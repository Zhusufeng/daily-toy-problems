/*
  Prompt: http://www.codewars.com/kata/thinkful-logic-drills-traffic-light/train/javascript
*/

/*
  Inputs & Outputs
*/

const input1 = 'green';
const input1 = 'yellow';

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
*/