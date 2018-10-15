import createAnswersElements from '../domServices/createAnswersElements.js';
import * as $ from 'jquery';
import { currentQuestion } from '../createNext.js';

const createCardAnswersPair = function() {
  $('#answersContainer').remove();
  $('#cardText').empty();
  $('#cardText').append(`<p>${currentQuestion.question}<p>`);
  $('#card').show();
  if ($('#learnMode').hasClass('active')) {
    let deg = 0;
    $('#card').click(() => {
      $('#card').css('transform', `rotateX(${(deg += 180)}deg)`);
    });
    $('#cardDescription').append(`<p>${currentQuestion.longDescription}<p>`);
  } else {
    createAnswersElements(currentQuestion.answers);
  }
};
export default createCardAnswersPair;
