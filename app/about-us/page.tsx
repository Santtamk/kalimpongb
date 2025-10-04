import React from "react";
import AboutUs from "./AboutUs";
import TextArea from "./TextArea";
// import AboutCard from "./AboutCard";
// import AboutCard from "./AboutImage";
import AboutImage from "./AboutImage";

const AboutUsSection = () => {
  return (
    <div className="">
      <div>
        <AboutUs />
      </div>
      <div className="max-w-[1200px] mx-auto ">
        <div
          className="h-fit lg:h-[50vh]  text-center  flex justify-center items-center py-10
         px-4"
        >
          <TextArea
            text={
              <p className="intro">
                <em>
                  Tucked into the serene hills of Kalimpong, the Bungalow is
                  more than a stay. It is a cultural retreat for curious,
                  thoughtful travellers. Created for those who wish to
                  experience the hills in a more personal way, Kalimpong
                  Bungalow invites guests into a home that feels intimate,
                  heritage-rich, and warmly welcoming.
                </em>
              </p>
            }
          />
        </div>
        <div className="h-screen flex justify-center items-center">
          <AboutImage
            image="/img/gallery/9.jpg"
            title="Beyond Traditional Hospitality"
            body="At our core, we go further than standard hospitality. We don't just provide a place to stay — we create meaningful experiences, anticipating needs and adding thoughtful touches that make every moment memorable."
            imagePosition="right"
            alt="Cozy room with warm lighting"
          />
        </div>
        <div
          className="h-fit lg:h-[50vh]  text-center  flex justify-center items-center py-10
         px-4"
        >
          <TextArea
            text={
              <p className="intro">
                <em>
                  We don’t think of this as a hotel, but as a friend’s home
                  awaiting your arrival. A home where we can share the soul of
                  our town with a quiet, heartfelt pride. Every corner is
                  designed for comfort, meant to feel both peaceful and deeply
                  familiar. By the time you leave, we hope Kalimpong is no
                  longer just a place you visited, but a feeling you carry with
                  you.
                </em>
              </p>
            }
          />
        </div>
        <div className="h-screen flex justify-center items-center">
          <AboutImage
            image="/img/gallery/2.jpg"
            title="Find Your Place in Our Narrative"
            body="You are not just a guest here; you are being welcomed as a friend. We take quiet joy in introducing you to the spirit of our town. The atmosphere we’ve created is one of calm and simple grace, a place where you can feel instantly at ease. Our wish is that when you depart, you take a piece of Kalimpong’s heart with you, woven into your own personal story."
            imagePosition="left"
            alt="Cozy room with warm lighting"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
