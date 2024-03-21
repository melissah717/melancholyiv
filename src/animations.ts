import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';


gsap.registerPlugin(ScrollTrigger)

export function setupAnimations() {
  ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause"
  });
}

export function animateElements() {
  const tl = gsap.timeline()
  const lenis = new Lenis()

  function raf(time: any) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)

  document.querySelectorAll('.landing-paragraph').forEach((para) => {
    para.innerHTML = para.textContent.replace(/\S/g, "<span class='char'>$&</span>");
    const chars = para.querySelectorAll('.char');
    tl.from(chars, {
      duration: 1,
      color: 'black', // Change the color to your desired color
      stagger: 0.1, // Stagger the animation for each character
      scrollTrigger: {
        trigger: para,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true // Enable scrubbing for smooth animation
      },
    })

  tl.from('.landing-banner', {
    y: -200
  })


  tl.to(".landing-paragraph", {
    y: -400
  })



tl.to(".sassy-marquee", {
  y: -200,
  duration: 2,
  scrollTrigger: {
    trigger: ".sassy-marquee",
    start: "top center",
    end: "bottom center",
    scrub: true,
  }
});

gsap.to(".sassy-heading", {
  scrollTrigger: {
    trigger: ".sassy-heading",
    scrub: true,
    start: "bottom center",
    end: "10% center",
    pin: true,
  },
  ease: "bounce.in",
  yoyo: true,
  repeat: -1
});

const animateDynamicText = () => {
  gsap.to('.dynamic-text', {
    x: 0,
    opacity: 1,
    duration: 1,
    ease: 'power3.out',
  });
};

ScrollTrigger.create({
  trigger: '.video-background',
});

const animateUnderline = () => {
  const sassyHeading = document.querySelector('.sassy-heading');
  const headingWidth = sassyHeading.getBoundingClientRect().width;
  gsap.to('.sassy-heading-underline', {
    width: headingWidth, 
    duration: 1, 
    ease: 'power3.out',
    justifyContent: 'center', 
  });
};

const reverseUnderline = () => {
  gsap.to('.sassy-heading-underline', {
    width: 0, 
    duration: 1, 
    ease: 'power3.out', 
  });
};

ScrollTrigger.create({
  trigger: '.sassy-heading', 
  start: 'top center',
  onEnter: animateUnderline,
  onLeaveBack: reverseUnderline, 
});
  })
}

gsap.set(".footer-container", {yPercent: -50})

const uncover = gsap.timeline({paused:true})

uncover.to(".footer.container", {yPercent: 0, ease: "none"})
