import shuffle from '../cardServices/shuffle.js';
import * as $ from 'jquery';
import { checkIfTrue } from '../cardServices/checkIfTrue.js';
import { createNext } from '../createNext.js';

const flippingCurrentCard = function(mode) {
  const grad = mode === 'quiz' ? 360 : 180;
  const el = $('#card');
  const elClass = el.attr('class');
  const deg = +elClass.substr(3) + grad;
  console.log(grad, deg);
  el.css('transform', `rotateX(${deg}deg)`)
    .removeClass(elClass)
    .addClass(`deg${deg}`);
};

const createAnswersElements = function(answers) {
  answers = shuffle(answers, 3);
  $('#flip-box').append('<div id="answersContainer"></div>');
  answers.forEach((answer, i) => {
    $('#answersContainer').append(
      `<div id="ans${i}" class="ansBtn">${answer.text}</div>`
    );
  });
  if (answers.length > 2) {
    $('#answersContainer').append(
      `<div id="ans3" class="ansBtn">None of the above</div>`
    );
  }

  $('.ansBtn')
    .hide()
    .slideDown(800, 'swing')
    .css('opacity', 0)
    .animate({ opacity: 1 }, { queue: false, duration: 1000 })
    .bind('click', (event) => {
      checkIfTrue(event.target.id.substr(3), answers);
      setTimeout(() => {
        flippingCurrentCard('quiz');
        setTimeout(() => {
          createNext();
        }, 500);
      }, 700);
    });
};

export { createAnswersElements, flippingCurrentCard };
