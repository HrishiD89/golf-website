let crsr = document.querySelector("#cursor");
let crsrblur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove",(e)=>{
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + "px";
    crsrblur.style.left = e.x -200 + "px";
    crsrblur.style.top = e.y -200 + "px";
})

let h4all = document.querySelectorAll("#nav h4");

h4all.forEach(element => {
    element.addEventListener('mouseenter',()=>{
        crsr.style.scale = 4;
        crsr.style.border = "1px solid #fff";
        crsr.style.backgroundColor = "transparent";
    })
    element.addEventListener('mouseleave',()=>{
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #fff";
        crsr.style.backgroundColor = "#95c11e";
    })
});

// let cardall = document.querySelectorAll(".card");
// cardall.forEach(element => {
//     element.addEventListener('mouseenter',()=>{
//         crsr.style.scale = 4;
//         crsr.style.border = "1px solid #fff";
//         crsr.style.backgroundColor = "transparent";
//     })
//     element.addEventListener('mouseleave',()=>{
//         crsr.style.scale = 1;
//         crsr.style.border = "0px solid #fff";
//         crsr.style.backgroundColor = "#95c11e";
//     })
// });



gsap.to("#nav", {
    backgroundColor: "#000",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub:1,
    }
});

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // marker:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:90,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers: true,
        start:"top 70%",
        end:"top 65%",
        scrub:2,
    }
})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers: true,
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
        // markers: true,
        start:"top 55%",
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
        // markers: true,
        start:"top 55%",
        end:"top 45%",
        scrub:4,
    }
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        // markers: true,
        start:"top 75%",
        end:"top 70%",
        scrub:3,
    }
})