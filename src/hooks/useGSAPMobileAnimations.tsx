import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useMediaQuery } from 'react-responsive';

const useGSAPMobileAnimations = () => {
  const mobile = useMediaQuery({ maxWidth: 1025 });

  useEffect(() => {
    if (!mobile) return;
    const copy = document.querySelectorAll('.block-copy');

    copy.forEach((copyElement) => {
      const children = Array.from(copyElement.children);

      gsap.set(children, {
        autoAlpha: 0,
        y: 50,
      });

      gsap.to(children, {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: copyElement,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, [mobile]);
};

export default useGSAPMobileAnimations;
