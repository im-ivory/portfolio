$( 'html, body' ).stop().animate( { scrollTop : 744 } ) 
$( 'html, body' ).stop().animate( { scrollTop : '+=744' } )

var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    loop: true,
  });