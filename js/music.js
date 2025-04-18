const frame = document.querySelector("section")
const lists = document.querySelectorAll("article")
const prev = document.querySelector('.btnPrev')
const next = document.querySelector('.btnNext')
const audio = document.querySelectorAll("audio")

const deg = 45; //각각의 article요소가 회전할 각도
const len = lists.length-1; //순번이 0부터 시작하므로 전체 개수에서 1을 빼줌
let i = 0;//article의 갯수를 카운트 할 변수
let num = 0; //좌우 버튼을 클릭할 때마다 frame요소를 회전하기 위한 카운트 값으로 활용하기 위한 변수

let active = 0; //활성화 패널의 순번이 저장될 변수
function activation(index){//매개변수로 순번을 전달
  //모든 article요소에 on클래스를 제거
  lists.forEach(el => el.classList.remove("on"))
  //해당 순번의 article요소에만 on클래스를 추가하여 활성화
  lists[index].classList.add("on")
}

//모든 오디오 요소를 반복하면서 정지시키고 .pic요소의 모션을 중지해서 초기화하는 함수
function initMusic(){
  audio.forEach(el => {
    el.pause();
    el.load();
    el.closest("article").querySelector(".pic").classList.remove("on");
  })
}


//prev버튼 클릭시
prev.addEventListener("click", () => {
  //음악 초기화 함수 실행
  initMusic()
  //num값을 증가시키며 frame 45도 만큼 증가시키며 시계방향으로 회전
  num++;
  frame.style.transform = `rotate(${deg*num}deg)`;
  //현재 패널의 순번이 0이면 다시 마지막 패널의 순번으로 변경합니다 그렇지 않으면 현재 패널 순번에서 1씩 감소시켜서 activation함수를 호출, 인자로 active를 전달(요소의 순번)
  (active === 0) ? active = len : active--;
  activation(active);
})

//next버튼 클릭시
next.addEventListener("click", () => {
  //음악 초기화 함수 실행
  initMusic()
  //num값을 증가시키며 frame 45도 만큼 감소시키며 시계방향으로 회전
  num--;
  frame.style.transform = `rotate(${deg*num}deg)`;
  //현재 패널의 순번이 마지막 순번이면 다시 처음 패널의 순번으로 변경합니다 그렇지 않으면 현재 패널 순번에서 1씩 증가시켜서 activation함수를 호출, 인자로 active를 전달(요소의 순번)
  (active === len) ? active = 0 : active++;
  activation(active);
})


lists.forEach(el => {
  //모든 article요소의 자손인 pic요소를 선택
  const pic = el.querySelector(".pic")
  //배경이미지 추가, index는 0부터지만 이미지는 1부터이므로 i+1로 작성 
  pic.style.backgroundImage = `url(../portfolio2/images/member${i+1}.jpg)`;

  //모든 article요소를 45도씩 회전하고 아래로 배치
  el.style.transform = `rotate(${deg*i}deg) translateY(-100vh)`;
  i++;//i값을 1씩 증가

  //각 article요소 안쪽의 재생, 정지, 처음부터 재생 버튼을 선택
  const aPlay = el.querySelector(".play");
  const aPause = el.querySelector(".pause");
  const aLoad = el.querySelector(".load");
  
  //play버튼에 클릭 이벤트 생성
  aPlay.addEventListener("click", (e) => {
    //선택자.closest("요소") = 선택자의 부모(조상)요소까지 검색하여 해당 "요소"를 찾아주는 메서드

    //이벤트가 발생된 요소(.play요소)를 기준으로 부모(조상)요소인 article을 찾아서 그 자손인 .pic를 선택,on클래스를 추가하여 활성화
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on")

    //audoo요소를 선택하여 음악 재생
    e.currentTarget.closest("article").querySelector("audio").play();
  })

  //pause버튼에 클릭 이벤트 생성
  aPause.addEventListener("click", (e) => {
    //.pic에 on클래스를 제거하여 애니메이션 종료
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on")

    //음악 정지
    e.currentTarget.closest("article").querySelector("audio").pause();
  })

  //load버튼에 클릭 이벤트 생성
  aLoad.addEventListener("click", (e) => {
    //.pic에 on클래스를 추가하여 애니메이션 시작
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on")

    //음악을 다시 로드하고 재생
    e.currentTarget.closest("article").querySelector("audio").load();
    e.currentTarget.closest("article").querySelector("audio").play();
  })
});


const bClose = document.querySelector(".close");
const sidebar = document.querySelector(".menu");

//메뉴버튼에 클릭이벤트 생성
bClose.addEventListener("click", () => {
  //sidebar에 on클래스를 추가 또는 제거
  sidebar.classList.toggle("on")
})
