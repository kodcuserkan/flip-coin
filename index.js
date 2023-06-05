function flipCoinUntilMatch() {
  const FLIP_COUNT_LIMIT = 30;
  let consecutiveCount = 0;
  let flipCount = 0;
  let headsCount = 0;
  let tailsCount = 0;
  let previousResult = null;

  console.time('flipCoinUntilMatch');

  while (consecutiveCount < FLIP_COUNT_LIMIT) {
    // Simulate flipping a coin by generating a random number between 0 and 1
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';

    if (result === previousResult) {
      consecutiveCount++;
    } else {
      consecutiveCount = 1;
    }

    previousResult = result;
    flipCount++;

    if (result === 'Heads') {
      headsCount++;
    } else {
      tailsCount++;
    }
  }

  console.log('Got ',FLIP_COUNT_LIMIT,' consecutive', previousResult, 'results!');
  console.log('Total flips:', flipCount);
  console.log('Heads:', headsCount, '(', ((headsCount / flipCount) * 100).toFixed(2), '%)');
  console.log('Tails:', tailsCount, '(', ((tailsCount / flipCount) * 100).toFixed(2), '%)');

  console.timeEnd('flipCoinUntilMatch');
}
