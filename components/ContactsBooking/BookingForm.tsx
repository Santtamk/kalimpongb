/**
 * BookingForm Component
 * Simplifies the booking process by directing users to the external StayFlexi engine.
 * Replaces the complex form with a clean, attractive Call to Action.
 */
export default function BookingForm() {
    return (
      <div
        className="tab-pane fade show active"
        id="first_tab_pane"
        role="tabpanel"
        aria-labelledby="first_tab"
        tabIndex={0}
      >
        <div className="booking_wrapper">
          <div className="col-12 text-center py-5">
              <div className="title mb-4">
                  <small className="text-muted text-uppercase fw-bold ls-1 mb-2 d-block">Book Your Stay</small>
                  <h3 className="mb-3">Ready to Experience Kalimpong?</h3>
                  <p className="lead text-muted mx-auto" style={{ maxWidth: "500px" }}>
                      Check availability and book your stay directly with us for the best rates and exclusive offers.
                  </p>
              </div>
              <a 
                href="https://bookingengine.stayflexi.com/?hotel_id=34942" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn_1 outline btn-lg px-5"
              >
                  Check Availability
              </a>
          </div>
        </div>
      </div>
    );
  }
