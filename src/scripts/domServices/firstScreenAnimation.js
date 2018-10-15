import * as $ from 'jquery';
const firstScreenAnimation = function() {
  $('#left').bind('mouseover', () => {
    $('.half').addClass('halfActive');
  });
  $('#right').bind('mouseover', () => {
    $('.half').removeClass('halfActive');
  });
};
export default firstScreenAnimation;
