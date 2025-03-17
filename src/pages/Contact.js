import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(data).toString(),
    })
      .then(() => setIsSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or feedback, please feel free to reach out to us. We'd love to hear from you!</p>
      <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact" />
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>
      {isSubmitted && (
        <div className="thank-you-modal">
          <div className="thank-you-content">
            <h2>Thank You!</h2>
            <p>Your message has been sent successfully. We will get back to you soon.</p>
            <button onClick={() => setIsSubmitted(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;