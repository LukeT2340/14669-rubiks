import VideoScroll from '../../miscellaneous/VideoScroll';

const Hero: React.FC = () => (
  <section className="hero relative h-screen bg-blue-950">
    <div className="video-wrapper fixed inset-0 z-40 w-full">
      <VideoScroll videoId="6372135225112" className="w-full" />
    </div>
  </section>
);

export default Hero;
