import shuffle from './shuffle.js';
import flashCardsSets from '../../db/database.js';

const createCardSet = function(catName, n) {
  const keys = Object.keys(flashCardsSets);
  if (catName !== 'all' && !keys.includes(catName)) {
    return 'Invalid catName.';
  }
  let questions = [];

  if (catName === 'all') {
    // get questions from all categories
    keys.forEach((key) => {
      questions = [...questions, ...flashCardsSets[key].flashCards];
    });
    questions = shuffle(questions, n);

    return questions;
  }
  const setToShuffle = flashCardsSets[catName].flashCards;
  if (n > setToShuffle) {
    return `Not enough questions`;
  }
  questions = shuffle(setToShuffle, n);
  return questions;
};

export { createCardSet };
