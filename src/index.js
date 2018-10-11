import * as $ from 'jquery';
import * as questionsOperations from './scripts/questions.oparations.js';
import * as questions from './scripts/database.js';
import * as flip from './scripts/jquery.flip.min.js';
import * as cardOperations from './scripts/card.operations.js';
import { createAnswersElements } from './scripts/createAnswersElements';

const newCardSet = questionsOperations.createCardSet(0, 2);
$('#cardText').append(`<p>${newCardSet[0].question}<p>`);
$('#cardDescription').append(`<p>${newCardSet[0].longDescription}<p>`);
$('#card').flip({ axis: 'x', trigger: 'manual' });

const answersContainer = createAnswersElements(newCardSet[0].answers);
$('#answers').append(answersContainer);

$('#flipBtn').bind('click', () => {
  cardOperations.cardFlipping('card');
});
