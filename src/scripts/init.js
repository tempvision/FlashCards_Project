import { createCardSet } from './createCardSet.js'
import * as $ from 'jquery';
import { createNext } from './createNext.js';
import { skipButton } from './skipButton.js';
import api from './apiGet.js';
let currentSet = [];

const init = function(catName, questionsAmount, difficulty) {
  // starts results counter in session storage
  window.sessionStorage.questionsAmount = questionsAmount;
  window.sessionStorage.correctAmount = 0;
  window.sessionStorage.currentQuestion = 0;

  $(
    `<div id="counter">${1}/ ${questionsAmount} </div>`
  ).insertAfter('#flip-box');

  if (catName === 'CS') {
    api.onResult((res) => {
        currentSet = res;
        console.log(currentSet);
        createNext();
        skipButton();
    });

    currentSet = api.apiGet(questionsAmount, difficulty);
} else {

    currentSet = createCardSet(catName, questionsAmount);  
    console.log(currentSet)
    createNext();
    skipButton();
}
};

export { init, currentSet };
