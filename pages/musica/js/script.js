import Swiper from 'swiper';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    hashNavigation: true,

      // Default parameters
    slidesPerView: 'auto',
    spaceBetween: 33,
    centeredSlides: true,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    speed: 500,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    on:{
        init: function(){
            const img = document.querySelectorAll('img');
            const activeIndex = this.realIndex;
            const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
            const activeImg = activeSlide.getElementsByTagName('img')[0];
        }
    },
    slideChange: function(){
        const img = document.querySelectorAll('img');
        const activeIndex = this.realIndex;
        const activeSlide = document.getElementsByClassName('swiper-slide')[activeIndex];
        const activeImg = activeSlide.getElementsByTagName('img')[0];
    }

});