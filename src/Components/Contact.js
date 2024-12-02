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
            <a href="mailto:kwonilgun8404@gmail.com">kwonilgun8404@gmail.com</a>
          </li>
          <li>
            <strong>Phone : 070 7593 3484</strong>
          </li>
          <li>
            <strong>
              Address : 경기도 하남시 미사강변한강로 135 나동 1048호
            </strong>
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
