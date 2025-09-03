import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./index.css";
import { SiLinkedin } from "react-icons/si";
import {
    VscMail, VscGithub,          
} from 'react-icons/vsc';

const ContactForm = () => {
  const form = useRef();
  const [notification, setNotification] = useState(null); // {type: "success"|"error", message: "..."}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ehov85c",    // Replace with EmailJS Service ID
        "template_mcbob9h",   // Replace with EmailJS Template ID
        form.current,
        "UwihPuf6k44ss5Ghr"     // Replace with EmailJS Public Key
      )
      .then(
        () => {
          setNotification({ type: "success", message: "Message sent successfully ✅" });
          form.current.reset();
          setTimeout(() => setNotification(null), 4000); // auto-hide
        },
        (error) => {
          setNotification({ type: "error", message: "Failed to send ❌ Try again!" });
          console.error(error.text);
          setTimeout(() => setNotification(null), 4000); // auto-hide
        }
      );
  };

  return (
    <div className="contactForm-container">
      <div className="contact-form">
        <h2>Send me a message</h2>
        <p>Fill out the form below and I'll get back to you as soon as possible.</p>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" className="input-handle" placeholder="Your Name" name="user_name" required />

          <label>Email</label>
          <input type="email" placeholder="Your Email" name="user_email" required />

          <label>Message</label>
          <textarea name="message" rows="5" required />

          <button type="submit">Send Message ✈</button>
        </form>
      </div>

      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>You can also reach me through these platforms.</p>
        <div className="contact-accnts"> <VscMail size={20}/> <strong>sriharshabhukya@gmail.com</strong></div>
        <div className="contact-accnts"> <VscGithub size={20} /> <a href="https://github.com/sriharsha" className="links">Sriharsha</a></div>
        <div className="contact-accnts"> <SiLinkedin size={20} /> <a href="https://linkedin.com/in/bhukya-sriharsha" className="links">Sriharsha</a></div>
      </div>

      {/* ✅ Notification Toast */}
      {notification && (
        <div className={`toast ${notification.type}`}>
          {notification.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
