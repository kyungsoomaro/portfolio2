//navItems를 전역변수로 생성
const navItems = document.querySelectorAll(".scrollNav li")

//스크롤 이벤트 생성
window.addEventListener("scroll", () => {
  //스크롤 이동값
  let sct = window.scrollY
  //모든 article요소를 선택
  const articles = document.querySelectorAll("section > article")
  //모든 article요소의 transform : translateZ값을 스크롤이동값을 대입
  articles.forEach((article, i) => {
    article.style.transform = `translateZ(${-5000 * i + sct}px)`;

    //현재 스크롤 위치에 따라 on클래스 추가/제거
    if(sct >= i * 5000 && sct < (i+1)* 5000) {//5000픽셀만큼 z축으로 이동하면 다음 article이 보여져야하므로 범위를 5000으로 제한
      //모든 article요소에 on클래스를 제거
      articles.forEach(a => a.classList.remove("on"))
      article.classList.add("on")//현재 순번의 article요소만 on클래스를 적용

      //모든 내비아이템에 on클래스를 제거
      navItems.forEach(item => item.classList.remove("on"))
      //해당 아티클과 같은 순번의 내비아이템만 on클래스 적용
      navItems[i].classList.add("on")
    }
  })
})

//내비게이션 클릭 이벤트
navItems.forEach((item, idx) => {
  //모든 내비게이션 아이템 요소에 클릭이벤트를 생성
  item.addEventListener("click", () => {
    //윈도우의 스크롤 위치를 클릭한 메뉴에 해당하는 article위치로 이동
    window.scrollTo({
      top : 5000 * idx,
      behavior : "smooth" //부드러운 스크롤 이동
    })
  })
})


//마우스 이동 이벤트
document.body.addEventListener("mousemove", (e) => {
  //마우스 좌표값 구하기(위치값에 특정값을 나눠서 값을 축소시킴)
  let posX = e.pageX / 100;
  let posY = e.pageY / 150;

  //각 객체의 위치에 대입하여 업데이트

  //1페이지

  document.querySelector('.obj11').style.left = (-270 - posX) + 'px'

  document.querySelector('.obj11').style.bottom = (-100 - posY) + 'px'


  document.querySelector('.obj12').style.right = (90 - posX) + 'px';

  document.querySelector('.obj12').style.top = (-185 + posY) + 'px';


  document.querySelector('.obj13').style.left = (100 + posX) + 'px';

  document.querySelector('.obj13').style.bottom = (180 + posY) + 'px';



  // 2페이지

  document.querySelector('.obj21').style.right = (-400 - posX) + 'px';

  document.querySelector('.obj21').style.bottom = (-220 - posY) + 'px';



  document.querySelector('.obj22').style.right = (-50 + posX) + 'px';

  document.querySelector('.obj22').style.bottom = (-100 + posY) + 'px';



  // 3페이지

  document.querySelector('.obj31').style.right = (110 - posX) + 'px';

  document.querySelector('.obj31').style.bottom = (70 - posY) + 'px';



  document.querySelector('.obj32').style.left = (200 - posX) + 'px';

  document.querySelector('.obj32').style.bottom = (30 - posY) + 'px';



  // 4페이지

  document.querySelector('.obj41').style.left = (350 + posX) + 'px';

  document.querySelector('.obj41').style.bottom = (-150 - posY) + 'px';



  document.querySelector('.obj42').style.right = (200 + posX) + 'px';

  document.querySelector('.obj42').style.top = (-250 - posY) + 'px';



  document.querySelector('.obj43').style.right = (-100 + posX) + 'px';

  document.querySelector('.obj43').style.bottom = (-120 + posY) + 'px';



  // 5페이지

  document.querySelector('.obj51').style.left = (-100 - posX) + 'px';

  document.querySelector('.obj51').style.bottom = (-200 - posY) + 'px';



  document.querySelector('.obj52').style.right = (320 + posX) + 'px';

  document.querySelector('.obj52').style.top = (-50 - posY) + 'px';



  document.querySelector('.obj53').style.left = (-30 + posX) + 'px';

  document.querySelector('.obj53').style.bottom = (-posY) + 'px';

})

