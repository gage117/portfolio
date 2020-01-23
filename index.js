import $ from 'jquery';

const handleMenuDropdownClick = function() {
  $('.menu-button-container').click(() => {
    $('.nav-list').toggleClass('hide-nav');
  });
};

const main = function() {
  console.log('test');
  handleMenuDropdownClick();
};

$(main);