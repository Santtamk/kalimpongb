/**
 * PinnedVideo
 * Pinned image/video section with overlayed title.
 */
export default function PinnedVideo() {
  return (
    <div className="bg_white">
      <div className="pinned-image pinned-image--medium">
        <div className="pinned-image__container" id="section_video">
          <video loop muted id="video_home">
            <source src="/video/video_1.mp4" type="video/mp4" />
            <source src="/video/video_1.webm" type="video/webm" />
            <source src="/video/video_1.ogv" type="video/ogg" />
          </video>
          <div className="pinned-image__container-overlay"></div>
        </div>
        <div className="pinned_over_content">
          <div className="title white">
            <small data-cue="slideInUp" data-delay="200">
              Luxury B&amp;B Experience
            </small>
            <h2 data-cue="slideInUp" data-delay="300">
              Unique and Luxury Rooms
              <br />
              for your stay
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
