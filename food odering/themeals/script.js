var circle = document.querySelector("#circle");
var frame = document.querySelector(".text",".leftnav");
window.addEventListener("mousemove",function(dets){
    // circle.style.transform =`translate(${dets.clientX}px,${dets.clientY}px)`
    gsap.to(circle,{
        x:dets.clientX,
        y:dets.clientY,
        duration:.9,
        ease:Expo,
        
    })


})
frame.addEventListener("mousemove",function(){
    gsap.to(circle,{
        scale:10
    })

})

frame.addEventListener("mouseleave",function(){
    gsap.to(circle,{
        scale:0.5
    })
  
})

var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        }
    }
  });
