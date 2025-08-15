//.....video section animation
gsap.from("#videoSection-video-div", {
  scale: 0,
  duration: 3,
  y: 500,
  ease: "power4.out" // Smooth, decelerating easing
});

gsap.from("#videoSection .line", {
  y: 100,
  scale: 0,
  delay: 0.5,
  opacity: 0,
  duration: 0.8,
  stagger: 0.5,
  rotate: 10,
  ease: "power4.out"
});

//......... text-section Animation 

// Select all images inside the container
const paraImg1 = document.getElementById("para-img1");
const paraImg2 = document.getElementById("para-img2");
const paraImg3 = document.getElementById("para-img3");

paraImg1.addEventListener("mouseenter", () => {
  gsap.to(paraImg1, {
    scale: 1.88,
    duration: 0.8,
    ease: "power4.out",
    rotate: -5,
  });
});

paraImg1.addEventListener("mouseleave", () => {
  gsap.to(paraImg1, {
    scale: 1,
    duration: 0.5,
    ease: "power4.out",
    rotate: 0
  });
});
paraImg2.addEventListener("mouseenter", () => {
  gsap.to(paraImg2, {
    scale: 1.88,
    duration: 0.8,
    ease: "power4.out",
    rotate: 5,
  });
});

paraImg2.addEventListener("mouseleave", () => {
  gsap.to(paraImg2, {
    scale: 1,
    duration: 0.5,
    ease: "power4.out",
    rotate: 0
  });
});
paraImg3.addEventListener("mouseenter", () => {
  gsap.to(paraImg3, {
    scale: 1.88,
    duration: 0.8,
    ease: "power4.out",
    rotate: -5,
  });
});

paraImg3.addEventListener("mouseleave", () => {
  gsap.to(paraImg3, {
    scale: 1,
    duration: 0.5,
    ease: "power4.out",
    rotate: 0
  });
});

// .........card animation 

// gsap.to("#left-curtain",{
//   x: -650,
//   duration: 1,
//   rotate: -2,
//   delay: 0.5,
//   scrollTrigger:{
//     trigger:"#cards-amine",
//     scroller:"body",
//     markers:true,
//     start:"top 68%",
//     end:"top 10%",
//     scrub:2,
//   }
// })

// gsap.to("#right-curtain",{
//   x: 650,
//   duration: 1,
//   delay: 0.5,
//   rotate: 2,
//   scrollTrigger:{
//     trigger:"#cards-amine",
//     scroller:"body",
//     markers:true,
//     start:"top 68%",
//     end:"top 10%",
//     scrub:2,
//   }
// })


// Set up a media query condition
const mm = gsap.matchMedia();

mm.add("(max-width: 768px)", () => {
  // Mobile settings
  gsap.to("#left-curtain", {
    x: -600,
    duration: 1,
    rotate: -2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#cards-amine",
      scroller: "body",
      // markers: true, // remove in production
      start: "top 95%", // higher percentage for mobile
      end: "top 50%",
      scrub: 1,
    }
  });

  gsap.to("#right-curtain", {
    x: 600,
    duration: 1,
    delay: 0.5,
    rotate: 2,
    scrollTrigger: {
      trigger: "#cards-amine",
      scroller: "body",
      // markers: true, // remove in production
      start: "top 95%", // higher percentage for mobile
      end: "top 50%",
      scrub: 3,
    }
  });
});

// Default (desktop) settings
mm.add("(min-width: 769px)", () => {
  gsap.to("#left-curtain", {
    x: -600,
    duration: 1,
    rotate: -2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#cards-amine",
      scroller: "body",
      start: "top 68%",
      end: "top 10%",
      scrub: 1,
    }
  });

  gsap.to("#right-curtain", {
    x: 600,
    duration: 1,
    delay: 0.5,
    rotate: 2,
    scrollTrigger: {
      trigger: "#cards-amine",
      scroller: "body",
      start: "top 68%",
      end: "top 10%",
      scrub: 2,
    }
  });
});


mm.add("(max-width: 768px)", () => {
  // Mobile settings
  gsap.to("#left-curtain2", {
    x: -600,
    duration: 1,
    rotate: -2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#cards-amine2",
      scroller: "body",
      // markers: true, // remove in production
      start: "top 95%", // higher percentage for mobile
      end: "top 50%",
      scrub: 1,
    }
  });

  gsap.to("#right-curtain2", {
    x: 600,
    duration: 1,
    delay: 0.5,
    rotate: 2,
    scrollTrigger: {
      trigger: "#cards-amine2",
      scroller: "body",
      // markers: true, // remove in production
      start: "top 95%", // higher percentage for mobile
      end: "top 50%",
      scrub: 3,
    }
  });
});

// Default (desktop) settings
mm.add("(min-width: 769px)", () => {
  gsap.to("#left-curtain2", {
    x: -600,
    duration: 1,
    rotate: -2,
    delay: 0.5,
    scrollTrigger: {
      trigger: "#cards-amine2",
      scroller: "body",
      start: "top 68%",
      end: "top 10%",
      scrub: 1,
    }
  });

  gsap.to("#right-curtain2", {
    x: 600,
    duration: 1,
    delay: 0.5,
    rotate: 2,
    scrollTrigger: {
      trigger: "#cards-amine2",
      scroller: "body",
      start: "top 68%",
      end: "top 10%",
      scrub: 2,

    }
  });
});


const images = document.querySelectorAll(".paralex-section-imgs img");

images.forEach((img) => {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const moveRange = 30; // horizontal reveal range

    // Calculate horizontal movement (-15px to +15px)
    const moveX = ((offsetX / rect.width) - 0.5) * -moveRange;

    gsap.to(img, {
      x: moveX,
      y: 0, // no vertical movement
      rotateY: moveX * 0.5, // slight 3D tilt
      duration: 0.4,
      ease: "power2.out"
    });
  });

  img.addEventListener("mouseleave", () => {
    gsap.to(img, {
      x: 0,
      y: 0,
      rotateY: 0,
      duration: 0.5,
      ease: "power3.out"
    });
  });
});





