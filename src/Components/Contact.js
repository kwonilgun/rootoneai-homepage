import React from "react";
import "../CSS/Contact.css";

const Contact = () => {
  return (
    <body>
      <header>
        <h1>Contact Us</h1>
        <p>
          Feel free to reach out to us through the form below or the provided
          contact details.
        </p>
      </header>

      <section class="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:contact@yourwebsite.com">contact@yourwebsite.com</a>
          </li>
          <li>
            <strong>Phone:</strong> <a href="tel:+123456789">+1 234 567 89</a>
          </li>
          <li>
            <strong>Address:</strong> 1234 Your Street, Your City, Country
          </li>
        </ul>
      </section>

      {/* <section class="contact-form">
    <h2>Send Us a Message</h2>
    <form action="submit_form.php" method="post">
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" required>

      <label for="email">Email:</label>
      <input type="email" id="email" name="email" required>

      <label for="message">Message:</label>
      <textarea id="message" name="message" rows="5" required></textarea>

      <button type="submit">Send Message</button>
    </form>
  </section> */}
    </body>
  );
};

export default Contact;
