import flashCardsSets from '../../db/database.js';
import * as $ from 'jquery';


const categoriesDropdownMenuLoad = function() {
    const allCategories = Object.keys(flashCardsSets);
    allCategories.forEach((el) => {
        $('#categoryDropdown').append(
            `<span id="${el}" class="DdMenuElement">${
            flashCardsSets[el].categoryName
            }</span>`
        );
    });
    $('#categoryDropdown').append(
        `<span id="all" class="DdMenuElement">All Categories</span>`
    );
    $('#categoryDropdown').append(
        `<span id="CS" class="DdMenuElement">API opentdb.com</span>`
    );

    $('#categoryDropdown').mouseleave((event) => {
        $('#categoryDropdown').hide();
    });
};

export { categoriesDropdownMenuLoad };
