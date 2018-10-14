import * as $ from 'jquery';
import { init } from './scripts/init.js';

const [catName, cardAmount, difficulty] = ['CS', 5, 'easy'];
$('#quizMode').click(() => {
  startQuiz();
});
// const skipButton = function() {
//   currentSet.unshift(currentQuestion);
//   createNext();
// };
const startQuiz = async function() {
  $('#wrapper')
    .html('')
    .append('<div id="flip-box"></div>');
  $('#flip-box').append('<div id="card" class="deg0"></div>');
  $('#card').append(
    '<div id="cardText"></div><div id="cardDescription"></div>'
  );
  $('#wrapper').append(' <div id="inQuiz">QUIZ</div>');
  await init(catName, cardAmount, difficulty);
};
$('#selectMode').click(async () => {
  $('#wrapper')
    .html('')
    .append('<div class="half"></div><div class="half"></div>')
    .append('<div id="learnMode" class="modeBtn">LEARN</div>')
    .append('<div id="quizMode" class="modeBtn">QUIZ</div>');
  await $('#quizMode').click(() => {
    startQuiz();
  });
});
