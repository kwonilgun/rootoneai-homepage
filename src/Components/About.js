import React from "react";
import "../CSS/About.css";

const About = () => {
  return (
    <body>
      <header>
        <h1>About Rootone AI</h1>
        <p>
          Rootone AI는 스마트 IoT 기술과 인공지능(AI)을 활용하여 혁신적인
          헬스케어 솔루션을 제공합니다. 원격 제어와 데이터 분석 기술을 통해 삶의
          질을 향상시키는 것을 목표로 합니다.
        </p>
      </header>

      <div class="container">
        <section id="vision">
          <h2>Our Vision</h2>
          <p>
            AI 기반 헬스케어의 선구자로서, 원격 관리와 진단 서비스를 통해 글로벌
            의료 시스템의 혁신을 주도합니다. 개인 맞춤형 의료와 예방 중심의
            헬스케어를 실현하는 플랫폼 구축.
          </p>
        </section>

        <section id="what-we-do">
          <h2>What We Do</h2>
          <ul>
            <li>
              <strong>스마트 디바이스 원격 제어 플랫폼 개발:</strong> IoT 기술을
              활용한 오존 살균기 제어 앱과 플랫폼 제공.
            </li>
            <li>
              <strong>심장 진단 패치 및 자동 진단 서비스 연구:</strong> 웨어러블
              패치와 AI를 결합해 실시간 심장 상태를 분석하고 예측.
            </li>
            <li>
              <strong>클라우드 기반 서비스 구축:</strong> 아마존 AWS를 기반으로
              안정적이고 확장 가능한 서버 운영.
            </li>
          </ul>
        </section>

        <section id="values">
          <h2>Our Values</h2>
          <ul>
            <li>
              <strong>Innovation:</strong> 끊임없는 연구와 개발을 통해 새로운
              솔루션 제공.
            </li>
            <li>
              <strong>User-Centric Design:</strong> 누구나 쉽게 사용할 수 있는
              직관적인 플랫폼 설계.
            </li>
            <li>
              <strong>Trust:</strong> 의료 데이터 보안과 서비스의 신뢰성 유지.
            </li>
            <li>
              <strong>Global Scalability:</strong> 전 세계 사용자와 의료 시장을
              겨냥한 기술 설계.
            </li>
          </ul>
        </section>

        <section id="milestones">
          <h2>Milestones</h2>
          <ul>
            <li>
              <strong>2020:</strong> Rootone AI 설립
            </li>
            <li>
              <strong>2024:</strong> 오존 살균기 원격 제어 플랫폼 출시.
            </li>
            <li>
              <strong>2025:</strong> 심장 진단 패치 개발 시작.
            </li>
            <li>
              <strong>2026:</strong> AI 진단 알고리즘 베타 테스트 완료.
            </li>
            <li>
              <strong>2027:</strong> 글로벌 서비스 확장을 위한 파트너십 체결.
            </li>
          </ul>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <div class="contact">
            <p>
              <strong>Location:</strong> [경기도 하남시 미사강변한강로 135 나동
              1048호]
            </p>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:support@rootoneai.com">support@rootoneai.com</a>
            </p>
            <p>
              <strong>Phone:</strong> +82-XXX-XXXX-XXXX
            </p>
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
