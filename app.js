const menuButton = document.getElementById("menu");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close");

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

