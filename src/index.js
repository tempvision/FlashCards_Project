import * as $ from 'jquery';
import { init } from './scripts/init.js';

const [catName, cardAmount] = ['jsBasics', 5];

$('#start').bind('click', () => {
  init(catName, cardAmount);
  $('#start').hide();
});
$('#startL').bind('click', () => {
  initL(catName, cardAmount);
  $('#start').hide();
  $('#startL').hide();
});

const skipButton = function() {
  currentSet.unshift(currentQuestion);
  createNext();
};
$('#selectMode').click(() => {
  // const learnHalf = '<div class="half"></div>';
  $('#wrapper')
    .html('')
    .append('<div class="half"></div><div class="half"></div>');
});
