"use client";
/**
 * PinnedVideo
 * Pinned image/video section with overlayed title.
 * Plays videos sequentially in a loop: Video_10 → Video_20 → Video_10 → ...
 */
import { useEffect, useRef, useState } from "react";

export default function PinnedVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const videos = ["/video/Video_10.mp4", "/video/Video_20.mp4"];

  /* Visibility tracking for lazy loading/playing */
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 } // Play when 20% visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Effect to manage playback based on visibility and current video
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Auto-play prevented or interrupted:", error);
        });
      }
    } else {
      video.pause();
    }
  }, [isInView, currentVideoIndex]);

  // Original event listeners logic (kept for looping, but removed auto-play logic inside)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      console.log(`Video ${currentVideoIndex} ended, switching to next`);
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = prevIndex === videos.length - 1 ? 0 : prevIndex + 1;
        return nextIndex;
      });
    };

    video.addEventListener("ended", handleVideoEnd);
    return () => {
      video.removeEventListener("ended", handleVideoEnd);
    };
  }, [currentVideoIndex, videos.length]);

  return (
    <div className="bg_white">
      <div className="pinned-image pinned-image--medium w-screen">
        <div className="pinned-image__container" id="section_video">
          <video
            ref={videoRef}
            muted
            preload="none"
            playsInline
            id="video_home"
            className="w-full h-full object-cover"
            key={currentVideoIndex} // Force re-render when video changes
          >
            <source src={videos[currentVideoIndex]} type="video/mp4" />
          </video>
          <div className="pinned-image__container-overlay"></div>
        </div>
        <div className="pinned_over_content">
          <div className="title white">
            <small data-cue="slideInUp" data-delay="200">
              Calm • Culture • Comfort
            </small>
            <h2 data-cue="slideInUp" data-delay="300">
              Unique Stays
              <br />
              Rooted in Nature’s Beauty
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
