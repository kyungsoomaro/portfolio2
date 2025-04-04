const topBtn = document.querySelector(".topbtn");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY; 
  if(scroll >= 100){
    topBtn.style.display = "block";
  } else { 
    topBtn.style.display = "none";
  }
})

topBtn.addEventListener("click", () => {
 
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth" 
  })
})

const topMenu = document.querySelector(".topwrap");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY;
  if(scroll >= 100) {
    topMenu.style.display = "block";
  } else { 
    topMenu.style.display = "none";
  }
})