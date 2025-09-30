"use client";
/**
 * ContactForm Component (Simple + Well-Commented)
 *
 * Behavior:
 * - If a Web3Forms access key is present (env or hidden input), submit via fetch to Web3Forms.
 * - Otherwise, gracefully fall back to your PHP endpoint (classic POST).
 *
 * Install:
 *   .env.local -> NEXT_PUBLIC_WEB3FORMS_KEY=YOUR_WEB3FORMS_ACCESS_KEY
 *   (Restart dev server after adding .env)
 */

import { useCallback, useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [msg, setMsg] = useState("");

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      // Avoid double-submit
      if (status === "loading") return;

      setStatus("loading");
      setMsg("");

      const form = e.currentTarget;
      const fd = new FormData(form);

      // --- Basic validation (defensive; you can also rely on required attributes) ---
      const required = [
        "name_contact",
        "lastname_contact",
        "email_contact",
        "message_contact",
      ];
      for (const key of required) {
        if (!String(fd.get(key) || "").trim()) {
          setStatus("error");
          setMsg("Please fill all required fields.");
          return;
        }
      }

      // Simple human check: 3 + 1 = 4
      if (String(fd.get("verify_contact") || "").trim() !== "4") {
        setStatus("error");
        setMsg("Verification failed. Please answer 3 + 1 correctly.");
        return;
      }

      // Determine if we have a Web3Forms key
      const envKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY || "";
      const inlineKey = String(fd.get("access_key") || "");
      const accessKey = inlineKey || envKey;

      // If no key, fall back to your PHP endpoint via normal submit
      if (!accessKey) {
        form.submit();
        return;
      }

      // --- Prepare payload for Web3Forms ---
      const senderEmail = String(fd.get("email_contact") || "");
      fd.set("access_key", accessKey);
      fd.set("subject", "Kalimpong Bungalow – New Contact Submission");
      fd.set("replyto", senderEmail);
      fd.set("email", senderEmail); // helps provider recognize sender
      fd.set("from_name", "Kalimpong Bungalow Website");
      // Optional redirect after success:
      // fd.set("redirect", "https://your-site.com/thank-you");

      try {
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: fd,
        });
        const data = await res.json();

        if (data?.success) {
          setStatus("success");
          setMsg("Thank you! Your message has been sent.");
          form.reset();
        } else {
          setStatus("error");
          setMsg(data?.message || "Something went wrong. Please try again.");
        }
      } catch {
        setStatus("error");
        setMsg("Network error. Please try again.");
      }
    },
    [status]
  );

  return (
    <div
      className="tab-pane fade"
      id="second_tab_pane"
      role="tabpanel"
      aria-labelledby="second_tab"
      tabIndex={0}
    >
      <div className="contacts_wrapper">
        {/* Inline messages (success/error/loading) */}
        <div id="message-contact" aria-live="polite">
          {status !== "idle" && (
            <div
              className={`alert ${
                status === "success"
                  ? "alert-success"
                  : status === "loading"
                  ? "alert-secondary"
                  : "alert-danger"
              }`}
              role="status"
            >
              {status === "loading" ? "Sending..." : msg}
            </div>
          )}
        </div>

        {/* NOTE:
            - action/method kept for PHP fallback.
            - onSubmit intercepts only if a Web3Forms key exists.
        */}
        <form
          method="post"
          action="/phpmailer/contact_template_email.php"
          id="contactform"
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {/* Web3Forms access key (hidden). Prefer env, but you can hardcode here for quick tests. */}
          <input
            type="hidden"
            name="access_key"
            value={`03317753-1cad-48a8-9236-3a1e417a3958`}
          />
          {/* Optional defaults (also set in JS; last one wins) */}
          <input
            type="hidden"
            name="from_name"
            value="Kalimpong Bungalow Website"
          />
          <input
            type="hidden"
            name="subject"
            value="Kalimpong Bungalow – New Contact Submission"
          />

          {/* Honeypot (spam trap). Keep empty. */}
          <input
            type="text"
            name="botcheck"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-5000px", opacity: 0 }}
            aria-hidden="true"
          />

          {/* --- Personal Details --- */}
          <div className="row">
            <div className="col-sm-6">
              <div className="form-floating mb-4">
                <input
                  className="form-control"
                  type="text"
                  id="name_contact"
                  name="name_contact"
                  placeholder="Name"
                  required
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
                  required
                />
                <label htmlFor="lastname_contact">Last name</label>
              </div>
            </div>
          </div>

          {/* --- Contact Details --- */}
          <div className="row">
            <div className="col-sm-6">
              <div className="form-floating mb-4">
                <input
                  className="form-control"
                  type="email"
                  id="email_contact"
                  name="email_contact"
                  placeholder="Email"
                  required
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
                  inputMode="tel"
                />
                <label htmlFor="phone_contact">Telephone</label>
              </div>
            </div>
          </div>

          {/* --- Message --- */}
          <div className="form-floating mb-4">
            <textarea
              className="form-control"
              placeholder="Message"
              id="message_contact"
              name="message_contact"
              required
              style={{ minHeight: 120 }}
            />
            <label htmlFor="message_contact">Message</label>
          </div>

          <hr />

          {/* --- Human Check + Submit --- */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="row align-items-center">
                <div className="col-auto">
                  <label htmlFor="verify_contact" className="col-form-label">
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
                    inputMode="numeric"
                    pattern="[0-9]*"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="col-md-6 mb-2">
              <p className="text-end">
                <button
                  className="btn_1 outline"
                  type="submit"
                  id="submit-contact"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending…" : "Submit"}
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
