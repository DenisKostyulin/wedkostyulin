
new Swiper('.swiper', 
{
  direction: 'horizontal',
  loop: true,
  grabCursor:true,
  spaceBetween:30,

  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard:{
    enabled:true,
    onlyInViewport:true,
    pageUpDown:true,
  },

  autoplay:{
    delay:5000,
    stopOnLastSlide:false,
    disableOnInteraction:false,
  },

  speed:2000,
});