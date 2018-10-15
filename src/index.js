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
$('#statScreen').bind('click', () => {
  statScreenLoad();
});

const visualizer = function(menuButtonId) {
  $('#wrapper').children().hide();
    $(`#${menuButtonId}`).show();
  };

visualizer("statScreenDiv");
const categoriesDropdownMenuLoad = function() {
  const allCategories = Object.keys(flashCardsSets);
  allCategories.forEach((el) => {
    $('#categoryDropdown').append(
      `<span id="${el}">${flashCardsSets[el].categoryName}</span>`
    );
  });
};
categoriesDropdownMenuLoad();

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

const statScreenLoad = () => {
  //visualizer('statScreenDiv');

  $('#totalAnsweredQuestions')
  .append(`${window.localStorage.totalQuestionsAmount}`);
  $('#correctAnswers')
  .append(`${window.localStorage.totalCorrectQuestionsAmount}`);
  $('#successRate')
  .append(`${Math.floor(window.localStorage.totalCorrectQuestionsAmount*100
                        /window.localStorage.totalQuestionsAmount)}`);

  $(`#clearStatsButton`)
  .bind('click', () => {
    window.localStorage.totalCorrectQuestionsAmount='0';
    window.localStorage.totalQuestionsAmount='0';
    statScreenLoad();
  });
};

const aboutPage = function() {
  $('#about').bind('click', () => {
    $('.aboutPage').css('display', 'block');
    $('#firstScreen').css('display', 'none');
    $('#cardScreen').css('display', 'none');
  });
};

aboutPage();
