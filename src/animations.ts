import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';


gsap.registerPlugin(ScrollTrigger)

export function setupAnimations() {
  ScrollTrigger.defaults({
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

  // tl.from('.landing-paragraph', {
  //   x:2000,
  //   scrollTrigger: {
  //     trigger: '.trigger-2',
  //     start: 'top center',
  //     end: '6000% 90%',
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: 2
  //   },
  // })

  document.querySelectorAll('.landing-paragraph').forEach((para) => {
    para.innerHTML = para.textContent.replace(/\S/g, "<span class='char'>$&</span>");
    const chars = para.querySelectorAll('.char');
    tl.from(chars, {
      duration: 1,
      color: 'black', // Change the color to your desired color
      stagger: 0.1, // Stagger the animation for each character
      scrollTrigger: {
        trigger: para,
        start: 'top center',
        end: 'bottom center',
        scrub: true // Enable scrubbing for smooth animation
      },
    })




  tl.to('.landing-banner', {
    scrollTrigger: {
      trigger: '.landing-banner',
      start: 'bottom center',
      markers: true,
      // end: '',
      pin: true,
      pinSpacing: false,
      scrub: 1,

    },
    ease: "bounce.in",
    y: 50
  })






  tl.to('body, .container', {
    backgroundColor: '#030C17',
    color: '#fff',
    duration: 0.5,
    scrollTrigger: {
      trigger: '.home-container',
      start: 'top 60%',
      end: '75% 25%',
      // markers: true,
      scrub: true
    },
})

  tl.to(".sassy-heading", {
    
  })



// tl.utils.toArray('.sassy > *').forEach(element => {
//   gsap.fromTo(element, {
//     y: '100%' // Initial position of the element, below the viewport
//   }, {
//     y: '0%', // Final position of the element, fully visible
//     duration: 1, // Duration of the animation
//     scrollTrigger: {
//       trigger: ".sassy",
//       start: 'top 80%', // Start revealing when the top of the element reaches 80% of the viewport
//       end: '+=100', // End revealing when the bottom of the element has passed by 100px
//       scrub: true,
//       pin: true
//     }
//   });
// });
  // // tl.fromTo(
  // //   '.orange-flower',
  // //   {
  // //     x: 1000
  // //   },
  // //   {
  // //     x: 400,
  // //     y: 700,
  // //     duration: 2,
  // //     scrollTrigger: {
  // //       start: 'top 50%',
  // //       end: '100% 100%',
  // //       trigger: '.trigger-1',
  // //       scrub: 2
  // //     }
  // //   }
  // // )

  // // tl.to('.square-1', {
  // //   scrollTrigger: {
  // //     trigger: '.landing-banner',
  // //     start: 'top top',
  // //     end: 'bottom 70%',
  // //     scrub: 2,
  // //   },
  // //   y: 400,
  // //   x: -400,
  // //   rotation: 120,
  // //   opacity: 0.5
  // // })


  // tl.to('.star-1', {
  //   scale: 0.6,
  //   y: 600,
  //   scrollTrigger: {
  //     trigger: '.star-1',
  //     start: 'top center',
  //     end: '3000% bottom',
  //     scrub: 2,
  //     pin: true
  //   }
  // })

  // tl.to('.small-stars', {
  //   scale: 0.5,
  //   x: 60,
  //   y: 300,
  //   scrollTrigger: {
  //     trigger: '.small-stars',
  //     start: 'top center',
  //     end: 'bottom bottom',
  //     scrub: 1,
  //     pin: true,
  //     pinSpacing: false
  //   }
  // })



  // tl.to('.star-2', {
  //   scale: 0.4,
  //   x: -700,
  //   y: 200,
  //   scrollTrigger: {
  //     trigger: '.star-3',
  //     start: 'top center',
  //     end: 'bottom bottom',
  //     scrub: 1
  //   }
  // })

  // tl.to('.star-3', {
  //   scale: 0.5,
  //   y: -600,
  //   x: 300,
  //   opacity: 0.01,
  //   scrollTrigger: {
  //     trigger: '.big-star-container',
  //     scrub: 2,
  //     start: 'top center',
  //     end: '-200% center',
  //     pin: true
  //   }
  // })

  // // tl.to('.parallax-1', {
  // //   y: -1200,
  // //   opacity: 0.2,
  // //   scrollTrigger: {
  // //     trigger: '.star-3',
  // //     scrub: true
  // //   }
  // // })

  // tl.from('.parallax-2', {
  //   y: 3000,
  //   scale: 1.2,
  //   scrollTrigger: {
  //     trigger: '.parallax-middle',
  //     scrub: 1,
  //     start: 'top 10%',
  //     markers: true
  //   }
  // })


  // tl.to(".parallax-lantern", {
  //   scale: 0.3,
  //   // opacity: 0.4,
  //   y: -1000,
  //   scrollTrigger: {
  //     trigger: ".parallax-2",
  //   start: "center bottom",
  //   scrub: true,
  //   }
  // })

  // tl.to(".orange-flower", {
  //   rotate: 10,
  //   scrollTrigger: {
  //     trigger: ".landing-banner",
  //     start: "center bottom",
  //     pin: true,
  //     pinSpacing: false,
  //     scrub: true
  //   }
  // })
// }

  }
  )}
