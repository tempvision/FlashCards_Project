import * as $ from 'jquery';
import * as questionsOperations from './scripts/questions.oparations.js';
import * as questions from './scripts/database.js';
import * as flip from './scripts/jquery.flip.min.js';
import * as cardOperations from './scripts/card.operations.js';

const newCardSet = questionsOperations.createCardSet('JSAdvanced', 2);
$('#cardText').append(`<p>${newCardSet[0].question}<p>`);
$('#cardDescription').append(`<p>${newCardSet[0].longDescription}<p>`);
$('#card').flip({ axis: 'x', trigger: 'manual' });

$('#flipBtn').bind('click', () => {
  cardOperations.cardFlipping('card');
});
