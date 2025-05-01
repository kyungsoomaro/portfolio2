const topBtn = document.querySelector(".topbtn");
const topMenu = document.querySelector(".topwrap");
const header = document.querySelector("header")
const logoImg = document.querySelector(".wrap .uphead .headLeft ul li:first-child")

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
//   console.log(scroll)
  if (scroll >= 50) {
    topBtn.style.display = "block";
    header.style.opacity = 0.7;
    document.querySelector(".headRight").classList.add("on")
    logoImg.style.display="block"
    // topMenu.style.display = "block";
  } else {
    topBtn.style.display = "none";
    header.style.opacity = 1;
    document.querySelector(".headRight").classList.remove("on")
    logoImg.style.display="none"
    // topMenu.style.display = "none";
  }
})

topBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
})

const login = document.querySelector(".login");
    function popup(){
      login.style.display = "block";
    }

    function pClose(){
      login.style.display = "none";
    }

    window.addEventListener("click",function(e){
      console.log(e.target)
      if(e.target === login){
        login.style.display = "none";
      }
    });