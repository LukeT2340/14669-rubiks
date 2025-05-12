import { MotionImage } from '../../miscellaneous';
import one from '../../../assets/images/common/one.jpg';

const SectionTwo: React.FC = () => {
  return (
    <section className="section-two section-two-background relative z-20 pt-[45px] pb-[28px] lg:pt-[154px] lg:pb-[191px]">
      <div className="mx-[17px] flex max-w-[1188px] flex-col items-center justify-start gap-[19px] border-[4px] border-white p-[23px] lg:mx-auto lg:flex-row lg:gap-[54px] lg:p-[40px]">
        <MotionImage
          src={one}
          alt="Boy playing with Rubik's Cube"
          className="max-w-full object-cover lg:max-w-[50%]"
        />
        <div className="block-copy max-w-[456px]">
          <p>
            The Rubik’s Cube is having a moment. Or rather, it’s been having a
            moment for the past 50 years. A symbol of curiosity, creativity and
            perseverance, few toys have managed to stand the test of time quite
            like the colourful brain teaser.
          </p>
          <p>
            Invented by Ernő Rubik in 1974, the 3D puzzle has become a cultural
            icon, taking over TikTok, forming global cubing communities and
            captivating the minds of both young and old for generations.
          </p>
          <p>
            Whether it’s the original 3x3 version or a special edition, the
            enduring appeal of the authentic Rubik’s Cube lies in its simple
            (but complex) challenge. It’s easy to pick up, satisfying to solve,
            and no matter how often you come back to it, you’ll enjoy a unique
            experience every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
