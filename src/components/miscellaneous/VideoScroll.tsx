// @ts-nocheck
import React, { useState, useEffect, useRef } from 'react';
import { VIDEO_SCRIPT_URL, VIDEO_PLAYER_ID } from '../../js/global-variables';
import useExternalScripts from '../../hooks/useExternalScripts';

interface VideoProps {
  scriptUrl?: string;
  playerId?: string;
  videoId: string;
  className?: string;
}

const VideoJS = React.forwardRef((props: any, ref: any) =>
  React.createElement('video-js', { ...props, ref })
);

const VideoScroll = ({
  scriptUrl,
  playerId,
  videoId,
  className,
}: VideoProps) => {
  const scriptLoaded = useExternalScripts(scriptUrl ?? VIDEO_SCRIPT_URL);

  useEffect(() => {
    if (!scriptLoaded) return;

    const videojs = (window as any).videojs;

    if (!videojs) return;

    const player = videojs(document.querySelector('#video-player'));

    if (!player) return;

    player.ready(async () => {
      await player.play();
      player.pause();

      let animationFrameId: number;
      const videoDuration = player.duration();
      let currentTime = 0;
      const updateAnimation = () => {
        const progress =
          (window.scrollY * 2.3) /
          (document.body.scrollHeight - window.innerHeight);

        currentTime = player.currentTime();
        const newTime = videoDuration * progress;

        // Only update the current time if it has changed so as to avoid dom changes when not scrolling
        if (Math.abs(currentTime - newTime) > 0.001) {
          player.currentTime(newTime);
        }
        animationFrameId = requestAnimationFrame(updateAnimation);
      };

      animationFrameId = requestAnimationFrame(updateAnimation);
    });

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [scriptLoaded]);

  return (
    <div className={`${className} video-scroll`}>
      <VideoJS
        data-account="6165065566001"
        data-player={playerId ?? VIDEO_PLAYER_ID}
        data-embed="default"
        controls=""
        data-video-id={videoId}
        data-playlist-id=""
        data-application-id=""
        class="vjs-fluid"
        id="video-player"
        muted
        loop
      />
      <h3 className="sr-only">Video</h3>
    </div>
  );
};

export default VideoScroll;
