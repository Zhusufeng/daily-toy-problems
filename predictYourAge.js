/*
  Prompt: https://www.codewars.com/kata/predict-your-age/train/javascript
*/

/*
  Inputs & Outputs

  arguments = 65, 60, 75, 55, 60, 63, 64, 45
  output = 86
*/

/*
  Strategy

    Spread arguments into an array
    Use reduce where I sum multiply each number to itself & add to a running total
    Square root the sum & then divide in 2
*/

function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
  const ages = [...arguments];
  const sum = ages.reduce((acc, curr) => {
    return acc + (curr * curr);
  }, 0);
  return Math.floor(Math.sqrt(sum) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45));