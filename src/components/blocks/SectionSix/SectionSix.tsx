import { useMediaQuery } from 'react-responsive';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionImage } from '../../miscellaneous';
import four from '../../../assets/images/common/four.jpg';
import cube from '../../../assets/images/common/cube-3.png';

const SectionSix: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const mobile = useMediaQuery({ maxWidth: 1025 });

  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;

    if (!image || !section || mobile) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top +=44px',
      end: 'bottom bottom',
      pin: image,
      pinSpacing: true,
      scrub: true,
    });

    return () => {
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      className="section-six relative z-20 bg-white text-black"
      ref={sectionRef}
    >
      <div className="mx-auto flex flex-col items-start justify-end gap-[60px] pt-[18px] lg:max-w-[1920px] lg:flex-row lg:gap-[77px] lg:pt-0">
        <div className="block-copy z-20 order-2 mx-auto mb-[171px] max-w-[100vw] pr-[68px] pl-[33px] sm:max-w-[600px] lg:order-1 lg:mx-0! lg:mt-[109px] lg:mb-[150px] lg:max-w-[458px] lg:px-0">
          <h3 className="mb-[45px]">
            Rediscovering quality time with a classic challenge
          </h3>
          <p>
            Carving out moments for family fun isn’t always an easy task, but it
            can be with the Rubik’s Cube. A catalyst for laughter and
            conversation, this seemingly simple toy provides hours of
            low-pressure, screen-free connection.
          </p>
          <p>
            Schedule a family games night (complete with timed trials) and enjoy
            a little healthy competition, spend a cosy morning swapping
            strategies with the kids on the couch, take turns showing off your
            artful creations, or use the Cube as a way to reconnect after a busy
            day of work and school.
          </p>
          <MotionImage
            src={cube}
            alt="Cube 4x4"
            className="max-w-[95vw] -translate-x-[8vw] sm:max-w-[75vw] lg:max-w-[665px] lg:-translate-x-[60px]"
          />
          <p>
            Whichever activity you choose, it’s not about who wins or loses,
            it’s about spending time together. In fact, studies show that
            children who spend quality time with their parents are more likely
            to have better overall wellbeing, and thanks to its limitless
            potential, the Rubik’s Cube provides endless opportunities for
            family collaboration. With every problem solved, story shared and
            words of encouragement whispered, you’ll strengthen bonds, form new
            connections and create meaningful memories.
          </p>
        </div>
        <img
          src={four}
          alt="Kid playing with Rubik's Cube"
          className="order-1 ml-auto max-w-[95%] lg:order-2 lg:ml-0 lg:h-[calc(100vh-44px)] lg:w-[960px] lg:max-w-[50vw] 2xl:h-auto"
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default SectionSix;
