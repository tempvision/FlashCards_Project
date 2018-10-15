import * as $ from 'jquery';
import { currentSet } from './init.js';
import { currentQuestion, createNext } from './createNext.js';

const skipButton = function() {
  $('#skipButton').show();
  if ($('#quizMode').hasClass('active')) {
    $('#skipButton')
      .empty()
      .append('Skip')
      .bind('click', () => {
        // putting back the current question in the card set
        currentSet.unshift(currentQuestion);
        window.sessionStorage.currentQuestion--;

        // calling the next question
        createNext();
      });
  } else {
    $('#skipButton')
      .empty()
      .append('Next')
      .bind('click', () => {
        // calling the next question
        createNext();
      });
  }
};

export { skipButton };
