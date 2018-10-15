import * as $ from 'jquery';
import firstScreenAnimation from './domServices/firstScreenAnimation.js';
import { categoriesDropdownMenuLoad } from './domServices/categoriesDropdownMenuLoad.js';

import { statScreenUpdate } from './domServices/statScreenUpdate.js';
import { visualizer } from './domServices/visualizer.js';
let catName = 'all';
const cardAmount = 5;
const difficulty = 'easy';
const menuActiveSwitch = (element) => {
  $('.menuActive').removeClass('menuActive');
  $(element).addClass('menuActive');
  $('.modeBtn').removeClass('active');
  $('#card').css('transform', 'rotateX(0deg)');
};

firstScreenAnimation();
categoriesDropdownMenuLoad();

$('#selectMode').click((event) => {
  menuActiveSwitch(event.target);
  visualizer('firstScreen');
});

$('#category').click((event) => {
  $(event.target).addClass('active');
  $('#categoryDropdown').show();
  $('.modeBtn active').removeClass('active');
});

$('#statScreenBtn').click((event) => {
  menuActiveSwitch(event.target);
  statScreenUpdate();
});

$('#about').click((event) => {
  menuActiveSwitch(event.target);
  visualizer('aboutPage');
});

$('.DdMenuElement').click((event) => {
  $('#categoryDropdown').hide();
  $('#category')
    .empty()
    .text($(event.target).text());
  catName = event.target.id;
});

const returnData = function() {
  return [catName, cardAmount, difficulty];
};
export { returnData, visualizer };
