
const mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 250,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    
  });


  const menu = document.querySelector('.nav')
  const menuBtn = document.querySelector('.burger')
 
 if (menu && menuBtn) {
   menuBtn.addEventListener('click', e => {
     menu.classList.toggle('active')
     menuBtn.classList.toggle('active')
     body.classList.toggle('lock')
   })
  }
