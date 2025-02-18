function scrollHalfPage() {
  window.scrollBy({ top: window.innerHeight / 1.5, behavior: 'smooth' });
}

gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis for smooth scrolling
const lenis = new Lenis({
    lerp: 0.1, // Increase lerp for faster scrolling response
    smooth: true, // Ensure smooth scrolling is enabled
    smoothWheel: true, // Keep smooth wheel scrolling enabled
    wheelMultiplier: 6, // Increase wheel speed sensitivity
    touchMultiplier: 4, // Increase touch sensitivity for quicker scroll
  });  

// Sync ScrollTrigger with Lenis scroll events
lenis.on("scroll", ScrollTrigger.update);

// Use GSAP's ticker to call Lenis's RAF (requestAnimationFrame)
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

// Disable GSAP's lag smoothing for better performance
gsap.ticker.lagSmoothing(0);

// Create ScrollTrigger for the gallery animation
ScrollTrigger.create({
  trigger: ".ws",
  start: "top bottom",
  end: "bottom bottom",
  scrub: 1,
  onUpdate: (self) => {
    const galleryWrapper = document.querySelector(".gallery-wrapper");
    const sidecols = document.querySelectorAll(".col:not(.main)");
    const mainImg = document.querySelector(".img.main img");

    const scale = 1.1 + self.progress * 2.65;
    const yTranslate = self.progress * 900;
    const mainImgScale = 1.5 - self.progress * 0.5;

    galleryWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
    sidecols.forEach((col) => {
      col.style.transform = `translateY(${yTranslate}px)`;
    });
    mainImg.style.transform = `scale(${mainImgScale})`;
  },
});

// Cursor logic
var page1Content = document.querySelector("#page1-content");
var cursor = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", function (details) {
  gsap.to(cursor, {
    x: details.x,
    y: details.y,
  });
});

page1Content.addEventListener("mouseenter", function () {
  gsap.to(cursor, {
    scale: 1,
  });
});

page1Content.addEventListener("mouseleave", function () {
  gsap.to(cursor, {
    scale: 0,
  });
});

//Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const navButtons = document.querySelector('.nav-buttons');
const navBtns = document.querySelectorAll('.nav-btn');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navButtons.classList.toggle('active');
});

// Enhanced click handling for nav buttons
navBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Handle the click event
        hamburger.classList.remove('active');
        navButtons.classList.remove('active');
    });
});