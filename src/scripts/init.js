import createCardset from './createCardSet.js';
import createCardAnswersPair from './createCardAnswersPair.js';
import endSession from './endSession.js';
import * as $ from 'jquery';
let currentSet = [];

const createNext = function() {
    // creates the elements from the next question
    if (currentSet.length === 0) {
        endSession();
        return;
    }
    const currentQuestion = currentSet.pop();
    document.getElementById('counter').innerHTML= `${window.sessionStorage.currentQuestion}/${window.sessionStorage.questionsAmount}`;
    createCardAnswersPair(currentQuestion);
    window.sessionStorage.currentQuestion++;
};


const init = function(catName, questionsAmount) {
    // create the current set
    currentSet = createCardset(catName, questionsAmount);
    // starts results counter in session storage
    window.sessionStorage.questionsAmount = questionsAmount;
    window.sessionStorage.correctAmount = 0;
    window.sessionStorage.currentQuestion = 1;
    
    $(`<div id="counter">${window.sessionStorage.currentQuestion}/${questionsAmount}</div>`).insertAfter('#card');
    // calls the creator function
    createNext();
};

export { init, createNext };
