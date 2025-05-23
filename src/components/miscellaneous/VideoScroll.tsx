import React, { useState, useEffect, useRef } from 'react';
// import useExternalScripts from '../../hooks/useExternalScripts';

const useExternalScripts = (url: string) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = () => setLoaded(true);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return loaded;
};

interface VideoProps {
  videoId: string;
  className?: string;
}

const VideoJS = React.forwardRef((props: any, ref: any) =>
  React.createElement('video-js', { ...props, ref })
);

const VideoScroll = ({ videoId, className }: VideoProps) => {
  const scriptLoaded = useExternalScripts(
    'https://players.brightcove.net/6165065566001/wIpGq2Kd0p_default/index.min.js'
  );
  const videoRef = useRef<HTMLDivElement>(null);

  const videoOptionsObserver = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  useEffect(() => {
    if (!scriptLoaded) return;

    console.log('Script loaded');

    const videojs = (window as any).videojs;

    if (!videojs) {
      console.error('Video.js not found');
      return;
    }

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const video = entry.target;
          const videoID = video.getAttribute('id');
          const player = videojs.getPlayer(videoID);

          player.ready(async () => {
            console.log('Player ready');

            await player.muted(true);

            console.log('Player muted');

            player.setAttribute('playsinline', '');
            player.setAttribute('webkit-playsinline', '');

            await player.play();

            const videoDuration = player.duration();
            let currentTime = 0;
            const updateAnimation = () => {
              const progress =
                (window.scrollY * 2.3) /
                (document.body.scrollHeight - window.innerHeight);
              currentTime = player.currentTime();
              const newTime = videoDuration * progress;

              if (Math.abs(currentTime - newTime) > 0.001) {
                player.currentTime(newTime);
              }
              requestAnimationFrame(updateAnimation);
            };

            requestAnimationFrame(updateAnimation);
          });
        } else {
          // @ts-ignore
          if (window.videojs) {
            const video = entry.target;
            const videoID = video.getAttribute('id');
            const player = videojs.getPlayer(videoID);
            if (!player.paused()) {
              player.pause();
            }
          }
        }
      });
    }, videoOptionsObserver);

    if (videoRef.current) {
      videoObserver.observe(videoRef.current);
    }
  }, [scriptLoaded]);

  return (
    <div className={`${className} video-scroll`}>
      <VideoJS
        data-account="6165065566001"
        data-player={'wIpGq2Kd0p'}
        data-embed="default"
        controls=""
        data-video-id={videoId}
        data-playlist-id=""
        data-application-id=""
        ref={videoRef}
        class="vjs-fluid"
        id="video-player"
        muted
      />
      <h3 className="sr-only">Video</h3>
    </div>
  );
};

export default VideoScroll;
