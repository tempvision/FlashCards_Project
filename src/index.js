import * as $ from 'jquery';
import { init } from './scripts/init.js';
import { returnData, visualizer } from './scripts/domBuilder.js';

const startQuiz = function () {
  visualizer('cardScreen');
  init('all', 5, 'easy');
  $('.menuActive').removeClass('menuActive');
  $('#card')
    .removeClass()
    .addClass('deg0');
};

$('.modeBtn').click((event) => {
  $(event.target).addClass('active');
  startQuiz();
});
