import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  let container = document.getElementById('cardsContainer');
  let scrollSection = document.getElementById('horizontalScroll');

  let totalScroll = container.scrollWidth - window.innerWidth + window.innerWidth * 0.4; // Ajout du padding initial

  gsap.to(container, {
    x: () => -totalScroll,
    ease: 'none',
    scrollTrigger: {
      trigger: scrollSection,
      start: 'top top',
      end: () => `+=${totalScroll}`,
      scrub: 1,
      pin: true,
    },
  });
});
