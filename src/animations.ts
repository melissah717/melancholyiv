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
    para.innerHTML = para.textContent.replace(/\S/g, "<span class='char'>$&</span>")
    const chars = para.querySelectorAll('.char')
    tl.from(chars, {
      duration: 1,
      color: 'black',
      stagger: 0.1,
      scrollTrigger: {
        trigger: para,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true
      }
    })

    tl.to('.landing-banner', {
      y: 700,
      scrollTrigger: {
        trigger: '.landing-paragraph',
        start: 'top bottom',
        end: 'center center',
        scrub: 2
      }
    })

  })
}

gsap.set('.footer-container', { yPercent: -50 })

const uncover = gsap.timeline({ paused: true })

uncover.to('.footer.container', { yPercent: 0, ease: 'none' })
