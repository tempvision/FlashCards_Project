import createAnswersElements from './createAnswersElements.js';
import * as $ from 'jquery';

const createCardAnswersPair = function(currentQuestion) {
 $('#answersContainer').empty();
 $('#cardText').empty();
  $('#cardText').append(`<p>${currentQuestion.question}<p>`);
  // $('#cardDescription').append(`<p>${questionObject.longDescription}<p>`);
 // $('#card').flip({ axis: 'x', trigger: 'manual' });
  createAnswersElements(currentQuestion.answers);
};
export default createCardAnswersPair;
