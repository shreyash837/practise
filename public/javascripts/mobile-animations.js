
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

document.querySelectorAll('.abText').forEach((ele)=>{
    gsap.from(ele,{
        scale:0.1,
        scrollTrigger:{

            trigger:ele,
            start:'top 100%',
            scrub:true
        }
    })
})
document.querySelectorAll('.AboutBadgesContaner').forEach((ele)=>{
    gsap.from(ele,{
        scale:0.1,
        rotate:360,
        duration:2,
        scrollTrigger:{

            trigger:ele,
            start:'top 90%'
        }
    })
})

gsap.from(".skillsHeading",{
    // height:0,
    opacity:0,
    duration:2,
    scrollTrigger:{
        trigger:".skillsHeading",
        start:"top center",
        // scrub:4
        // markers:true
    }
});

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
            // scrub:4,
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
            // scrub:2,
            // markers:true
        }
    }) 
    }
    i++;
})
