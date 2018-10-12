import * as $ from 'jquery';

const endSession = function() {
    const totalCorrect = window.sessionStorage.correctAmount;
    const questionsAmount = window.sessionStorage.questionsAmount;
    $('#card').empty();
    $('#answersContainer').empty();

$('body').append(`<div id="results">Your result: ${totalCorrect}/${questionsAmount}</div>`);
};


export default endSession;
