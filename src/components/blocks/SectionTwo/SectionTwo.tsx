import { useRef } from 'react';
import CubeAnimation from '../../miscellaneous/CubeAnimation';

const SectionTwo: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <section
      className="section-two flex h-screen flex-col items-center justify-center bg-purple-400"
      ref={sectionRef}
    >
      <CubeAnimation containerRef={sectionRef} />
    </section>
  );
};

export default SectionTwo;
