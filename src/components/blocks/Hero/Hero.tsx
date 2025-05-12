import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: '+=200%',
      pin: true,
      pinSpacing: true,
    });

    const h1 = section?.querySelector('h1');
    const h2 = section?.querySelector('h2');
    const copy = section?.querySelector('.hero-copy');

    gsap.fromTo(
      h1!,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      h2!,
      { x: 450, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.5, delay: 1, ease: 'power2.out' }
    );

    gsap.fromTo(
      copy!,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, delay: 1, ease: 'power2.out' }
    );

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section className="hero relative h-screen" ref={sectionRef}>
      <div className="absolute top-1/2 left-1/2 z-20 -translate-y-1/2">
        <h1>The Cube that conquered the world:</h1>
        <h2 className="mb-[53px]">
          The enduring <br /> magic of the <br /> Rubik’s Cube
        </h2>
        <div className="hero-copy max-w-[476px]">
          <p>
            Timeless, brain-boosting, and packed with personality — discover how
            a colourful cube became a global icon, unlocking fun, focus, and
            creativity with every twist.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
