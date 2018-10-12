import createAnswersElements from './createAnswersElements.js';
import * as $ from 'jquery';
const createCardAnswersPair = function(currentCardSet) {
  const questionObject = currentCardSet.pop();
  console.log('card creatting');
  $('#cardText').append(`<p>${questionObject.question}<p>`);
  // $('#cardDescription').append(`<p>${questionObject.longDescription}<p>`);
  $('#card').flip({ axis: 'x', trigger: 'manual' });
  createAnswersElements(questionObject.answers, currentCardSet);
};
export default createCardAnswersPair;
