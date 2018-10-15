import { currentSet } from './init.js';
import createCardAnswersPair from './createCardAnswersPair.js';
import endSession from './endSession.js';
import * as $ from 'jquery';

let currentQuestion = 0;

const createNext = function() {
  // creates the elements from the next question
  if (currentSet.length === 0) {
    endSession();
    return;
  }

  if (currentSet.length === 1) {
    $('#skipButton').remove();
  }
  $('#counter')
    .empty()
    .append(
      `${Number(window.sessionStorage.currentQuestion) + 1}/${
        window.sessionStorage.questionsAmount
      }`
    );
  currentQuestion = currentSet.pop();

  createCardAnswersPair(currentQuestion);
  window.sessionStorage.currentQuestion++;
};

export { createNext, currentQuestion };
