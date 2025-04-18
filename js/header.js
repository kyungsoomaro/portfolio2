const topBtn = document.querySelector(".topbtn");
const topMenu = document.querySelector(".topwrap");

window.addEventListener('scroll', () => {
  let scroll = window.scrollY;
//   console.log(scroll)
  if (scroll >= 100) {
    topBtn.style.display = "block";
    topMenu.style.display = "block";
  } else {
    topBtn.style.display = "none";
    topMenu.style.display = "none";
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