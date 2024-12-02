import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        homeTitle: "Innovation Leader in Smart Healthcare and Medical Services",
        homeDescription:
          "Rootone AI aims to integrate AI and IoT technologies to enhance quality of life and build a platform that maximizes the efficiency of health management.",
        homeOzsDemo: "OZS demo",

        navbarHome: "Home",
        navbarContact: "Contact",
        navbarAbout: "About",
        navbarSupport: "Support",

        footerTermsConditions: "Terms & Conditions",
        footerPrivacyPolicy: "Privacy Policy",
      },
    },
    ko: {
      translation: {
        homeTitle: "스마트 의료 및 헬스케어의 혁신 리더",
        homeDescription:
          "Rootone AI는 AI와 IoT 기술을 융합하여 더 나은 삶의 질을 제공하고,건강 관리의 효율성을 극대화하는 플랫폼을 구축하는 것을 목표로 합니다.",
        homeOzsDemo: "OZS 데모",
        navbarHome: "홈",
        navbarContact: "연락처",
        navbarAbout: "회사소개",
        navbarSupport: "지원",

        footerTermsConditions: "이용약관",
        footerPrivacyPolicy: "개인정보 정책",
      },
    },
  },
  lng: "ko", // 초기 언어 설정 (en 또는 ko)
  fallbackLng: "ko", // 지원하지 않는 언어일 경우 기본 언어
  interpolation: {
    escapeValue: false, // React는 자동으로 XSS를 방지합니다.
  },
});

export default i18n;
