document.documentElement.style.cursor = 'none';

gsap.set(".smball", {xPercent: -50, yPercent: -50});

let xTo = gsap.quickTo(".smball", "x", {duration: 0.4, ease: "power3"}),
yTo = gsap.quickTo(".smball", "y", {duration: 0.4, ease: "power3"});

window.addEventListener("mousemove", e => {
xTo(e.clientX);
yTo(e.clientY);
});