import * as $ from 'jquery';
import { currentSet } from './init.js';
import { currentQuestion, createNext } from './createNext.js';
import { flippingCurrentCard } from './domServices/createAnswersElements.js';

const skipButton = function() {
  $('#skipButton').show();
  if ($('#quizMode').hasClass('active')) {
    $('#skipButton')
      .html('')
      .append('Skip')
      .click(() => {
        // putting back the current question in the card set
        currentSet.unshift(currentQuestion);
        window.sessionStorage.currentQuestion--;
        // calling the next question
        createNext();
      });
  } else {
    $('#skipButton')
      .html('')
      .append('Next')
      .click(() => {
        // calling the next question
        // flippingCurrentCard();
        setTimeout(() => {
          createNext();
        }, 200);
      });
  }
};

export { skipButton };
