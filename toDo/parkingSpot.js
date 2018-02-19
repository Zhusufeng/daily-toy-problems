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

/*
Example 2: Shifted over

spots 0 1 2 3 4 5
cars  1 2 3 4 5

Find empty spot
Find the car that goes in that spot
Get that new spotNum
Move the car to that spot
Find car that goes in new spotNum and move it to it
Continue
*/

/*
Example 3: Random

spots 0 1 2 3 4 5
cars  5 2 4   3 1


Find emptySpot
Set emptySpot equal to spots[index]
Loop through spots
Using that index, get car number
Set oldSpot equal to where car was spots[index]
Put car in emptySpot
Update emptySpot to point to oldSpot

If hit the 0 spot, 
go to spots[index + 1] to see car belongs there
If not, find the car's destination spot
Take the car in the destination spot and move it to 0
Place car in its destination spot
Repeat
*/

/*
Example 4: Ordered

spots 0 1 2 3 4 5 
cars    1 2 3 4 5

Find empty spot
If it is 0
Go to spots[index + 1] to check if the car belongs there

If not find the car's destination and which car is in there
Move that car to 0 
Move the in the wrong spot to its right spot
Now find place for car at 0
*/

/*
Example 5:
*/