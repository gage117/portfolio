const handleMenuDropdownClick = function() {
  $('.menu-button-container').click(() => {
    $('.nav-list').toggleClass('hide-nav');
    $('.fa-signal').toggleClass('rotate180');
  });
};

const main = function() {
  console.log('test');
  handleMenuDropdownClick();
};

$(main);