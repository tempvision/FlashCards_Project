import shuffle from './shuffle.js';
import * as $ from 'jquery';
import { checkIfTrue } from './checkIfTrue.js';
import { createNext } from './createNext.js';

const createAnswersElements = function(answers) {
    answers = shuffle(answers, 3);
        $('body').append('<div id="answersContainer"></div>');
        answers.forEach((answer, i) => {
        $('#answersContainer').append(
            `<div id="ans${i}" class="ansBtn">${answer.text}</div>`);
        $(`#ans${i}`).bind('click', () => {
            checkIfTrue(i, answers);
            createNext();
        });
    });

    $('#answersContainer').append(
        `<div id="ans3" class="ansBtn">None of the above</div>`
    );


    $(`#ans3`).bind('click', () => {
        checkIfTrue(3, answers);
        createNext();
    });

    $('.ansBtn')
        .hide()
        .slideDown(800, 'swing')
        .css('opacity', 0)
        .animate({ opacity: 1 }, { queue: false, duration: 1000 });
};

export default createAnswersElements;
