import * as $ from 'jquery';
const checkIfTrue = function(id, answers) {
  // check if none of the first three is true
  if (id === '3') {
    let areAllFalse = true;
    answers.forEach((answer) => {
      if (answer.rigth) {
        areAllFalse = false;
      }
    });
    if (areAllFalse) {
      // if all are false, then the answer is true!
      $(`#ans${id}`).addClass('rightAnswer');
      window.sessionStorage.correctAmount++;
    } else {
      $(`#ans${id}`).addClass('wrongAnswer');
    }
    console.log(areAllFalse);
    return areAllFalse;
  }
  // check if the answer is true
  if (answers[id].rigth) {
    console.log('afadsf');
    window.sessionStorage.correctAmount++;
    $(`#ans${id}`).addClass('rightAnswer');
    $('.ansBtn').unbind('click');
    return true;
  }
  $(`#ans${id}`).addClass('wrongAnswer');
  $('.ansBtn').unbind('click');
  return false;
};

export { checkIfTrue };
