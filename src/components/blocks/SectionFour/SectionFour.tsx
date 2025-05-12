import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionImage } from '../../miscellaneous';
import three from '../../../assets/images/common/three.jpg';
import cube from '../../../assets/images/common/cube-2.png';
import { useMediaQuery } from 'react-responsive';

const SectionFour: React.FC = () => {
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
    <section className="section-four relative z-20 bg-black" ref={sectionRef}>
      <div className="mx-auto flex flex-col items-start justify-start gap-[58px] lg:max-w-[1920px] lg:flex-row lg:gap-[77px]">
        <img
          src={three}
          alt="Teenager playing with Rubik's Cube"
          className="max-w-[95%] object-cover lg:h-[calc(100vh-44px)] lg:w-[960px] lg:max-w-[50vw] 2xl:h-auto"
          ref={imageRef}
        />
        <div className="block-copy mb-[75px] max-w-[100vw] pr-[67px] pl-[38px] lg:mt-[118px] lg:mb-[142px] lg:max-w-[458px] lg:px-0">
          <h3 className="mb-[30px] lg:mb-[45px]">
            The surprising benefits of hands-on fun
          </h3>
          <p>
            In our increasingly digital world, it’s all too easy to get lost in
            a loop of mindless scrolling, but the vibrant tiles of the Rubik’s
            Cube make for a fun, brain-boosting escape. As you work to restore
            the Cube to its original formation, you’re actively strengthening
            your fine motor skills and enhancing your spatial skills (your
            ability to visualise and mentally manipulate objects).
          </p>
          <p>
            Not only are spatial skills crucial when it comes to navigating your
            way through the world, they also make it easier to understand
            scientific concepts. As a STEM-accredited toy, the Rubik’s Cube
            helps lay the foundations for a lifetime of learning, which makes it
            the perfect gift for kids and young adults.{' '}
          </p>
          <MotionImage
            src={cube}
            alt="Rubik's cube"
            className="-mt-10 max-w-[105vw] -translate-x-[10vw] lg:-mt-20 lg:max-w-[713px] lg:-translate-x-[200px]"
          />
          <p>
            To solve the complex puzzle, users need to recall patterns,
            sequences and algorithms, which helps improve working memory.
            Research also shows that people who engage with the Rubik’s Cube
            have higher processing speeds, which means the brain can absorb and
            respond to information at a faster rate. And who doesn’t want that?
          </p>
          <p>
            With every rotation of the Rubik’s Cube, your brain will be put
            through its paces, and you’ll also enjoy a few mindful moments. Away
            from the screens, you can let your imagination run wild with
            billions upon billions of possibilities. There really is no limit to
            what you can achieve, and the best part is – no Wi-Fi required!
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
