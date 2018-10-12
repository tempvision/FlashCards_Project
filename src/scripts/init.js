import createCardset from './createCardSet.js';
import createCardAnswersPair from './createCardAnswersPair.js';
import endSession from './endSession.js';
let currentSet = [];

const createNext = function() {
    // creates the elements from the next question
    if (currentSet.length === 0) {
        endSession();
        return;
    }
    const currentQuestion = currentSet.pop();
    createCardAnswersPair(currentQuestion);
    window.sessionStorage.currentQuestion++;
};


const init = function(catName, questionsAmount) {
    // create the current set
    currentSet = createCardset(catName, questionsAmount);
    // starts results counter in session storage
    window.sessionStorage.questionsAmount = questionsAmount;
    window.sessionStorage.correctAmount = 0;
    window.sessionStorage.currentQuestion = 0;
    // calls the creator function
    createNext();
};

export { init, createNext };
