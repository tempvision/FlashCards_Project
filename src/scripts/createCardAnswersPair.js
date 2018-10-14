import createAnswersElements from './createAnswersElements.js';
import * as $ from 'jquery';
import { currentQuestion } from './createNext.js';

const createCardAnswersPair = function() {
  $('#answersContainer').remove();
  $('#cardText').empty();
  $('#cardText').append(`<p>${currentQuestion.question}<p>`);
<<<<<<< HEAD
  if ($('#quizMode').css('display') === 'none') {
    let deg = 0;
    $('#card').click(() => {
      $('#card').css('transform', `rotateX(${(deg += 180)}deg)`);
    });
    $('#cardDescription').append(`<p>${currentQuestion.longDescription}<p>`);
  } else {
    createAnswersElements(currentQuestion.answers);
  }
=======
  // $('#cardDescription').append(`<p>${questionObject.longDescription}<p>`);
  // $('#card').flip({ axis: 'x', trigger: 'manual' });
  createAnswersElements(currentQuestion.answers);
>>>>>>> master
};
export default createCardAnswersPair;
