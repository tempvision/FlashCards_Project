import * as $ from 'jquery';
import * as questionsOperations from './scripts/questions.oparations.js';
import * as questions from './scripts/database.js';
import * as flip from './scripts/jquery.flip.min.js';
import * as cardOperations from './scripts/card.operations.js';
import createAnswersElements from './scripts/createAnswersElements';
import createCardAnswersPair from './scripts/createCardAnswersPair.js';

const [catName, cardAmount] = ['jsBasics', 5];

const startTest = function(catName, cardAmount) {
  console.log('start');
  const newCardSet = questionsOperations.createCardSet(catName, cardAmount);
  console.log(newCardSet);
  createCardAnswersPair(newCardSet);
  $('#start').hide();
};

$('#start').bind('click', () => {
  startTest(catName, cardAmount);
});
