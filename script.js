AOS.init(); //Animate on scroll
let control=true;


let menu = document.querySelector(".menu");
let ul = document.querySelector(".navbar");
window.addEventListener("resize", () => {
  menu.classList.remove("fa-xmark");
  menu.classList.add("fa-bars")
  ul.classList.add("-translate-x-full");
});
menu.addEventListener("click", () => {
  if(control==true){
  menu.classList.remove("fa-bars")
  menu.classList.add("fa-xmark");
  ul.classList.remove("-translate-x-full");
  control=!control;
}
else{
  menu.classList.remove("fa-xmark");
  menu.classList.add("fa-bars")
  ul.classList.add("-translate-x-full");
  control=!control;
  }
});
$(".info").owlCarousel({
  loop: true,
  margin: 10,
  items: 1,
  autoplay: true,
  autoplaySpeed: 700,
  autoplayTimeout: 5000,
});
const video = document.querySelector(".video");
const controlbtn = document.querySelector(".video-control");
if(controlbtn!=""){
controlbtn.addEventListener("click",async()=>{
  if(control==true){
    controlbtn.classList.remove("fa-pause")
    controlbtn.classList.add("fa-play")
      video.pause();
    control=!control;
  }
  else{
    controlbtn.classList.remove("fa-play")
    controlbtn.classList.add("fa-pause")
    if(video!=null)
    video.play();
    control=!control;
}})
}
