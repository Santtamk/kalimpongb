import React from "react";
import RoomsSection from "./RoomsSection";
import RoomsHero from "./RoomsHero";
import TextArea from "../about-us/TextArea";

const RoomsPage = () => {
  return (
    <div>
      <RoomsHero />
      <div className="max-w-[1200px] mx-auto">
        <div
          className="h-fit lg:h-[50vh]  text-center  flex justify-center items-center py-10
        px-4"
        >
          <TextArea
            text={
              <p className="intro">
                <em>
                  Each room in our bungalow is an invitation to embrace a slower
                  pace—not just to rest, but to truly feel at home. Surrounded
                  by warm wood and gentle light, time moves differently here.
                  Just beyond your window, the serene spirit of the Kalimpong
                  hills waits to be discovered, moment by moment.
                </em>
              </p>
            }
          />
        </div>
        <RoomsSection />
      </div>
    </div>
  );
};

export default RoomsPage;
