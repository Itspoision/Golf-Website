var cur = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",function(dets){
  cur.style.left = dets.x+"px"
  cur.style.top = dets.y+"px"
  blurr.style.left = dets.x -250+"px"
  blurr.style.top = dets.y-250+"px"
});

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    cur.style.scale = 3
    cur.style.border = "0.5px solid #fff"
    cur.style.backgroundColor = "transparent"
  })
  elem.addEventListener("mouseleave",function(){
    cur.style.scale = 1
    cur.style.border = "0px solid #95C11E"
    cur.style.backgroundColor = "#95C11E"
  })
})

gsap.to("#nav", {    //nav colour changes
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });

gsap.to("#main",{   //change main div backgroudn colour
  backgroundColor:"#000",
  scrollTrigger:{
    trigger:"#main",
    scroller:"body",
    start:"top -30%",
    end:"top -80%",
    scrub:2,
  }
})

gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 60%",
    end:"top 58%",
    scrub:2,
  }
})
gsap.from(".card",{
  scale:0.8,
  opacity:0,
  duration:1,
  stagger:0.4,
  scrollTrigger:{
    trigger:".card",
    scroller:"body",
    start:"top 70%",
    end:"top 65%",
    scrub:2,
  }
})
gsap.from("#colon1",{
  y:-70,
  x:-70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4,
  }
})
gsap.from("#colon2",{
  y:70,
  x:70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller:"body",
    start:"top 50%",
    end:"top 45%",
    scrub:4,
  }
})
gsap.from("#page4 h1",{
  y:50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller:"body",
    start:"top 75%",
    end:"top 70%",
    scrub:3,
  }
})