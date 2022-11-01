gsap.registerPlugin(ScrollTrigger);
let speed = 100;

/*  SCENE 1 */
let scene1 = gsap.timeline();
ScrollTrigger.create({
    animation: scene1,
    trigger: ".scrollElement",
    start: "top top",
    end: "45% 100%",
    scrub: 3,
});

/* Clouds  */
let clouds = gsap.timeline();
ScrollTrigger.create({
    animation: clouds,
    trigger: ".scrollElement",
    start: "top top",
    end: "70% 100%",
    scrub: 1,
});

clouds.to("#cloud1", { x: 500 }, 0)
clouds.to("#cloud2", { x: 1000 }, 0)
clouds.to("#cloud3", { x: -1000 }, 0)
clouds.to("#cloud4", { x: -700, y: 25 }, 0)

/*   SCENE 2  */
let scene2 = gsap.timeline();
ScrollTrigger.create({
    animation: scene2,
    trigger: ".scrollElement",
    start: "15% top",
    end: "40% 100%",
    scrub: 4,
});

/* Transition (from Scene2 to Scene3) */
gsap.set("#scene3", { y: 580, visibility: "visible" })
let sceneTransition = gsap.timeline();
ScrollTrigger.create({
    animation: sceneTransition,
    trigger: ".scrollElement",
    start: "70% top",
    end: "bottom 100%",
    scrub: 3,
});

/* Scene 3 */
let scene3 = gsap.timeline();
ScrollTrigger.create({
    animation: scene3,
    trigger: ".scrollElement",
    start: "10% 50%",
    end: "bottom 100%",
    scrub: 3,
});

//Hills motion
scene3.fromTo("#h3-1", { y: 300 }, { y: -550 }, 0)
scene3.fromTo("#h3-2", { y: 800 }, { y: -550 }, 0.03)
scene3.fromTo("#h3-3", { y: 600 }, { y: -550 }, 0.06)
scene3.fromTo("#h3-4", { y: 800 }, { y: -550 }, 0.09)
scene3.fromTo("#h3-5", { y: 1000 }, { y: -550 }, 0.12)

//stars
scene3.fromTo("#stars", { opacity: 0 }, { opacity: 0.5, y: -500 }, 0)

//gradient value change
scene3.to("#bg2-grad", { attr: { cy: 600 } }, 0)
scene3.to("#bg2-grad", { attr: { r: 500 } }, 0)


/*   falling star   */
gsap.from("#fstar", {
    x: -800,
    y: -550,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".scrollElement",
        start: "1000 100%",
        end: "3000 0%",
        scrub: 5,
        onEnter: function() { gsap.set("#fstar", { opacity: 1 }) },
        onLeave: function() { gsap.set("#fstar", { opacity: 0 }) },
        
    }
})
