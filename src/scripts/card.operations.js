// card.operations.js
import * as $ from 'jquery';
const cardFlipping = function(el) {
  if ($(`#${el}`).attr('class') === 'flipped') {
    $(`#${el}`)
      .removeClass('flipped')
      .addClass('unFlipped');
    $(`#${el}`).flip(false);
  } else {
    $(`#${el}`)
      .removeClass('unFlipped')
      .addClass('flipped');
    $(`#${el}`).flip(true);
  }
};

export { cardFlipping };
