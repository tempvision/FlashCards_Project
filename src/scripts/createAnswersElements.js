import shuffle from './shuffle.js';
import * as $ from 'jquery';
import * as checkIsRight from './checkIfTrue.js'
const createAnswersElements = function(answers) {
  const answersToOutput = shuffle(answers, 3);
    $('body').append('<div id="answersContainer"></div>');
  answersToOutput.forEach((element, i) => {
    console.log('append', i);
    $('#answersContainer').append(
      `<div id="ans${i}" class="ansBtn">${element.text}</div>`
    ).bind('click', () => {
        checkIsRight(`ans${i}`);
  });  
 }
}

export { createAnswersElements }
