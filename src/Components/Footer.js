/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState, useCallback } from "react";
// import { Link } from "react-router-dom";
// import Logo from "../Assets/Logo.svg";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
// import RootOne from "../Assests/rootoneai-circle_1.png";
import { useTranslation } from "react-i18next";
import "../CSS/Terms.css";
import axios from "axios";
// import { baseURL } from "../Assests/url/BaseUrl";

// import { OZS_USAGE_TERM_ID } from "../Assests/url/BaseValue";
// import { OZS_USAGE_TERM_EN_ID } from "../Assests/url/BaseValue";
import { OZS_USAGE_TERM } from "../Assests/terms/ozs_usage_term";
import { OZS_USAGE_TERM_EN } from "../Assests/terms/ozs_usage_term_en";
import { OZS_PRIVACY_POLICY } from "../Assests/terms/ozs_privacy_agreement";
import { OZS_PRIVACY_POLICY_EN } from "../Assests/terms/ozs_privacy_agreement_en";

// 모달 스타일 정의 (CSS-in-JS)
const modalStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.8)",
  zIndex: 1000,
};

const displayWindow = {
  width: "80%",
  height: "auto",
  //   maxWidth: "80%",
  //   maxHeight: "80%",
  //   borderRadius: "8px",
};

const Footer = () => {
  const { t, i18n } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWindow, setIsWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUsage, setIsUsage] = useState(false);
  const [isPolicy, setIsPolicy] = useState(false);
  // const [ready, setReady] = useState(false);
  const currentLanguage = i18n.language;

  // const fetchUsageTerms = useCallback(async () => {
  //   console.log("currentLanguage = ", currentLanguage);

  //   try {
  //     const fileName = currentLanguage === "ko" ? "terms-ko.html" : "terms-en.html";
  //     const response = await axios.get(`/terms/${fileName}`); // 'terms' 디렉토리에서 파일 가져오기
  //     setContents(response.data);
  //   } catch (error) {
  //     console.error("Error fetching usage terms:", error);
  //     setContents("<p>Error loading terms. Please try again later.</p>");
  //   }

  // }, [currentLanguage]);

  useEffect(() => {
    setIsWindow(true);
    // fetchUsageTerms();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsUsage(false);
    setIsPolicy(false);
  };
  const handleUsage = () => {
    setIsPlaying(!isPlaying);
    setIsUsage(true);
  };

  const handlePolicy = () => {
    setIsPlaying(!isPlaying);
    setIsPolicy(true);
  };

  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        {/* <div className="footer-logo-container">
          <img src={RootOne} alt="" />
        </div> */}
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        {/* <div className="footer-section-columns">
          <span>Quality</span>
          <span>Help</span>
          <span>Share</span>
          <span>Carrers</span>
          <span>Testimonials</span>
          <span>Work</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          // <span>hello@food.com</span>
          <span>press@food.com</span>
          <span>contact@food.com</span>
        </div> */}
        <div></div>
        <div className="footer-section-columns">
          <span
            style={{
              textDecoration: "underline",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => {
              openModal();
              handleUsage();
              console.log("이용 약관 클릭!!!!!");
            }}
          >
            {t("footerTermsConditions")}
          </span>
          <span
            style={{
              textDecoration: "underline",
              color: "black",
              cursor: "pointer",
            }}
            onClick={() => {
              openModal();
              handlePolicy();
              console.log("개인정보 정책 클릭!!!!!");
            }}
          >
            {t("footerPrivacyPolicy")}
          </span>
        </div>

        <div>
          {/* 모달 */}
          {isModalOpen && (
            <div
              style={modalStyle}
              onClick={() => {
                closeModal();
              }}
              // onClick={() => {
              //   handleBtn();
              //   closeModal();
              // }}
            >
              {isUsage && (
                <div
                  className="terms-scroll-view"
                  onClick={(e) => e.stopPropagation()} // 모달 닫기 방지
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "800px",
                    maxHeight: "80%",
                    overflowY: "scroll",
                  }}
                >
                  {currentLanguage === "ko" ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: OZS_USAGE_TERM.html }}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OZS_USAGE_TERM_EN.html,
                      }}
                    />
                  )}

                  <button
                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={closeModal}
                  >
                    닫기
                  </button>
                </div>
              )}
              {isPolicy && (
                <div
                  className="terms-scroll-view"
                  onClick={(e) => e.stopPropagation()} // 모달 닫기 방지
                  style={{
                    backgroundColor: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    maxWidth: "800px",
                    maxHeight: "80%",
                    overflowY: "scroll",
                  }}
                >
                  {currentLanguage === "ko" ? (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OZS_PRIVACY_POLICY.html,
                      }}
                    />
                  ) : (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: OZS_PRIVACY_POLICY_EN.html,
                      }}
                    />
                  )}

                  <button
                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      backgroundColor: "#007bff",
                      color: "white",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={closeModal}
                  >
                    닫기
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Footer;
