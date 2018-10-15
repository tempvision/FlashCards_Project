import * as $ from 'jquery';
import { init } from './scripts/init.js';
import firstScreenAnimation from './scripts/firstScreenAnimation.js';
import flashCardsSets from './scripts/database.js';

let catName = 'all';
const cardAmount = 5;
const difficulty = 'easy';
$('.modeBtn').click((event) => {
  $(event.target).addClass('active');
  startQuiz();
});
$('#category').click((event) => {
  $(event.target).addClass('active');
  $('#categoryDropdown').show();
});
$('#statScreen').bind('click', () => {
  statScreenLoad();
});

const visualizer = function(menuButtonId) {
  $('#wrapper')
    .children()
    .hide();
  $(`#${menuButtonId}`).show();
};

// visualizer('statScreenDiv');

const categoriesDropdownMenuLoad = function() {
  const allCategories = Object.keys(flashCardsSets);
  allCategories.forEach((el) => {
    $('#categoryDropdown').append(
      `<span id="${el}" class="DdMenuElement">${
      flashCardsSets[el].categoryName
      }</span>`
    );
  });
  $('#categoryDropdown').append(
    `<span id="all" class="DdMenuElement">All Categories</span>`
  );
  $('#categoryDropdown').append(
    `<span id="CS" class="DdMenuElement">API opentdb.com</span>`
  );
};
categoriesDropdownMenuLoad();

$('.DdMenuElement').click((event) => {
  $('#categoryDropdown').hide();
  $('#category')
    .empty()
    .text($(event.target).text());
  catName = event.target.id;
});
$('#categoryDropdown').mouseleave((event) => {
  $('#categoryDropdown').hide();
});
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
  visualizer('firstScreen');
});

firstScreenAnimation();

const statScreenLoad = () => {
  visualizer('statScreenDiv');

  $('#totalAnsweredQuestions').empty()
    .append(`${window.localStorage.totalQuestionsAmount}`);
  $('#correctAnswers').empty()
    .append(`${window.localStorage.totalCorrectQuestionsAmount}`);
  $('#successRate').empty()
    .append(`${Math.floor(window.localStorage.totalCorrectQuestionsAmount * 100
      / window.localStorage.totalQuestionsAmount)}`);

  $(`#clearStatsButton`)
    .bind('click', () => {
      window.localStorage.totalCorrectQuestionsAmount = '0';
      window.localStorage.totalQuestionsAmount = '0';
      statScreenLoad();
    });
};

$('#statScreenBtn').bind('click', () => statScreenLoad());

  $('#about').bind('click', () => {
    visualizer('aboutPage');
  });
