/**
 * BookingForm Component
 * Traditional booking form that submits to PHP backend
 * Handles room selection, dates, guest count, and basic validation
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
        <div id="message-booking"></div>
        <form
          method="post"
          action="/phpmailer/reserve_template_email.php"
          id="bookingform"
          autoComplete="off"
        >
          <input type="hidden" id="date_booking" name="date_booking" />
          <div className="row">
            <div className="col-lg-6">
              <div className="custom_select">
                <select
                  className="wide"
                  name="rooms_booking"
                  id="rooms_booking"
                >
                  <option value="">Select Room</option>
                  <option value="Double Room">Double Room with Balcony</option>
                  <option value="Deluxe Room">
                    Deluxe Double Room with Balcony
                  </option>
                  <option value="Superior Room">Standard Double Room</option>
                </select>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-6">
                  <div className="qty-buttons mb-3 version_2">
                    <input
                      type="button"
                      value="+"
                      className="qtyplus"
                      name="adults_booking"
                    />
                    <input
                      type="text"
                      name="adults_booking"
                      id="adults_booking"
                      className="qty form-control"
                      placeholder="Adults"
                    />
                    <input
                      type="button"
                      value="-"
                      className="qtyminus"
                      name="adults_booking"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <div className="mb-3 qty-buttons version_2">
                    <input
                      type="button"
                      value="+"
                      className="qtyplus"
                      name="childs_booking"
                    />
                    <input
                      type="text"
                      name="childs_booking"
                      id="childs_booking"
                      className="qty form-control"
                      placeholder="Childs"
                    />
                    <input
                      type="button"
                      value="-"
                      className="qtyminus"
                      name="childs_booking"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="text"
                  name="name_booking"
                  id="name_booking"
                  className="form-control"
                  placeholder="Name and Last Name"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input
                  type="email"
                  name="email_booking"
                  id="email_booking"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-auto">
                  <label htmlFor="verify_booking" className="col-form-label">
                    <strong>Are you human?</strong>
                  </label>
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="verify_booking"
                    id="verify_booking"
                    className="form-control"
                    placeholder="3 + 1 = ?"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-2">
              <p className="text-end">
                <input
                  className="btn_1 outline"
                  type="submit"
                  value="Check Now"
                  id="submit-booking"
                />
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
