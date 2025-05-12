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
            <a
              href={BRAND_URL}
              className="link"
              id="style-2"
              rel="noopener noreferrer"
              target="_blank"
              data-replace="Rubik’s Cubes"
            >
              <span>Rubik’s Cubes</span>
            </a>{' '}
            are available on Amazon and at Big W, Kmart, Target and all good toy
            retailers.
          </span>
        </h4>
      </div>
      <CustomLink
        href={BRAND_URL}
        className="bg-yellow footer-link group relative mx-auto flex h-[52px] w-[204px] items-center justify-center rounded-[5px] text-nowrap text-black transition-all duration-300 hover:bg-white"
      >
        <span className="transition-all duration-300 group-hover:translate-x-[300px]">
          LEARN MORE
        </span>
        <span className="absolute left-1/2 -translate-x-[300px] transition-all duration-300 group-hover:-translate-x-1/2">
          LEARN MORE
        </span>
      </CustomLink>
    </section>
  );
};

export default SectionSeven;
