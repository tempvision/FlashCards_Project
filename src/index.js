import * as $ from 'jquery';
import { init } from './scripts/init.js';

const [catName, cardAmount, difficulty] = ['CS', 5, 'easy'];

$('#start').bind('click', () => {
  init(catName, cardAmount, difficulty);
  $('#start').hide();
});


$('#selectMode').click(() => {
  // const learnHalf = '<div class="half"></div>';
  $('#wrapper')
    .html('')
    .append('<div class="half"></div><div class="half"></div>');
});
