# flip-coin

When you call the flipCoinUntilMatch function from index.js, we use a while loop to keep flipping the coin until we get five consecutive results that are the same. The variable consecutiveCount keeps track of the number of consecutive results, while previousResult stores the result of the previous flip.

Inside the loop, we generate a random number using Math.random() and check if it's less than 0.5. If it is, we consider it as 'Heads'; otherwise, it's 'Tails'. We compare the current result with the previous one and update the consecutiveCount accordingly. 

It will log the flip results, the success message, the total number of flips, the count and percentage of heads and tails, and the time spent to the console.
