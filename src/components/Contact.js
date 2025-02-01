import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <section id="page-header" className="about-header">
        <h2>#let's_talk</h2>
        <p>Leave A MESSAGE, We love to hear from you!</p>
      </section>
      
      <section id="contact-details" className="section-p1">
        <div className="details">
          <span>GET IN TOUCH</span>
          <h2>Visit one of our agency location or contact us today</h2>
          <h3>Head Office</h3>
          <div>
            <ul>
              <li>
                <i className="far fa-map"></i>
                <p>56 Glassford Street Glasow G1 1UL New York</p>
              </li>
              <li>
                <i className="far fa-envelope"></i>
                <p>contact@example.com</p>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <p>contact@example.com</p>
              </li>
              <li>
                <i className="far fa-clock"></i>
                <p>Monday to Saturday 9:00am to 4:00pm</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.687214909832!2d-1.2545179!3d51.75704289999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876c6a9ef8c485b%3A0xd2ff1883a001afed!2sUniversity%20of%20Oxford!5e0!3m2!1sen!2sin!4v1734546244912!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      <section id="form-details">
        <form>
          <span>LEAVE A MESSAGE</span>
          <h2>We love to hear from you</h2>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="E-mail" />
          <input type="text" placeholder="Subject" />
          <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
          <button className="normal">Submit</button>
        </form>
        <div className="people">
          <div>
            <img src="images/contact.jpeg" alt="John Doe" />
            <p>
              <span>John Doe</span> Senior Marketing Manager <br /> Phone: +000123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="images/contact1.jpeg" alt="William Switch" />
            <p>
              <span>William Switch</span> Senior Marketing Manager <br /> Phone: +000123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
          <div>
            <img src="images/contact2.jpeg" alt="Emma Stone" />
            <p>
              <span>Emma Stone</span> Senior Marketing Manager <br /> Phone: +000123 000 77 88 <br />
              Email: contact@example.com
            </p>
          </div>
        </div>
      </section>

      <section id="newsletter" className="section-p1 section-m1">
        <div className="newstext">
          <h4>Sign Up For Newsletters</h4>
          <p>
            Get E-mail updates about our latest shop and <span>special offers.</span>
          </p>
        </div>
        <div className="form">
          <input type="email" placeholder="Your email address" />
          <button className="normal">Sign Up</button>
        </div>
      </section>
    </>
  );
};

export default Contact;
