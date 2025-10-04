import React from "react";

const AboutUs = () => {
  return (
    <div id="carousel-home">
      <div className="owl-carousel owl-theme kenburns">
        <div
          className="owl-slide background-image relative bg-cover bg-center
                     !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
          data-background="url(/img/aboutUs/about1.png)"
        >
          <div
            className="opacity-mask flex items-center h-full"
            data-opacity-mask="rgba(0, 0, 0, 0.5)"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-6 static">
                  <div className="slide-text white text-center">
                    <small className="owl-slide-animated owl-slide-title">
                      Your home in Kalimpong
                    </small>
                    <h2 className="owl-slide-animated owl-slide-title-2">
                      More than a place to stay
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
