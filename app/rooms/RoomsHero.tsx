"use client";
import React, { useEffect, useState } from "react";

const RoomsHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="carousel-home">
       {/* 
        Re-using 'owl-carousel' and 'owl-theme' classes to keep existing CSS styles 
        for text/layout, but adding 'owl-loaded' and 'owl-drag' to ensure visibility 
        since we aren't using the JS library.
      */}
      <div className="owl-carousel owl-theme kenburns owl-loaded owl-drag">
        <div className="owl-stage-outer">
          <div className="owl-stage">
            <div className="owl-item active" style={{ width: "100%" }}>
              <div
                className="owl-slide background-image relative bg-cover bg-center
                           !min-h-[100dvh] md:!min-h-[70vh] lg:!min-h-[80vh]"
                style={{ backgroundImage: "url(/img/gallery/23.jpg)" }}
              >
                <div
                  className="opacity-mask flex items-center h-full"
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
                >
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-6 static">
                        <div className="slide-text white text-center">
                          <small
                            className={`owl-slide-animated owl-slide-title ${
                              isLoaded ? "is-transitioned" : ""
                            }`}
                          >
                            Spaces to Settle In
                          </small>
                          <h2
                            className={`owl-slide-animated owl-slide-title-2 ${
                              isLoaded ? "is-transitioned" : ""
                            }`}
                          >
                            Where every detail is crafted for peace and rest.
                          </h2>
                        </div>
                      </div>
                    </div>
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

export default RoomsHero;
