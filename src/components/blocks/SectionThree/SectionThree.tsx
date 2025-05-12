import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionImage } from '../../miscellaneous';
import two from '../../../assets/images/common/two.jpg';
import cube from '../../../assets/images/common/cube.png';

const SectionThree: React.FC = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const image = imageRef.current;
    const section = sectionRef.current;

    if (!image || !section) return;

    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
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
      className="section-three relative z-20 bg-white text-black"
      ref={sectionRef}
    >
      <div className="bg-red absolute top-0 left-0 z-20 h-[49px] w-full" />
      <div className="3xl:mx-auto relative mx-auto flex max-w-[1920px] items-start justify-end gap-[77px]">
        <div className="block-copy mt-[169px] mb-[150px] max-w-[458px]">
          <h3 className="mb-[45px]">More than just a toy</h3>
          <p>
            Regardless of your age or skill level, you’ll never be bored with a
            Rubik’s Cube. With more than 43 quintillion possible combinations,
            this ingenious puzzle offers up countless hours of enjoyment — but
            that’s only half the story. More than entertainment, the Rubik’s
            Cube also provides endless opportunities for you to explore,
            experiment and build valuable life skills.
          </p>
          <p>
            With every twist and turn of the brightly coloured Cube, you’ll be
            invited to strategise, recognise patterns, adapt your approach and
            think outside the box, which helps fine-tune your problem-solving
            skills.{' '}
          </p>
          <MotionImage
            src={cube}
            alt="Rubik's cube"
            className="-mt-10 w-full"
          />
          <p>
            Of course, solving the Rubik’s Cube isn’t always easy, but
            roadblocks often inspire creativity. In fact, not only do puzzles
            help encourage flexible thinking (the ability to find new solutions
            and view problems from different angles), they also help to build
            resilience and patience.
          </p>
          <p>
            While you might not solve the Cube on your first, second or even
            third try, if you keep at it, you’ll learn that persistence is key
            to overcoming any obstacle. And while there’s nothing quite like the
            satisfaction of mastering the Rubik’s Cube solo, a shared victory
            alongside family and friends will only double the fun, so be sure to
            ask them to join in.
          </p>
        </div>
        <img
          src={two}
          alt="Girl playing with Rubik's cube"
          className="mt-[44px] h-[calc(100vh-44px)] max-h-[calc(100vh-44px)] w-[960px] max-w-[50vw] object-cover 2xl:h-auto"
          ref={imageRef}
        />
      </div>
    </section>
  );
};

export default SectionThree;
