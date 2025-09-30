/**
 * AddressSection Component
 * Displays business address, contact information, and social media links
 */

export default function AddressSection() {
  return (
    <div className="col-xl-4">
      <div data-cue="slideInUp">
        <div className="title">
          <small>Kalimpong Bungalow – Cultural Bed & Breakfast</small>
          <h2>Address</h2>
        </div>
        <p>
          Kalimpong Bungalow, Ganesh Villa,
          <br /> Near Nag Dhara, 12 Mile,
          <br />
          Kalimpong -734301
        </p>
        <div className="phone_element no_borders">
          <a href="tel://+917908676707">
            <i className="bi bi-telephone"></i>
            <span>
              <em>Bookings</em>+91 7908676707
            </span>
          </a>
        </div>
        <div className="phone_element no_borders">
          <a href="mailto:kalimpongbungalow@gmail.com">
            <i className="bi bi-envelope"></i>
            <span>
              <em>Questions</em>kalimpongbungalow@gmail.com
            </span>
          </a>
        </div>

        {/* Check-in and Check-out Information */}
        <div className="phone_element no_borders ">
          <a href="#0">
            <i className="bi bi-clock"></i>
            <span>
              <em>Check-in</em>From 12:00 to 19:00
              <small
                className="d-inline-block ms-2 text-info !cursor-pointer !hover:scale-105"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="You'll need to let the property know in advance what time you'll arrive."
                style={{ cursor: "info" }}
              >
                <i className="bi bi-info-circle"></i>
              </small>
            </span>
          </a>
        </div>
        <div className="phone_element no_borders !pointer-events-none !cursor-default">
          <a href="#0">
            <i className="bi bi-clock-history"></i>
            <span>
              <em>Check-out</em>From 06:00 to 11:00
            </span>
          </a>
        </div>

        <div className="social mt-4">
          <ul>
            <li>
              <a href="#0">
                <i className="bi bi-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-whatsapp"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#0">
                <i className="bi bi-twitter-x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
