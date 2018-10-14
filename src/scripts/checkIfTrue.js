import * as $ from 'jquery';
const checkIfTrue = function(id, answers) {
  // check if none of the first three is true
  if (id === 3) {
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
    return areAllFalse;
  }
  // check if the answer is true
  if (answers[id].rigth) {
    window.sessionStorage.correctAmount++;
    $(`#ans${id}`).addClass('rightAnswer');
    return true;
  }
  $(`#ans${id}`).addClass('wrongAnswer');
  return false;
};

export { checkIfTrue };
