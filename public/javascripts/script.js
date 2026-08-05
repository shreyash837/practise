console.log('connected');

document.querySelector("#heroBtn").addEventListener('mouseenter',(e)=>{
    console.log('mouse entered in btn');
    gsap.to('#heroBtn',{
        rotate:0,
        duration:0.2
    })
    
})
document.querySelector("#heroBtn").addEventListener('mouseleave',(e)=>{
    console.log('mouse entered in btn');
    gsap.to('#heroBtn',{
        rotate:-25,
        duration:0.2
    })
    
})
// intro text animation

let t1=gsap.timeline()

t1.from(".introSpan", {
    y: 40,
    opacity: 0,
    stagger:0.1,
    duration: 0.4,
    ease: "power4.out"
});
t1.from("#letterSPng",{
    opacity:0,
    rotate:360,
    duration:1
})

// name animation
const tl = gsap.timeline();

// h
tl.from("#nameSpanH",{
    x:-300,
    y:100,
    rotate:-120,
    opacity:0,
    duration:0.8,
    ease:"power4.out"
})

// e
.from(".nameSpan:nth-child(3)",{
    y:250,
    scale:0,
    opacity:0,
    duration:0.7,
    ease:"back.out(2)"
},"-=0.5")

// y
.from("#nameSpanY",{
    x:250,
    rotate:90,
    opacity:0,
    duration:0.8,
    ease:"power4.out"
},"-=0.55")

// a
.from("#nameSpanA",{
    scale:3,
    opacity:0,
    duration:0.6,
    ease:"expo.out"
},"-=0.45")

// s
.from("#nameSpanS",{
    x:150,
    y:-180,
    rotate:220,
    opacity:0,
    duration:0.8,
    ease:"power4.out"
},"-=0.55")

// last h
.from("#nameSpanH2",{
    x:-180,
    y:220,
    rotate:-180,
    opacity:0,
    duration:0.8,
    ease:"power4.out"
},"-=0.55")

.from("#facePng",{
    opacity:0,
    scale:1.2,
    duration:1
})
.from("#heroBtn",{
    opacity:0,
    duration:1
})
// last h animation
const lastHtimeLine = gsap.timeline({
    repeat:-1,
    repeatDelay:3
});

lastHtimeLine.to("#nameSpanH2",{
    rotate:90,
    duration:0.3,
    
})
.to('#nameSpanH2',{
    delay:2,
    rotate:0,
    duration:0.2
})

gsap.from("#letterSPng",{
    rotate:90,
    duration:2,
    repeat:-1,
    delay:5,
    repeatDelay:5
})
const about = document.querySelector("#abouContaner");

gsap.to(about,{
    x:()=> -(about.scrollWidth-window.innerWidth),

    ease:"none",

    scrollTrigger:{
        // markers:true,
        trigger:"#about",
        pin:true,
        scrub:1,
        start:"top top",
        end:()=>"+=" + about.scrollWidth,
     
    }
})

// i am animation

gsap.from(".iam",{
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:'.iam',
        start:'top 60%',
        // markers:true,
        scrub:2
    }
})

document.querySelectorAll('.firstAbout').forEach((item)=>{
    gsap.from(item,{
         opacity:0,
        //  scale:1.2,
    scrollTrigger:{
        trigger:item,
        start:'top 80%',
        // markers:true,
        scrub:2
    }
    })
})

gsap.utils.toArray(".aboutBadges").forEach(panel=>{

      gsap.from(panel,{
        x:-100,
        rotate:-8,
        scale:0.8,
        opacity:0,
        duration:1,
        ease:"back.out(1.8)",
        scrollTrigger:{
          trigger:panel,
          start:"left center",
          containerAnimation:ScrollTrigger.getAll()[0]?.animation,
        //   containerAnimation: horizontalTween
        }
      });
    })
gsap.utils.toArray(".abText").forEach(panel=>{

      gsap.from(panel,{
        x:-100,
        rotate:-8,
        scale:0.8,
        opacity:0,
        duration:1,
        ease:"back.out(1.8)",
        scrollTrigger:{
          trigger:panel,
          start:"left center",
          containerAnimation:ScrollTrigger.getAll()[0]?.animation
        // containerAnimation: horizontalTween
        }
      });
    })

    console.log(ScrollTrigger.getAll()[0].animation);
// console.log(horizontalTween === ScrollTrigger.getAll()[0].animation);

gsap.from(".skillsHeading",{
    height:0,
    duration:1,
    scrollTrigger:{
        trigger:".skillsHeading",
        start:"top center",
        end:-"200%",
        scrub:4
        // markers:true
    }
})

const SkilsContaner= document.querySelector(".skillsWrapper");

let i=1

document.querySelectorAll(".skillCard").forEach((child)=>{
    console.log(child);
   
    if(i %2 == 0){
    gsap.from(child,{
        // height:0,
        opacity:0.5,
        x:200,
        y:200,
        duration:1,
        scrollTrigger:{
            trigger:child,
            start:"top 100%",
            end:-'300%',
            scrub:4,
            // markers:true
        }
    })}else{
        gsap.from(child,{
        // height:0,
        opacity:0,
        x:-200,
        y:200,
        duration:1,
        scrollTrigger:{
            trigger:child,
            start:"top 100%",
            end:-'300%',
            scrub:2,
            // markers:true
        }
    }) 
    }
    i++;
})

// contact section background  animation

gsap.utils.toArray(".shape").forEach((shape)=>{

    gsap.to(shape,{

        x:100,
        rotate:360,
        duration:5,
        repeat:-1,
        yoyo:true

    });

});