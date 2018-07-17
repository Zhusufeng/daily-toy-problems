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