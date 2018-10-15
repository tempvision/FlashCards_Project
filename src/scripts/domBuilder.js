import * as $ from 'jquery';
import { init } from './init.js';
import firstScreenAnimation from './domServices/firstScreenAnimation.js';

import { categoriesDropdownMenuLoad }
    from './domServices/categoriesDropdownMenuLoad.js';

import { statScreenUpdate } from './domServices/statScreenUpdate.js';
import { visualizer } from './domServices/visualizer.js';
let catName = 'all';
const cardAmount = 5;
const difficulty = 'easy';


firstScreenAnimation();
categoriesDropdownMenuLoad();

$('#selectMode').click(() => {
    visualizer('firstScreen');
});


$('#category').click((event) => {
    $(event.target).addClass('active');
    $('#categoryDropdown').show();
});

$('#statScreenBtn').click(() => {
    statScreenUpdate();
});


$('#about').click(() => {
    visualizer('aboutPage');
});


$('.DdMenuElement').click((event) => {
    $('#categoryDropdown').hide();
    $('#category')
        .empty()
        .text($(event.target).text());
    catName = event.target.id;
});


const returnData = function() {
    return [catName, cardAmount, difficulty];
};
export { returnData, visualizer };
