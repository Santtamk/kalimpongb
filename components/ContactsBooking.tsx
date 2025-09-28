/**
 * ContactsBooking
 * Address block and tabbed forms for booking and contact. Markup preserved to work with template JS.
 */
export default function ContactsBooking() {
  return (
    <div className="container margin_120_95" id="contacts">
      <div className="row justify-content-between">
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
              <a href="tel://423424234">
                <i className="bi bi-telephone"></i>
                <span>
                  <em>Bookings</em>+91 7908676707
                </span>
              </a>
            </div>
            <div className="phone_element no_borders">
              <a href="mailto:info@domain.com">
                <i className="bi bi-envelope"></i>
                <span>
                  <em>Questions</em>kalimpongbungalow@gmail.com
                </span>
              </a>
            </div>
            <div className="social mt-1">
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
        <div className="col-xl-7" id="booking_section">
          <ul className="nav nav-tabs" id="customTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="first_tab"
                data-bs-toggle="tab"
                data-bs-target="#first_tab_pane"
                type="button"
                role="tab"
                aria-controls="first_tab_pane"
                aria-selected="true"
              >
                Check Availability
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="second_tab"
                data-bs-toggle="tab"
                data-bs-target="#second_tab_pane"
                type="button"
                role="tab"
                aria-controls="second_tab_pane"
                aria-selected="false"
              >
                Contact Us
              </button>
            </li>
          </ul>
          <div className="tab-content">
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
                          <option value="Double Room">Double Room</option>
                          <option value="Deluxe Room">Deluxe Room</option>
                          <option value="Superior Room">Superior Room</option>
                          <option value="Junior Suite">Junior Suite</option>
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
                          <label
                            htmlFor="verify_booking"
                            className="col-form-label"
                          >
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
            <div
              className="tab-pane fade"
              id="second_tab_pane"
              role="tabpanel"
              aria-labelledby="second_tab"
              tabIndex={0}
            >
              <div className="contacts_wrapper">
                <div id="message-contact"></div>
                <form
                  method="post"
                  action="/phpmailer/contact_template_email.php"
                  id="contactform"
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-floating mb-4">
                        <input
                          className="form-control"
                          type="text"
                          id="name_contact"
                          name="name_contact"
                          placeholder="Name"
                        />
                        <label htmlFor="name_contact">Name</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating mb-4">
                        <input
                          className="form-control"
                          type="text"
                          id="lastname_contact"
                          name="lastname_contact"
                          placeholder="Last Name"
                        />
                        <label htmlFor="lastname_contact">Last name</label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="form-floating mb-4">
                        <input
                          className="form-control"
                          type="email"
                          id="email_contact"
                          name="email_contact"
                          placeholder="Email"
                        />
                        <label htmlFor="email_contact">Email</label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-floating mb-4">
                        <input
                          className="form-control"
                          type="text"
                          id="phone_contact"
                          name="phone_contact"
                          placeholder="Telephone"
                        />
                        <label htmlFor="phone_contact">Telephone</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-floating mb-4">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      id="message_contact"
                      name="message_contact"
                    ></textarea>
                    <label htmlFor="message_contact">Message</label>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="row align-items-center">
                        <div className="col-auto">
                          <label
                            htmlFor="verify_contact"
                            className="col-form-label"
                          >
                            <strong>Are you human?</strong>
                          </label>
                        </div>
                        <div className="col-md-4">
                          <input
                            type="text"
                            name="verify_contact"
                            id="verify_contact"
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
                          value="Submit"
                          id="submit-contact"
                        />
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
