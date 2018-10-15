import * as $ from 'jquery';

const visualizer = function(menuButtonId) {
    $('#wrapper')
        .children()
        .hide();
    $(`#${menuButtonId}`).show();
};

export { visualizer };
