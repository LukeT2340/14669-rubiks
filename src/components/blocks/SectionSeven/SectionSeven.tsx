import { useRef } from 'react';
import CubeAnimation from '../../miscellaneous/CubeAnimation';
import { CustomLink } from '../../miscellaneous';
import { BRAND_URL } from '../../../js/global-variables';

const SectionSeven: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="section-seven relative z-20 bg-black pt-[33.3vw] pb-[169px] 2xl:pt-[640px]"
      ref={sectionRef}
    >
      <CubeAnimation containerRef={sectionRef} />
      <div className="relative z-20 mx-auto mb-[52px] max-w-[960px] text-center">
        <h4 className="uppercase">
          <span className="text-yellow block">Ready to colour your world?</span>
          <span className="block text-white">
            <CustomLink href={BRAND_URL} className="underline">
              Rubik’s Cubes
            </CustomLink>{' '}
            are available on Amazon and at Big W, Kmart, Target and all good toy
            retailers.
          </span>
        </h4>
      </div>
      <CustomLink
        href={BRAND_URL}
        className="bg-yellow footer-link mx-auto flex h-[52px] w-[204px] items-center justify-center rounded-[5px] text-black"
      >
        LEARN MORE
      </CustomLink>
    </section>
  );
};

export default SectionSeven;
