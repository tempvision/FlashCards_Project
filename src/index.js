import * as $ from 'jquery';
import { init } from './scripts/init.js';
import { returnData, visualizer } from './scripts/domBuilder.js';


const startQuiz = function() {
  visualizer('cardScreen');
  init(...returnData());
};

$('.modeBtn').click((event) => {
  $(event.target).addClass('active');
  startQuiz();
});
