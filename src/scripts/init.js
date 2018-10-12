import createCardset from './createCardSet.js';
import createCardAnswersPair from './createCardAnswersPair.js';
import endSession from './endSession.js';
import * as $ from 'jquery';
let currentSet = [];
let currentQuestion = 2;
import * as $ from 'jquery';

const skipButton = function() {
    $('#skipButton').append('<p> SKIP </p>').bind('click', () => {
        console.log('YES'); currentSet.unshift(currentQuestion);
        if (currentSet.length > 1) {
            createNext();
            console.log('no');
        } else {
            $('#skipButton').hide();
        }
    });
};


const createNext = function() {
    // creates the elements from the next question

    if (currentSet.length === 0) {
        endSession();
        return;
    }
    
    document.getElementById('counter').innerHTML= `${window.sessionStorage.currentQuestion}/${window.sessionStorage.questionsAmount}`;

    currentQuestion = currentSet.pop();
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
    skipButton();
};

export { init, createNext, currentSet };
