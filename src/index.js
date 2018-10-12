import * as $ from 'jquery';
import { init } from './scripts/init.js';


const [catName, cardAmount] = ['jsBasics', 5];


$('#start').bind('click', () => {
  init(catName, cardAmount);
  $('#start').hide();
});


