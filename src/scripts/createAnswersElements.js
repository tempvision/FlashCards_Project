import shuffle from './shuffle.js';
import * as $ from 'jquery';
// import checkIfTrue from './checkIfTrue.js';
import createCardAnswersPair from './createCardAnswersPair.js';
const showResults = function() {
  console.log('results');
};
const checkIfTrue = function() {
  return function(id) {
    console.log('cheking');
    if (questionMap.get(id)) console.log('true');
    else console.log('false');
  };
};
const createAnswersElements = function(answers, currentSet) {
  const isTneCardSetEmpty = function() {
    if (currentSet.length) {
      return createCardAnswersPair(currentSet);
    }
    return showResults();
  };
  const answersToOutput = shuffle(answers, 3);
  $('body').append('<div id="answersContainer"></div>');
  answersToOutput.forEach((element, i) => {
    console.log('append', i);
    $('#answersContainer').append(
      `<div id="ans${i}" class="ansBtn">${element.text}</div>`
    );
    $(`#ans${i}`).bind('click', () => {
      console.log('cheking');
      // checkIfTrue(`ans${i}`);
      isTneCardSetEmpty();
    });
  });
};

export default createAnswersElements;
