import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  let panels = gsap.utils.toArray(['#panel', 'footer']);
  let panelStarts = [];
  let panelCounter = document.getElementById('panel-counter');

  panels.forEach((panel, i) => {
    let trigger = ScrollTrigger.create({
      trigger: panel,
      start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
      pin: true,
      pinSpacing: false,
      onEnter: () => updatePanelCounter(i + 1),
      onEnterBack: () => updatePanelCounter(i + 1),
    });
    panelStarts.push(trigger.start);
  });

  function updatePanelCounter(index) {
    if (panelCounter && index <= 3) {
      panelCounter.textContent = index;
    }
  }

  ScrollTrigger.create({
    snap: {
      snapTo: (_progress, self) => {
        let snapScroll = gsap.utils.snap(panelStarts, self.scroll());
        return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), snapScroll);
      },
      duration: 0.5,
      ease: 'power2.out',
    },
  });
});
