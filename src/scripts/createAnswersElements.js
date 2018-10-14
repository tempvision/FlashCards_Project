import shuffle from './shuffle.js';
import * as $ from 'jquery';
import { checkIfTrue } from './checkIfTrue.js';
import { createNext } from './createNext.js';
<<<<<<< HEAD
const flippingCurrentCard = function() {
  const el = $('#card');
  const elClass = el.attr('class');
  const deg = +elClass.substr(3) + 360;
  el.css('transform', `rotateX(${deg}deg)`)
    .removeClass(elClass)
    .addClass(`deg${deg}`);
  setTimeout(() => {
    createNext();
  }, 500);
};
const createAnswersElements = function(answers) {
  answers = shuffle(answers, 3);
  $('#flip-box').append('<div id="answersContainer"></div>');
  answers.forEach((answer, i) => {
=======

const createAnswersElements = function(answers) {
    answers = shuffle(answers, 3);
        $('body').append('<div id="answersContainer"></div>');
        answers.forEach((answer, i) => {
        $('#answersContainer').append(
            `<div id="ans${i}" class="ansBtn">${answer.text}</div>`);
        $(`#ans${i}`).bind('click', () => {
            checkIfTrue(i, answers);
            createNext();
        });
    });

>>>>>>> master
    $('#answersContainer').append(
      `<div id="ans${i}" class="ansBtn">${answer.text}</div>`
    );
    $(`#ans${i}`).bind('click', () => {
      checkIfTrue(i, answers);
      setTimeout(() => {
        flippingCurrentCard();
      }, 700);
    });
  });

  $('#answersContainer').append(
    `<div id="ans3" class="ansBtn">None of the above</div>`
  );

  $(`#ans3`).bind('click', () => {
    checkIfTrue(3, answers);
    setTimeout(() => {
      flippingCurrentCard();
    }, 700);
  });

  $('.ansBtn')
    .hide()
    .slideDown(800, 'swing')
    .css('opacity', 0)
    .animate({ opacity: 1 }, { queue: false, duration: 1000 });
};

export default createAnswersElements;
