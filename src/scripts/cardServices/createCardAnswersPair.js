import { createAnswersElements } from '../domServices/createAnswersElements.js';
import * as $ from 'jquery';
import { currentQuestion } from '../createNext.js';

const createCardAnswersPair = function() {
  $('#answersContainer').remove();
  $('#cardText')
    .empty()
    .append(`<p>${currentQuestion.question}<p>`);
  $('#card').show();
  if ($('#learnMode').hasClass('active')) {
    let deg = +$('#card')
      .attr('class')
      .substr(3);
    $('#card').click(() => {
      $('#card').css('transform', `rotateX(${(deg += 180)}deg)`);
      $('#card')
        .removeClass()
        .addClass(`deg${deg}`);
    });
    $('#cardText').append('<span>Click to flip</span>');
    $('#cardDescription')
      .empty()
      .append(`<p>${currentQuestion.longDescription}<p>`);
  } else {
    createAnswersElements(currentQuestion.answers);
  }
};
export default createCardAnswersPair;
