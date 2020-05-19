const handleMenuDropdownClick = function() {
  $('.icon').click(() => {
    $('.nav-list-container').toggleClass('active');
    $('.icon').toggleClass('active');
  });
};

const handleMenuItemClick = function() {
  $('.nav-list-item').click((e) => {
    e.preventDefault();
    $('.nav-list-container').toggleClass('active');
    $('.icon').toggleClass('active');
    let element = $(e.currentTarget).find('a').attr('href');
    var scrollto = $(element).offset().top - 50; // minus fixed header height
    $('html, body').animate({scrollTop: scrollto}, 0);
  });
};

const main = function() {
  handleMenuDropdownClick();
  handleMenuItemClick();
};

$(main);