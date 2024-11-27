import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import BannerBackground from "../Assests/home-banner-background.png";
import BannerImage from "../Assests/home-banner-image.png";
import rootonecircular from "../Assests/rootoneai-circular_image.png";

import { FiArrowRight } from "react-icons/fi";
import ReactPlayer from "react-player";
// import Navar from "./Navbar";

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
          <h1 className="primary-heading">
            스마트 의료 및 헬스케어의 혁신 리더
          </h1>
          <p className="primary-text">
            Rootone AI는 AI와 IoT 기술을 융합하여 더 나은 삶의 질을 제공하고,
            건강 관리의 효율성을 극대화하는 플랫폼을 구축하는 것을 목표로
            합니다.
          </p>
          <button
            className="secondary-button"
            onClick={() => {
              openModal();
              handleBtn();
              console.log("ozs 데모 클릭!!!!!");
            }}
          >
            OZS 데모 <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={rootonecircular} alt="" />
        </div>
        {/* 모달 */}
        {/* <>
          <section>
            <h2>React Player</h2>
            {isWindow && (
              <div>
                <ReactPlayer url="https://www.youtube.com/watch?v=pSUydWEqKwE" />
              </div>
            )}
          </section>
        </> */}
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
                  controls
                  //    width={"80%"}
                  //    height={"80%"}
                  playing={isPlaying}
                  url="https://www.youtube.com/shorts/KgLi1sA3WvI"
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
