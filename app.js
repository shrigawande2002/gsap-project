const menuButton = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close");
var tl = gsap.timeline();
gsap.registerPlugin(ScrollTrigger);

// Initially hide the menu
mobileMenu.style.display = "none";
menuButton.addEventListener("click", function () {
  // Show menu
  mobileMenu.style.display = "flex";

  // Run GSAP animation
  gsap.from("#mobile-menu", {
    y: -200,
    delay: 0.2,
    opacity: 0,
    duration: 0.5,
    ease: "power3.out"
  });
});

closeBtn.addEventListener("click", function () {
  // Animate and then hide
  gsap.to("#mobile-menu", {
    y: -200,
    opacity: 0,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      mobileMenu.style.display = "none";
    }
  });
});


gsap.from('#hero ', {
    duration: 1.5,
    opacity: 0,
    scale: 0,
    y:500,
    ease: "power4.out"
})

gsap.from("#hero-text .line", {
  y: 100,
  scale: 0,
  delay: 0.5,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
  rotate: 10
});

const heroImg = document.querySelector("#hero-img");
const heroImg1 = document.querySelector("#hero-img1");
const heroImg3 = document.querySelector("#hero-img3");

// Hover in
heroImg.addEventListener("mouseenter", () => {
  gsap.to(heroImg, {
    scale: 2,
    rotate: -5,
    duration: 0.5,
    ease: "power2.out"
  });
});

heroImg3.addEventListener("mouseenter", () => {
  gsap.to(heroImg3, {
    scale: 2,
    rotate: -5,
    duration: 0.5,
    ease: "power2.out"
  });
});

heroImg1.addEventListener("mouseenter", () => {
  gsap.to(heroImg1, {
    scale: 2,
    rotate: 5,
    duration: 0.5,
    ease: "power2.out"
  });
});

// Hover out (reset to normal)
heroImg.addEventListener("mouseleave", () => {
  gsap.to(heroImg, {
    scale: 1,
    rotate: 0,
    duration: 0.5,
    ease: "power2.inOut"
  });
});

heroImg1.addEventListener("mouseleave", () => {
  gsap.to(heroImg1, {
    scale: 1,
    rotate: 0,
    duration: 0.5,
    ease: "power2.inOut"
  });
});

heroImg3.addEventListener("mouseleave", () => {
  gsap.to(heroImg3, {
    scale: 1,
    rotate: 0,
    duration: 0.5,
    ease: "power2.inOut"
  });
});

const duration = 0.4;
const gap = 0.2;

gsap.from("#dot1", {
  y: -10,
  opacity: 0.2,
  duration: duration,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  delay: 0
});

gsap.from("#dot2", {
  y: -10,
  opacity: 0.2,
  duration: duration,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  delay: gap
});

gsap.from("#dot3", {
  y: -10,
  opacity: 0.2,
  duration: duration,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
  delay: gap * 2
});

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

// First Section
gsap.set("#card-img-left", { x: 0 });
gsap.set("#card-img-right", { x: 0 });

gsap.to("#card-img-left", {
  x: -800,
  rotate: -5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#cards",
    start: "top top",
    end: "+=500",
    scrub: 3,
    pin: true,

  },
});

gsap.to("#card-img-right", {
  x: 800,
  rotate: 5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#cards",
    start: "top top",
    end: "+=500",
    scrub: 3,
  },
});

gsap.from("#content", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#cards",
    start: "top top",
    end: "+=500",
    scrub: 3,
  },
});

// Second Section
gsap.set("#card-img-left2", { x: 0 });
gsap.set("#card-img-right2", { x: 0 });

gsap.to("#card-img-left2", {
  x: -800,
  rotate: -5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#cards2",
    start: "top top",
    end: "+=500",
    scrub: 3,
    pin: true,
  },
});

gsap.to("#card-img-right2", {
  x: 800,
  rotate: 5,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: "#cards2",
    start: "top top",
    end: "+=500",
    scrub: 3,
  },
});

gsap.from("#content2", {
  opacity: 0,
  y: 50,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "#cards2",
    start: "top top",
    end: "+=500",
    scrub: 3,
  },
});
