import React from "react";
import Link from "next/link";
import Image from "next/image";

/**
 * AboutSection
 * Intro section with images and facility boxes. Markup preserved to match styles and JS hooks.
 */
export default function RoomSection() {
  return (
    <div className="bg_white" id="about">
      <div className="container margin_120_95">
        <div className="row justify-content-between flex-lg-row-reverse align-items-center">
          <div className="col-lg-5">
            <div className="parallax_wrapper">
              <Image
                src="/img/gallery/6.jpg"
                alt="Room interior"
                width={800}
                height={600}
                className="img-fluid rounded-img scale-x-[-1]"
              />
              <div data-cue="slideInUp" className="img_over">
                <span data-jarallax-element="-30">
                  <Image
                    src="/img/gallery/9.jpg"
                    alt="Room detail"
                    width={400}
                    height={300}
                    className="rounded-img"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="intro">
              <div className="title">
                <small>Rooms</small>
                <h2>Rooms of Character, Comfort, and Quiet Charm.</h2>
              </div>
              <p className="lead">A Home of Culture & Calm in the Himalayas</p>
              <p>
                Find your perfect retreat at our Kalimpong bungalow. We offer
                rooms with beautiful mountain views, cozy garden suites with
                private patios, and a spacious Heritage Suite with a fireplace.
                It's more than just a place to stay—it's a place to relax and
                feel at home.
              </p>
              <p>
                <Link href={"/rooms"}>
                  <em>Read more</em>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
