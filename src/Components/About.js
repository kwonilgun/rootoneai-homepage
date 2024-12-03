import React from "react";
import "../CSS/About.css";

import { useTranslation } from "react-i18next";

const About = () => {
  const { t, i18n } = useTranslation();

  return (
    <body>
      <header>
        <h1>{t("AboutRootOneAI")}</h1>
        <p
          style={{
            maxWidth: "80%",
            margin: "1rem auto", // 가로 방향 중앙 정렬
            //   borderWidth: "2px",
            //   borderColor: "blue",
            //   borderStyle: "solid",
            display: "flex", // Flexbox 활성화
            alignItems: "center", // 세로 중앙 정렬
            justifyContent: "center", // 가로 중앙 정렬
            height: "100px", // 필요에 따라 높이 지정
          }}
        >
          {t("AboutSubTitle")}
        </p>
      </header>

      <div class="container">
        <section id="vision">
          <h2>Our Vision</h2>
          <p>{t("AboutVision")}</p>
        </section>

        <section id="what-we-do">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>{t("AboutWhatTodoPlatformTitle")}</strong>{" "}
              {t("AboutWhatTodoPlatformSubTitle")}
            </li>
            <li>
              <strong>{t("AboutWhatTodoPatchTitle")}</strong>{" "}
              {t("AboutWhatTodoPatchSubTitle")}
            </li>
            <li>
              <strong>{t("AboutWhatTodoCloudTitle")}</strong>{" "}
              {t("AboutWhatTodoCloudSubTitle")}
            </li>
          </ul>
        </section>

        <section id="values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> {t("AboutWhatTodoValueInnovation")}
            </li>
            <li>
              <strong>User-Centric Design:</strong> {t("AboutWhatTodoValueUCC")}
            </li>
            <li>
              <strong>Trust:</strong> {t("AboutWhatTodoValueTrust")}
            </li>
            <li>
              <strong>Global Scalability:</strong>{" "}
              {t("AboutWhatTodoValueGlobal")}
            </li>
          </ul>
        </section>

        <section id="milestones">
          <h2>Milestones</h2>
          <ul>
            <li>
              <strong>2020:</strong> {t("AboutWhatTodo2020")}
            </li>
            <li>
              <strong>2024:</strong> {t("AboutWhatTodo2024")}
            </li>
            <li>
              <strong>2025:</strong> {t("AboutWhatTodo2025")}
            </li>
            <li>
              <strong>2026:</strong> {t("AboutWhatTodo2026")}
            </li>
            {/* <li>
              <strong>2027:</strong> 글로벌 서비스 확장을 위한 파트너십 체결.
            </li> */}
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <div class="contact">
            <p>{t("contactAddress")}</p>
            <p>{t("contactEmail")}</p>
            <p>{t("contactPhone")}</p>
            {/* <p>
              <strong>Follow us:</strong> <a href="#">Facebook</a> |{" "}
              <a href="#">LinkedIn</a> | <a href="#">Twitter</a> |{" "}
              <a href="#">Instagram</a>
            </p> */}
          </div>
        </section>
      </div>
    </body>
  );
};

export default About;
