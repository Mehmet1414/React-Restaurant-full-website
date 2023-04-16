import React from "react";
import BannerImage from "../assets/2blackbean.jpg";

function Contact() {
  return (
    <div className="contact">
      <div
        className="contactLeftSide"
        style={{ backgroundImage: `url(${BannerImage})` }}
      ></div>
      <div className="contactRightSide">
        <h1>Contact Us</h1>
        <form id="contactForm">
          <div className="name">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter full name"
            />
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="message">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
