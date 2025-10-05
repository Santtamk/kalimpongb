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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleVideoEnd = () => {
      console.log(`Video ${currentVideoIndex} ended, switching to next`);
      // Move to next video, or loop back to first
      setCurrentVideoIndex((prevIndex) => {
        const nextIndex = prevIndex === videos.length - 1 ? 0 : prevIndex + 1;
        console.log(`Switching from video ${prevIndex} to video ${nextIndex}`);
        return nextIndex;
      });
    };

    const handleVideoLoad = () => {
      console.log(`Video ${currentVideoIndex} loaded, starting playback`);
      // Auto-play when video loads
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    };

    const handleCanPlay = () => {
      console.log(`Video ${currentVideoIndex} can play`);
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    };

    // Add multiple event listeners to ensure playback
    video.addEventListener("ended", handleVideoEnd);
    video.addEventListener("loadeddata", handleVideoLoad);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("loadeddata", handleVideoLoad);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [currentVideoIndex, videos.length]); // Re-run when currentVideoIndex changes

  // Additional effect to ensure video plays when component mounts or video changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Small delay to ensure video is ready
    const timer = setTimeout(() => {
      video.play().catch((error) => {
        console.log("Auto-play prevented:", error);
      });
    }, 100);

    return () => clearTimeout(timer);
  }, [currentVideoIndex]);

  return (
    <div className="bg_white">
      <div className="pinned-image pinned-image--medium w-screen">
        <div className="pinned-image__container" id="section_video">
          <video
            ref={videoRef}
            muted
            autoPlay
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
