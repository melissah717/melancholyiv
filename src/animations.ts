import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

export function setupAnimations() {
  ScrollTrigger.defaults({
    toggleActions: 'restart pause resume pause'
  })
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
    para.innerHTML = para.textContent!.replace(/\S/g, "<span class='char'>$&</span>")
    const chars = para.querySelectorAll('.char')
    tl.to(chars, {
      duration: 1,
      color: '#e56b6f',
      stagger: 0.1,
      scrollTrigger: {
        trigger: para,
        start: 'top center',
        scrub: 1
      }
    })

    if (window.innerWidth <= 768) {
      tl.to('.landing-banner', {
        y: 280, 
        scrollTrigger: {
          trigger: '.landing-paragraph',
          start: 'top center',
          end: 'top center',
          scrub: 1
        },
      })
    } else {

      tl.to('.landing-banner', {
        y: 650,
        scrollTrigger: {
          trigger: '.landing-paragraph',
          start: 'top center',
          end: 'top center',
          scrub: 1
        },
      })

      tl.fromTo(
        ".landing-banner",
        { width: "0" },
        { 
          width: "100%", 
          duration: 3.5,
          scrollTrigger: {
            trigger: ".landing-banner",
            start: "top bottom",
            end: "top center",
            scrub: 1
          }
        }
      );
    }
  })
}
