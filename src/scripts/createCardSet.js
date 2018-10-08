import flashCardsSets from './database.js';
import shuffle from './shuffle.js';

// receives category name(0 for all categories)+number of questions to return
// returns array of questions

const createCardSet = function(catName, n) {
    const keys = Object.keys(flashCardsSets);
    if (catName !== 0 && !keys.includes(catName)) {
        return 'Invalid catName.';
    }
    let questions = [];

    if (catName === 0) {
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


export default createCardSet;
