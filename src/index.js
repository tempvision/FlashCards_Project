import * as $ from 'jquery';
import { init } from './scripts/init.js';
// import firstScreenAnimation from './scripts/firstScreenAnimation.js';
import flashCardsSets from './scripts/database.js';

// const [catName, cardAmount, difficulty] = ['JSBasics', 5, 'easy'];
let [catName, cardAmount, difficulty] = ['JSBasics', 5, 'easy'];
$('.modeBtn').click((event) => {
  $(event.target).addClass('active');
  startQuiz();
});
<<<<<<< HEAD
$('#category').click((event) => {
  $(event.target).addClass('active');
  $('#categoryDropdown').show();
});
=======
$('#statScreen').bind('click', () => {
  statScreenLoad();
});

const visualizer = function(menuButtonId) {
  $('#wrapper').children().hide();
    $(`#${menuButtonId}`).show();
  };
>>>>>>> 430d66697b989180eebedb889d545a2a9b303574

visualizer("statScreenDiv");
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

<<<<<<< HEAD
=======
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

>>>>>>> 430d66697b989180eebedb889d545a2a9b303574
const aboutPage = function() {
  $('#about').bind('click', () => {
    $('.aboutPage').css('display', 'block');
    $('#firstScreen').css('display', 'none');
    $('#cardScreen').css('display', 'none');
  });
};

aboutPage();
