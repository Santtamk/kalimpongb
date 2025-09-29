/**
 * RoomsSection
 * Data-driven rendering of the Rooms + Main Facilities sections.
 * - Edit the arrays below to change content, images, order, etc.
 * - All original classes/data-attributes are preserved so vendor JS (Owl Carousel, fslightbox, Jarallax, ScrollCue)
 *   continues to work without extra wiring.
 */

type Room = {
  id: number; // Used to build lightbox group names (rooms_{id}) and image filenames
  name: string;
  price: string; // e.g., "From $150/night"
  desc: string;
  images: string[]; // Absolute paths under /public (e.g., "/img/rooms/1.jpg")
  inverted?: boolean; // If true, swaps the columns on xl (matches template's second row)
  delay?: string; // Optional animation delay for the row (e.g., "300")
};

type Facility = {
  iconClass: string; // e.g., "customicon-bath-tub"
  title: string;
  text: string;
  noBorder?: boolean; // Adds "no-border" class to the box
};

export default function RoomsSection() {
  // Keep your custom small title from previous edits; change here anytime
  const smallTitle = "Stay in Heritage, Wake up in Nature";

  // Rooms content — add, remove, or edit entries; images should exist under /public/img/rooms
  const rooms: Room[] = [
    {
      id: 1,
      name: "Double Room with Balcony",
      price: "From ₹₹₹₹/night",
      desc: "A cozy 28 m² retreat with a large double bed, private bathroom, and balcony view. Perfect for couples or solo travelers looking for a peaceful, simple, and homely stay. Thoughtfully equipped with fresh linen, a wardrobe, and an electric kettle for your comfort.",
      images: ["/img/rooms/1.jpg", "/img/rooms/opt_1.jpg"],
      delay: "300",
    },
    {
      id: 2,
      name: "Deluxe Double Room with Balcony",
      price: "From ₹₹₹₹/night",
      desc: "A more spacious 28 m² room offering refined comfort with a large double bed, private bathroom, and scenic balcony. Ideal for guests who want a little extra elegance while enjoying Kalimpong’s charm. Complete with soft linens, a wardrobe, and modern amenities for a relaxed yet indulgent stay.",
      images: ["/img/rooms/2.jpg", "/img/rooms/opt_2.jpg"],
      inverted: true,
    },
    {
      id: 3,
      name: "Standard Double Room",
      price: "From ₹₹₹₹/night",
      desc: "Beautiful design with modern furnishings including a glamorous bay window with your own private view of Lucerne.",
      images: ["/img/rooms/3.jpg", "/img/rooms/opt_3.jpg"],
    },
  ];

  // Facilities list — 1st item has no-border as per the template
  const facilities: Facility[] = [
    {
      iconClass: "customicon-bath-tub",
      title: "Large Bath Room",
      text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
      noBorder: true,
    },
    {
      iconClass: "customicon-wifi",
      title: "High Speed Wifi",
      text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.",
    },
    {
      iconClass: "customicon-air-condition",
      title: "Air Condition",
      text: "Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    },
    {
      iconClass: "customicon-washing-machine",
      title: "Wahsing Machine",
      text: "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.",
    },
  ];

  return (
    <div className="container margin_120_95" id="rooms">
      {/* Section heading */}
      <div className="title mb-4">
        <small data-cue="slideInUp">{smallTitle}</small>
        <h2 data-cue="slideInUp" data-delay="200">
          Our Rooms
        </h2>
        {/* <p data-cue="slideInUp" data-delay="200">
          Each room at Kalimpong Bungalow is designed with a blend of cultural
          charm and modern ease. From heritage-inspired interiors to views of
          lush gardens and misty hills, every stay is a retreat for the senses.
        </p> */}
      </div>

      {/* Rooms loop: each entry renders a row with an Owl carousel and a details column */}
      {rooms.map((room) => {
        const group = `rooms_${room.id}`; // Lightbox group name, matches original
        return (
          <div
            key={room.id}
            className={`row_list_version_2${room.inverted ? " inverted" : ""}`}
            data-cue="slideInUp"
            data-delay={room.delay}
          >
            <div className="row g-0 align-items-center">
              {/* Image carousel column */}
              <div className={`col-xl-8${room.inverted ? " order-xl-2" : ""}`}>
                {/*
                  Vendor note: the classes below are required by Owl Carousel and the template
                  effects (kenburns, rounded-img). Do not remove unless you migrate the slider.
                */}
                <div className="owl-carousel owl-theme carousel_item_1 kenburns rounded-img">
                  {room.images.map((src, idx) => (
                    <div className="item" key={idx}>
                      <a data-fslightbox={group} data-type="image" href={src}>
                        <img src={src} alt="" />
                      </a>
                    </div>
                  ))}
                </div>
                {/* /carousel */}
              </div>

              {/* Details column */}
              <div className={`col-xl-4${room.inverted ? " order-xl-1" : ""}`}>
                <div className="box_item_info" data-jarallax-element="-25">
                  <small>{room.price}</small>
                  <h2>{room.name}</h2>
                  <p>{room.desc}</p>
                  <div className="facilities clearfix">
                    <ul>
                      <li>
                        <i className="customicon-double-bed"></i> King Size Bed
                      </li>
                      <li>
                        <i className="customicon-wifi"></i> Free Wifi
                      </li>
                    </ul>
                  </div>
                </div>
                {/* /box_item_info */}
              </div>
              {/* /col */}
            </div>
            {/* /row */}
          </div>
        );
      })}

      {/* Main Facilities */}
      <div className="title text-center mb-5">
        <small data-cue="slideInUp">Luxury B&B Experience</small>
        <h2 data-cue="slideInUp" data-delay="100">
          Main Facilities
        </h2>
      </div>

      {/* Facilities loop */}
      <div className="row mt-4">
        {facilities.map((f, i) => (
          <div className="col-xl-3 col-md-6" key={i}>
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
      {/* /Row */}
    </div>
  );
}
