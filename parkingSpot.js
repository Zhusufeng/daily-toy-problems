/*
There are N+1 parking spots, numbered from 0 to N. There are N cars numbered from 1 to N parked in various parking spots with one left empty. Reorder the cars so that car #1 is in spot #1, car #2 is in spot #2 and so on. Spot #0 will remain empty. The only allowed operation is to take a car and move it to the free spot.”

Write down 5 different examples and try to order the cars on a sheet of paper.
*/

/*
Example 1: Reversed

spots 0 1 2 3 4 5
cars  5 4 3 2 1 

Find the empty spot and get that spot's number (spotNum)
Find the car that goes in that spot
Move the car to that spot
Continue until cars are in order

If car is in the 0 spot
  Move the car to its spot
  Go to 0 + 1 to check if it has the right carNum in the spotNum
  If not switch
*/