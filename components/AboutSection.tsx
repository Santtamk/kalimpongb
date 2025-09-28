/**
 * AboutSection
 * Intro section with images and facility boxes. Markup preserved to match styles and JS hooks.
 */
export default function AboutSection() {
  // Facility items — edit this array to add/remove/update the feature boxes below.
  // All classes and data attributes are preserved to keep CSS/JS behavior unchanged.
  const facilities: {
    iconClass: string;
    title: string;
    text: string;
    noBorder?: boolean;
  }[] = [
    {
      iconClass: "icon-hotel-parking",
      title: "Private Parking",
      text: "Leave your worries behind—our bungalow provides secure, private parking so your journey ends in comfort and convenience.",
      noBorder: true,
    },
    {
      iconClass: "icon-hotel-disable",
      title: "Accessible",
      text: "Designed with care, our spaces ensure easy access and thoughtful amenities for all our guests.",
      noBorder: true,
    },
    {
      iconClass: "icon-hotel-dog",
      title: "Pet Friendly",
      text: "Bring along your furry companions—they’re part of the family, and we’re happy to welcome them too.",
      noBorder: true,
    },
    {
      iconClass: "icon-hotel-patio",
      title: "Balcony View",
      text: "Step out to fresh hill air and serene surroundings.",
      noBorder: true,
    },
  ];

  return (
    <div className="bg_white" id="about">
      <div className="container margin_120_95">
        <div className="row justify-content-between flex-lg-row-reverse align-items-center">
          <div className="col-lg-5">
            <div className="parallax_wrapper">
              <img
                src="/img/aboutUs/AboutUs1.png"
                alt=""
                className="img-fluid rounded-img scale-x-[-1]"
              />
              <div data-cue="slideInUp" className="img_over">
                <span data-jarallax-element="-30">
                  <img
                    src="/img/aboutUs/aboutUs2.svg"
                    alt=""
                    className="rounded-img"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="intro">
              <div className="title">
                <small>About us</small>
                <h2>Makes your self at home and enjoy a unique experience</h2>
              </div>
              <p className="lead">A Home of Culture & Calm in the Himalayas</p>
              <p>
                Kalimpong Bungalow is more than a stay—it’s an experience rooted
                in heritage, nature, and heartfelt hospitality. Tucked away in
                the quiet hills of Kalimpong, our bungalow reflects old-world
                architecture while offering modern comfort. Here, every corner
                whispers stories of the past, every window frames a scenic view,
                and every guest is welcomed like family.
              </p>
              <p>
                <em>YourName...the Owner</em>
              </p>
            </div>
          </div>
        </div>
        <hr className="more_margin" />
        {/* Facilities grid: rendered from the facilities array above for easy editing */}
        <div className="row mt-4">
          {facilities.map((f, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div
                className={`box_facilities${f.noBorder ? " no-border" : ""}`}
                data-cue="slideInUp"
              >
                <i className={f.iconClass}></i>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
