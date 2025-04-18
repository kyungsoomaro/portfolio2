const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal', //슬라이드 방향(horizontal = 가로, vertical = 세로)
  loop: true, //한쪽 방향으로 무한 슬라이드

  // If we need pagination
  pagination: { //닷버튼
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: { //화살표 버튼
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: { //스크롤바 표시
    el: '.swiper-scrollbar',
  },
});
