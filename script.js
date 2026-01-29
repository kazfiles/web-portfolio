gsap.registerPlugin(ScrollTrigger);

gsap.from(".hero-title",{
    opacity: 0,
    y: 40,
    duration: 1
});

gsap.from(".hero-text",{
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.4
});

gsap.utils.toArray(".fade-up").forEach((el) => {
    gsap.to(el,{
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger:{
            trigger: el,
            start: "top 80%",
        }
    });
});

gsap.to(".slide-in",{
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".slide-in",
        start: "top 75%",
    }
});
