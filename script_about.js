document.addEventListener("DOMContentLoaded", function() {
    gsap.to(".sticky", {
      scrollTrigger: {
        trigger: ".sticky",
        start: "top top",
        end: () => 
          "+=" + 
          (window.innerHeight + 
          document.querySelector(".website-content").offsetHeight * 0.5),
        scrub: 1,
        pin: true,
      },
      y: 250,
      scale: 0.75,
      rotation: -15, 
      ease: "power3.out",
    });


  gsap.fromTo(
    ".website-content",
    {
      x: -100,
      scale: 0.3,
      rotation: 15,
    },
    {
      scrollTrigger: {
        trigger: ".website-content",
        start: "top 200%",
        end: "top 50%",
        scrub: 1,
      },
      x: 0,
      scale: 1,
      rotation: 0,
      ease: "power3.out",
    }
  );
});


// cursor js logic from here
var page1Content = document.querySelector("#page1-content")
var cursor = document.querySelector("#cursor")

page1Content.addEventListener("mousemove",function(details){
    // cursor.style.left = details.x+"px"
    // cursor.style.top = details.y+"px"
    gsap.to(cursor,{
        x:details.x,
        y:details.y,
    })
})

page1Content.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale: 1
    })
})
page1Content.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0
    })
})
