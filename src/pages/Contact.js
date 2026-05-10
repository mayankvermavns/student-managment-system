import React from "react";

function Contact() {

  return (

    <div className="contact-page">

      <div className="contact-left">

        <h1>Get In Touch</h1>

        <p>
          Have questions about students,
          courses or dashboard?
        </p>

        <div className="contact-info">

          <p>📍 Varanasi, India</p>

          <p>📞 +91 ...........</p>

          <p>📧 admin@gmail.com</p>

        </div>

      </div>

      <div className="contact-right">

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button>
            Send Message
          </button>

        </form>

      </div>

    </div>

  );
}

export default Contact;