/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names �

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/

//QUESTION 1 SOLUTION
/*
Updated the printGoals() function to add the goal number
console.log(`Goal ${i + 1}: ${players[i]}`)
The players array start with 0 index so 1 is added to each array to make the next goal
*/

//QUESTION 2 SOLUTION
console.log(`---Test 2: Question 2---`)
const odds = Object.values(game.odds)

let avgOdd = 0

for (let i = 0; i < odds.length; i++){
    avgOdd += odds[i]
}

console.log(`The average score is ${avgOdd / odds.length}`)