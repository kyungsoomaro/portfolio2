const topBtn = document.querySelector(".topbtn");
const topMenu = document.querySelector(".topwrap");

window.addEventListener("scroll", () => {
  let scroll = window.scrollY; 
  if(scroll >= 100){
    topBtn.style.display = "block";
    topMenu.style.display = "block";
  } else { 
    topBtn.style.display = "none";
    topMenu.style.display = "none";
  }
})

topBtn.addEventListener("click", () => {
 
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth" 
  })
})






let eventhandler = true;
const slide = document.querySelector('.filmoimg');
const filmoImg = slide.firstElementChild
// const filmoImgs = document.querySelectorAll(".filmoimg img")
// const imgCount = filmoImgs.length

// function imgResize(){
//   const imgWd = filmoImg.offsetWidth
//   console.log(imgWd* imgCount)
//   slide.style.width = imgWd * imgCount + "px"
// }

// imgResize()

// window.addEventListener("resize",() => {
//   imgResize()
// })


document.querySelector('.filmo .next').addEventListener('click', () => {
  if (eventhandler) {
    eventhandler = false; 
    const imgWd = filmoImg.offsetWidth;
    // console.log(imgWd)
    slide.style.transition = "margin-left .5s";
    slide.style.marginLeft = -imgWd+"px";
  
    setTimeout(function(){
      eventhandler = true;
      const first = slide.firstElementChild
      slide.appendChild(first)

      slide.style.transition = "";
      slide.style.marginLeft = "0px"; 
    },500)
  }
});

document.querySelector('.filmo .prev').addEventListener('click', () => {
  if (eventhandler) {
    eventhandler = false; 
    const imgWd = filmoImg.offsetWidth;
    
    slide.style.transition = "none"; 
    slide.style.marginLeft = -imgWd + "px";

    
    const last = slide.lastElementChild;
    slide.insertBefore(last, slide.firstElementChild);

    setTimeout(() => {
      slide.style.transition = "margin-left .5s";
      slide.style.marginLeft = "0px"; 

      eventhandler = true;
    }, 50);
  }
});


let deventhandler = true;
const dslide = document.querySelector('.discoimg');
const discoImg = dslide.firstElementChild



document.querySelector('.disco .next').addEventListener('click', () => {
  if (deventhandler) {
    deventhandler = false; 
    const imgWd = discoImg.offsetWidth;
    dslide.style.transition = "margin-left .5s";
    dslide.style.marginLeft = -imgWd+"px";
  
    setTimeout(function(){
      deventhandler = true;
      const first = dslide.firstElementChild
      dslide.appendChild(first)

      dslide.style.transition = "";
      dslide.style.marginLeft = "0px"; 
    },500)
  }
});

document.querySelector('.disco .prev').addEventListener('click', () => {
  if (deventhandler) {
    deventhandler = false; 
    const imgWd = discoImg.offsetWidth;
    
    dslide.style.transition = "none"; 
    dslide.style.marginLeft = -imgWd + "px";

    
    const last = dslide.lastElementChild;
    dslide.insertBefore(last, dslide.firstElementChild);

    setTimeout(() => {
      dslide.style.transition = "margin-left .5s";
      dslide.style.marginLeft = "0px"; 

      deventhandler = true;
    }, 50);
  }
});

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