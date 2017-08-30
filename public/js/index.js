// Your code here
const $window = $(window);
const $header = $("header");
$window.on("scroll", function() {
  const pos = $window.scrollTop();

  // YOUR CODE HERE

  // If the page position (pos) is higher than, say, 220
  pos > 220 ? $header.addClass("active") : $header.removeClass("active")
  // add the class `active`.
  const wintop = $window.scrollTop()
  $('section').each((idx, section) => {
      const $section = $(section)
      const sectop = $section.offset().top
      const winbot = wintop + $window.height()
      if (sectop >= wintop && sectop <= winbot) $section.addClass('active')
      else $section.removeClass('active')
  })
  
  $('.carousel-image').css('top', wintop/2)
  
});

let counter = 0
const images = ['brightsun', 'city', 'montains', 'underwater']
setInterval(() => {
    $('.carousel-image').removeClass('visible')
    const c = $('.carousel-image')[counter++ % 4]
    $(c).addClass('visible')
}, 5000)