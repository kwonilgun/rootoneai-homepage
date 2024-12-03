import React from "react";
import "../CSS/Contact.css";

import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t, i18n } = useTranslation();
  // 현재 언어를 확인하여 버튼 텍스트 변경
  const currentLanguage = i18n.language;
  return (
    <body>
      <header>
        <h1>{t("contactUs")}</h1>
        <p>{t("contactFeelFree")}</p>
      </header>

      <section class="contact-info">
        <h2>{t("contactInformation")}</h2>
        <ul>
          <li>
            <strong>{t("contactEmail")}</strong>{" "}
          </li>
          <li>
            <strong>{t("contactPhone")}</strong>
          </li>
          <li>
            <strong>{t("contactAddress")}</strong>
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
