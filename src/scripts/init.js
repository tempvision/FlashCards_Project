import { createCardSet } from './cardServices/createCardSet.js';
import * as $ from 'jquery';
import { createNext } from './createNext.js';
import { skipButton } from './skipButton.js';
import api from './openTdbApi.js';
let currentSet = [];

const init = function(catName, questionsAmount, difficulty) {
  // starts results counter in session storage
  $('#results').hide();
  $('#answersContainer').show();
  $('#flip-box').show();
  $('#counter').show();
  $('#skipButton').show();
  window.sessionStorage.questionsAmount = questionsAmount;
  window.sessionStorage.correctAmount = 0;
  window.sessionStorage.currentQuestion = 0;

  $('#counter').append(`${1}/ ${questionsAmount}`);

  if (catName === 'CS') {
    api.onResult((res) => {
      currentSet = res;
      createNext();
      skipButton();
    });

    currentSet = api.apiGet(questionsAmount, difficulty);
  } else {
    currentSet = createCardSet(catName, questionsAmount);
    createNext();
    skipButton();
  }
};

export { init, currentSet };
