import * as $ from 'jquery';

const endSession = function() {
<<<<<<< HEAD
  const totalCorrect = window.sessionStorage.correctAmount;
  const questionsAmount = window.sessionStorage.questionsAmount;

  // writing down some stats in the local storage

  if (
    window.localStorage.totalQuestionsAmount ||
    window.localStorage.totalQuestionsAmount === '0'
  ) {
    window.localStorage.totalQuestionsAmount =
      Number(window.localStorage.totalQuestionsAmount) +
      Number(questionsAmount);
  } else {
    window.localStorage.totalQuestionsAmount = questionsAmount;
  }
  if (
    window.localStorage.totalCorrectQuestionsAmount ||
    window.localStorage.totalQuestionsAmount === '0'
  ) {
    window.localStorage.totalCorrectQuestionsAmount =
      Number(window.localStorage.totalCorrectQuestionsAmount) +
      Number(totalCorrect);
  } else {
    window.localStorage.totalCorrectQuestionsAmount = totalCorrect;
  }
=======
    const totalCorrect = window.sessionStorage.correctAmount;
    const questionsAmount = window.sessionStorage.questionsAmount;

    // writing down some stats in the local storage

    if (window.localStorage.totalQuestionsAmount||window.localStorage.totalQuestionsAmount==='0') {
        window.localStorage.totalQuestionsAmount = Number(window.localStorage.totalQuestionsAmount) + Number(questionsAmount);
    } else {
        window.localStorage.totalQuestionsAmount = questionsAmount;
    }
    if (window.localStorage.totalCorrectQuestionsAmount||window.localStorage.totalQuestionsAmount==='0') {
       window.localStorage.totalCorrectQuestionsAmount = Number(window.localStorage.totalCorrectQuestionsAmount) + Number(totalCorrect);
    } else {
        window.localStorage.totalCorrectQuestionsAmount = totalCorrect;
    }

    $('#card').empty();
    $('#answersContainer').empty();

    // display the results
    $('body').append(`<div id="results">Your result: ${totalCorrect}
                                                    /${questionsAmount}</div>`);
};
>>>>>>> master

  $('#card').empty();
  $('#answersContainer').empty();

  // display the results
  $('#wrapper').append(`<div id="results">Your result: ${totalCorrect}
                                                    /${questionsAmount}</div>`);
};

export default endSession;
