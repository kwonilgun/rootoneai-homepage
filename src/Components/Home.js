import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assests/images/home-banner-background.png";
import BannerImage from "../Assests/images/home-banner-image.png";
import rootonecircular from "../Assests/images/rootoneai-circular_image.png";

import { FiArrowRight } from "react-icons/fi";
import ReactPlayer from "react-player";
// import Navar from "./Navbar";
import { useTranslation } from "react-i18next";

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

const videoStyle = {
  width: "80%",
  height: "auto",
  //   maxWidth: "80%",
  //   maxHeight: "80%",
  //   borderRadius: "8px",
};

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWindow, setIsWindow] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const { t, i18n } = useTranslation();

  // 현재 언어를 확인하여 버튼 텍스트 변경
  const currentLanguage = i18n.language;

  useEffect(() => {
    setIsWindow(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleBtn = () => {
    setIsPlaying(!isPlaying);
  };
  return (
    <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          {currentLanguage === "ko" ? (
            <h1 className="primary-heading">{t("homeTitle")}</h1>
          ) : (
            <h1 className="primary-heading-small-font">{t("homeTitle")}</h1>
          )}

          <p className="primary-text">{t("homeDescription")}</p>
          <button
            className="secondary-button"
            onClick={() => {
              openModal();
              handleBtn();
              console.log("ozs 데모 클릭!!!!!");
            }}
          >
            {t("homeOzsDemo")} <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={rootonecircular} alt="" />
        </div>

        {/* 모달 */}
        {isModalOpen && (
          <div
            style={modalStyle}
            onClick={() => {
              handleBtn();
              closeModal();
            }}
          >
            {/* <video
              style={videoStyle}
              controls
              onClick={(e) => e.stopPropagation()} // 클릭 이벤트가 부모로 전파되지 않도록 설정
            >
              <source
                src="../../public/Assests/ozs_demo_1.m4v"
                type="video/mp4"
              />
              
            </video> */}
            {isWindow && (
              <div>
                <ReactPlayer
                  controls={true}
                  width={"50%"}
                  height={"50%"}
                  playing={isPlaying}
                  //    url="https://www.youtube.com/watch?v=KgLi1sA3WvI"
                  url={require("../Assests/videos/ozs_demo_1.m4v")}
                  config={{
                    youtube: {
                      playerVars: {
                        modestbranding: 1, // YouTube 로고 최소화
                        rel: 0, // 관련 동영상 표시 금지
                        //     origin: "http://localhost:3000", // 현재 도메
                      },
                    },
                  }}
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
