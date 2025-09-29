/**
 * TestimonialsParallax
 * Jarallax parallax background with Owl Carousel testimonials.
 */

// Testimonials data map
const testimonialsData = [
  {
    id: 1,
    name: "Yuvraj",
    date: "09 Sep",
    image: "/img/testimonial_1.jpg",
    comment:
      "My recent stay at Kalimpong Bungalow was truly exceptional, exceeding all my expectations. From the moment I walked in, I was greeted by the most welcoming staffs. The room itself was a highlight , clean, spacious and the most important part was the private balcony that they have in every rooms from where you can enjoy the whole view.",
  },
  {
    id: 2,
    name: "Bivek",
    date: "10 Sep",
    image: "/img/testimonial_1.jpg",
    comment:
      "We had a great stay at Kalimpong Bungalow. The hotel is located in a very beautiful and a very peaceful location. The Food was served hot and tasty. The room was beautiful and spacious equipped with all the basic amenities.",
  },
  {
    id: 3,
    name: "Deepa",
    date: "28 Aug",
    image: "/img/testimonial_1.jpg",
    comment:
      "Our recent stay at kalimpong Bungalow was memorable. Everything was so beautiful and well maintained. Food was excellent and the staffs were very helpful and friendly. This hotel is not just a place to stay but a truly beautiful experience that we won't soon forget.",
  },
];

export default function TestimonialsParallax() {
  return (
    <div className="parallax_section_1 jarallax" data-jarallax data-speed="0.2">
      <img
        className="jarallax-img kenburns-2"
        src="/img/testimonials/testimonials_bg.jpg"
        alt="testimonials background"
      />
      <div
        className="wrapper opacity-mask d-flex align-items-center justify-content-center text-center"
        data-opacity-mask="rgba(0, 0, 0, 0.5)"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="title white">
                <small className="mb-1">Testimonials</small>
                <h2>What Clients Says</h2>
              </div>
              <div className="carousel_testimonials owl-carousel owl-theme nav-dots-orizontal">
                {testimonialsData.map((testimonial) => (
                  <div key={testimonial.id}>
                    <div className="box_overlay">
                      <div className="pic">
                        <figure>
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.name} testimonial`}
                            className="img-circle"
                          />
                        </figure>
                        <h4>
                          {testimonial.name}
                          <small>{testimonial.date}</small>
                        </h4>
                      </div>
                      <div className="comment">{testimonial.comment}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
