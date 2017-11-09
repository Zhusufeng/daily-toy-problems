/*
You are playing the following Flip Game with your friend: Given a string that contains only these two characters: + and -, you and your friend take turns to flip two consecutive "++" into "--". The game ends when a person can no longer make a move and therefore the other person will be the winner.

Write a function to compute all possible states of the string after one valid move.

For example, given s = "++++", after one move, it may become one of the following states:

[
  "--++",
  "+--+",
  "++--"
]
If there is no valid move, return an empty list [].
*/

/*
O: array of strings
I: string
C:
  Time: Linear
  Space: Linear
E:
  ++++                  => --++
                           +--+
                           ++--

  +++--                 => --+--
                           +----

  ++++--                => --++--
                           +--+--
                           ++----

  General Plan
  ------------
  Create variable answer equal to empty array
  Turn string into an array
  Iterate through array
    If array[i] is + and array[i+1] is +,
      Mutate array. Make array[i] & array[i+1] = -
      Push joined array to answer
      Unmutate array. Change array[i] & array[i+1] back to +
  Return answer

*/

var generatePossibleNextMoves = function(s) {
  let answer = [];
  let array = s.split('');

  for (let i = 0; i < array.length; i++) {
    if (array[i] === '+' && array[i + 1] === '+') {
      array[i] = '-';
      array[i + 1] = '-';
      answer.push(array.join(''));
      array[i] = '+';
      array[i + 1] = '+';
    }
  }

  return answer;
};

// Tests

console.log(generatePossibleNextMoves('++++'));
console.log(generatePossibleNextMoves('+++--'));
console.log(generatePossibleNextMoves('++++--'));