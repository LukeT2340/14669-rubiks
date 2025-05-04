import { useEffect } from 'react';
import one from '../../assets/images/cube-anim/1.png';
import two from '../../assets/images/cube-anim/2.png';
import three from '../../assets/images/cube-anim/3.png';
import four from '../../assets/images/cube-anim/4.png';
import five from '../../assets/images/cube-anim/5.png';
import six from '../../assets/images/cube-anim/6.png';
import seven from '../../assets/images/cube-anim/7.png';
import eight from '../../assets/images/cube-anim/8.png';
import nine from '../../assets/images/cube-anim/9.png';
import ten from '../../assets/images/cube-anim/10.png';
import eleven from '../../assets/images/cube-anim/11.png';
import twelve from '../../assets/images/cube-anim/12.png';
import thirteen from '../../assets/images/cube-anim/13.png';
import fourteen from '../../assets/images/cube-anim/14.png';
import fifteen from '../../assets/images/cube-anim/15.png';
import sixteen from '../../assets/images/cube-anim/16.png';

const images: string[] = [
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  eight,
  nine,
  ten,
  eleven,
  twelve,
  thirteen,
  fourteen,
  fifteen,
  sixteen,
];

const formattedImages = [...images].reverse();

interface Props {
  containerRef: React.RefObject<HTMLDivElement>;
}

const CubeAnimation: React.FC<Props> = ({ containerRef }) => {
  useEffect(() => {
    let animationFrameId: number;
    let offset = window.innerHeight / 2;

    const updateAnimation = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const progress =
        (window.scrollY - rect.top - offset) /
        (rect.height + (window.innerHeight - offset));
      const frames = container.querySelectorAll('.cube-frame');
      const showFrame = Math.floor(progress * images.length);
      if (progress > 0 && progress < 1) {
        for (let i = 0; i < frames.length; i++) {
          frames[i].classList.add(showFrame === i ? 'block' : 'hidden');
          frames[i].classList.remove(showFrame === i ? 'hidden' : 'block');
        }
      }

      animationFrameId = requestAnimationFrame(updateAnimation);
    };

    animationFrameId = requestAnimationFrame(updateAnimation);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [containerRef]);

  return (
    <div className="cube-animation relative z-40 h-full w-full">
      {formattedImages.map((image, index) => (
        <img
          key={image}
          src={image}
          alt={`Cube Animation Frame ${index + 1}`}
          className={`cube-frame absolute right-0 bottom-0 ${index === 0 ? 'block' : 'hidden'} w-[40%]`}
        />
      ))}
    </div>
  );
};

export default CubeAnimation;
