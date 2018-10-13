import createAnswersElements from './createAnswersElements.js';
import * as $ from 'jquery';
import { currentQuestion } from './createNext.js';

const createCardAnswersPair = function() {
  $('#answersContainer').remove();
  $('#cardText').empty();
  $('#cardText').append(`<p>${currentQuestion.question}<p>`);
  // $('#cardDescription').append(`<p>${questionObject.longDescription}<p>`);
  // $('#card').flip({ axis: 'x', trigger: 'manual' });
  createAnswersElements(currentQuestion.answers);
};
export default createCardAnswersPair;
