import * as $ from 'jquery';
import { init } from './scripts/init.js';


const [catName, cardAmount] = ['jsBasics', 5];


$('#start').bind('click', () => {
  init(catName, cardAmount);
  $('#start').hide();
});


// slide down and fade in to the answers
$('.btn-animate').append('<p>Аnswer_Аnswer_Аnswer_Аnswer_Аnswer</p>')
  .hide()
  .slideDown(1200, 'swing')
  .css('opacity', 0)
  .animate({ opacity: 1 }, { queue: false, duration: 1000 });

