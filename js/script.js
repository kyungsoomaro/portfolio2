//페이지 로드 이벤트
window.addEventListener("load", () => {
  //첫번째 인자 = 배치할 요소를 감싸고 있는 부모 요소
  const grid = new Isotope("section", {
    itemSelector : 'article', //배치할 요소명
    columnWidth : 'article', //넓이값을 구할 요소명
    transitionDuration : "0.5s"//화면 재배치시 요소가 움직이는 속도
  });
  
  //클릭할 모든 버튼요소를 변수에 저장
  const btns = document.querySelectorAll("main ul li")
  
  //모든 버튼에 클릭이벤트 생성
  btns.forEach(el => el.addEventListener("click", (e) => {
  e.preventDefault();//버튼의 링크 기능을 제거
  
  //변수에 클릭한 대상의 자식인 a요소의 href속성값을 저장
  const sort = e.currentTarget.querySelector("a").getAttribute("href");
  console.log(sort)
  //grid에 저장된 결과값을 불러와 재정렬 기능 연결(arrange함수)
  grid.arrange({
    filter : sort //옵션값으로 sort변수값 지정
  })
  //다시 모든 버튼을 돌면서 각버튼에 on클래스를 제거해 비활성화
  btns.forEach(btn => btn.classList.remove("on"))
  //클릭한 대상만 선택해서 on클래스를 추가해 활성화
  el.classList.add("on")
  }))
  })