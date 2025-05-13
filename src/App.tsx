import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import LocomotiveParallax from './js/parallax';
import Header from './components/blocks/Header';
import Footer from './components/blocks/Footer';
import VideoScroll from './components/miscellaneous/VideoScroll';
import Hero from './components/blocks/Hero';
import SectionTwo from './components/blocks/SectionTwo';
import SectionThree from './components/blocks/SectionThree';
import SectionFour from './components/blocks/SectionFour';
import SectionFive from './components/blocks/SectionFive';
import SectionSix from './components/blocks/SectionSix';
import SectionSeven from './components/blocks/SectionSeven';
// import VideoAutoPlay from './components/miscellaneous/VideoAutoPlay';
import useGSAPMobileAnimations from './hooks/useGSAPMobileAnimations';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const locoScrollRef = useRef<HTMLElement>(null);
  useGSAPMobileAnimations();

  return (
    <div>
      <main>
        <Header />
        <article className="bg-black">
          <LocomotiveParallax locoScrollRef={locoScrollRef}>
            <VideoScroll
              videoId="6372135225112"
              className="video-wrapper fixed inset-0 z-0 hidden w-[220vw] -translate-x-[20vw] translate-y-[17vw] sm:w-[140vw] sm:translate-x-[8vw] sm:translate-y-[4vw] lg:block! lg:w-full lg:-translate-x-[5vw] lg:translate-y-0 2xl:translate-x-0"
            />
            <VideoScroll
              videoId="6372135225112"
              className="video-wrapper fixed inset-0 z-0 w-[220vw] -translate-x-[20vw] translate-y-[17vw] sm:w-[140vw] sm:translate-x-[8vw] sm:translate-y-[4vw] lg:hidden! lg:w-full lg:-translate-x-[5vw] lg:translate-y-0 2xl:translate-x-0"
            />
            <Hero />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
          </LocomotiveParallax>
        </article>
        <Footer />
      </main>
    </div>
  );
};

export default App;
