import createCardset from './createCardSet.js';
import * as $ from 'jquery';
import { createNext } from './createNext.js';
import { skipButton } from './skipButton.js';

let currentSet = [];


const init = function(catName, questionsAmount) {
    // create the current set

    currentSet = createCardset(catName, questionsAmount);
    // starts results counter in session storage
    window.sessionStorage.questionsAmount = questionsAmount;
    window.sessionStorage.correctAmount = 0;
    window.sessionStorage.currentQuestion = 1;

    $(`<div id="counter">${window.sessionStorage.currentQuestion}
                        /${questionsAmount}</div>`)
    .insertAfter('#card');
    // calls the creator function
    createNext();
    // and the skip button
    skipButton();
};

export { init, currentSet };
