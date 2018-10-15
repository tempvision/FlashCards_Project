import { visualizer } from './visualizer.js';
import * as $ from 'jquery';
const statScreenUpdate = () => {
    visualizer('statScreenDiv');

    $('#totalAnsweredQuestions').empty()
        .append(`${window.localStorage.totalQuestionsAmount}`);
    $('#correctAnswers').empty()
        .append(`${window.localStorage.totalCorrectQuestionsAmount}`);
    $('#successRate').empty()
    .append(`${Math.floor(window.localStorage.totalCorrectQuestionsAmount * 100
            / window.localStorage.totalQuestionsAmount) || 0}`);

    $(`#clearStatsButton`)
        .bind('click', () => {
            window.localStorage.totalCorrectQuestionsAmount = '0';
            window.localStorage.totalQuestionsAmount = '0';
            statScreenUpdate();
        });
};

export { statScreenUpdate };
