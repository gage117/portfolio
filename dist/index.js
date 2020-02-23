const handleMenuDropdownClick = function() {
  $('.icon').click(() => {
    $('.nav-list-container').toggleClass('active');
    $('.icon').toggleClass('active');
  });
};

const handleMenuItemClick = function() {
  $('.nav-list-item').click((e) => {
    $('.nav-list-container').toggleClass('active');
    $('.icon').toggleClass('active');
    let element = $(e.currentTarget).find('a').attr('href');
    var offset = $(element).offset();
    var scrollto = offset.top - 50; // minus fixed header height
    $(document.body).animate({scrollTop:scrollto}, 0);
  });
};

const main = function() {
  handleMenuDropdownClick();
  handleMenuItemClick();
};

$(main);