import * as $ from 'jquery';
import { init } from './scripts/init.js';
// import firstScreenAnimation from './scripts/firstScreenAnimation.js';
import flashCardsSets from './scripts/database.js';

// const [catName, cardAmount, difficulty] = ['JSBasics', 5, 'easy'];
const [catName, cardAmount, difficulty] = ['JSBasics', 5, 'easy'];
$('.modeBtn').click((event) => {
  $(event.target).addClass('active');
  startQuiz();
});

const categoryesDropdownMenuLoad = function() {
  const allCategories = Object.keys(flashCardsSets);
  allCategories.forEach((el) => {
    $('#categoryDropdown').append(
      `<span id="${el}">${flashCardsSets[el].categoryName}</span>`
    );
  });
};
categoryesDropdownMenuLoad();

const startQuiz = function() {
  $('#results')
    .hide()
    .html('');
  $('#firstScreen').hide();
  init(catName, cardAmount, difficulty);
  $('#cardScreen').css('display', 'flex');
  $('#flip-box').show();
};

$('#selectMode').click(() => {
  $('#cardScreen').hide();
  $('.aboutPage').hide();
  aboutPage();
  $('#firstScreen').css('display', 'flex');
  $('.modeBtn').removeClass('active');
});
const firstScreenAnimation = function() {
  $('#left').bind('mouseover', () => {
    $('.half').addClass('halfActive');
  });
  $('#right').bind('mouseover', () => {
    $('.half').removeClass('halfActive');
  });
};
firstScreenAnimation();


const aboutPage = function() {
  $('#about').bind('click', () => {
    $('.aboutPage').css('display', 'block');
    $('#firstScreen').css('display', 'none');
    $('#cardScreen').css('display', 'none');
  });
};

aboutPage();
