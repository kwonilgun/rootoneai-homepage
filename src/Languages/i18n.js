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
        navbarRootOneAi: "Rootone AI",

        footerTermsConditions: "Terms & Conditions",
        footerPrivacyPolicy: "Privacy Policy",
        contactUs: "Contact Us",
        contactFeelFree:
          "Feel free to reach out to us through the form below or the provided contact details.",
        contactInformation: "Contact Information",
        contactEmail: "Email: kwonilgun8404@gmail.com",
        contactPhone: "Phone: 070 7593 3483",
        contactAddress:
          "Address: 135 Misagangbyeonhangang-ro, Hanam-si, Gyeonggi-do, Republic of Korea",
        AboutRootOneAI: "About Rootone AI",
        AboutSubTitle:
          "Rootone AI provides innovative healthcare solutions by leveraging smart IoT technology and artificial intelligence (AI). Its goal is to enhance quality of life through remote control and data analytics capabilities.",
        AboutVision:
          "As a pioneer in AI-based healthcare, we lead innovation in global healthcare systems through remote management and diagnostic services. We aim to build a platform that realizes personalized medicine and prevention-focused healthcare.",
        AboutWhatTodoPlatformTitle:
          "Development of a Smart Device Remote Control Platform:",
        AboutWhatTodoPlatformSubTitle:
          "Providing an ozone sterilizer control app and platform utilizing IoT technology.",
        AboutWhatTodoPatchTitle:
          "Research on Heart Diagnosis Patches and Automated Diagnostic Services:",
        AboutWhatTodoPatchSubTitle:
          "Combining wearable patches with AI to analyze and predict heart conditions in real time.",
        AboutWhatTodoCloudTitle: "Building Cloud-Based Services:",
        AboutWhatTodoCloudSubTitle:
          "Operating stable and scalable servers based on Amazon AWS.",
        AboutWhatTodoValueInnovation:
          "Providing new solutions through continuous research and development.",
        AboutWhatTodoValueUCC:
          "Designing an intuitive platform that anyone can use easily.",
        AboutWhatTodoValueTrust:
          "Ensuring the security of medical data and the reliability of services.",
        AboutWhatTodoValueGlobal:
          "Designing technology aimed at global users and the healthcare market.",
        AboutWhatTodo2020: "Establishment of Rootone AI",
        AboutWhatTodo2024:
          "Launch of a Remote Control Platform for Ozone Sterilizers.",
        AboutWhatTodo2025:
          "Initiation of Development for Heart Diagnostic Patch.",
        AboutWhatTodo2026: "Beta testing of AI diagnostic algorithm completed.",
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
        navbarRootOneAi: "루트원 AI",

        footerTermsConditions: "이용약관",
        footerPrivacyPolicy: "개인정보 정책",
        contactUs: "문의하기",
        contactFeelFree:
          "아래 양식이나 제공된 연락처를 통해 언제든지 저희에게 문의해주세요.",
        contactInformation: "연락처 정보",
        contactEmail: "이메일: kwonilgun8404@gmail.com",
        contactPhone: "전화번호: 070 7593 3483",
        contactAddress:
          "주소:     경기도 하남시 미사강변한강로 135 나동 1048호 ",
        AboutRootOneAI: "루트원 AI",
        AboutSubTitle:
          "Rootone AI는 스마트 IoT 기술과 인공지능(AI)을 활용하여 혁신적인 헬스케어 솔루션을 제공합니다. 원격 제어와 데이터 분석 기술을 통해 삶의 질을 향상시키는 것을 목표로 합니다.",
        AboutVision:
          "AI 기반 헬스케어의 선구자로서, 원격 관리와 진단 서비스를 통해 글로벌 의료 시스템의 혁신을 주도합니다. 개인 맞춤형 의료와 예방 중심의 헬스케어를 실현하는 플랫폼 구축.",
        AboutWhatTodoPlatformTitle: "스마트 디바이스 원격 제어 플랫폼 개발:",
        AboutWhatTodoPlatformSubTitle:
          "IoT 기술을 활용한 오존 살균기 제어 앱과 플랫폼 제공.",
        AboutWhatTodoPatchTitle: "심장 진단 패치 및 자동 진단 서비스 연구:",
        AboutWhatTodoPatchSubTitle:
          "웨어러블 패치와 AI를 결합해 실시간 심장 상태를 분석하고 예측.",
        AboutWhatTodoCloudTitle: "클라우드 기반 서비스 구축:",
        AboutWhatTodoCloudSubTitle:
          "아마존 AWS를 기반으로 안정적이고 확장 가능한 서버 운영..",
        AboutWhatTodoValueInnovation:
          "끊임없는 연구와 개발을 통해 새로운 솔루션 제공.",
        AboutWhatTodoValueUCC:
          "누구나 쉽게 사용할 수 있는 직관적인 플랫폼 설계.",
        AboutWhatTodoValueTrust: "의료 데이터 보안과 서비스의 신뢰성 유지.",
        AboutWhatTodoValueGlobal:
          "전 세계 사용자와 의료 시장을 겨냥한 기술 설계.",
        AboutWhatTodo2020: "Rootone AI 설립",
        AboutWhatTodo2024: "오존 살균기 원격 제어 플랫폼 출시.",
        AboutWhatTodo2025: "심장 진단 패치 개발 시작.",
        AboutWhatTodo2026: "AI 진단 알고리즘 베타 테스트 완료.",
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
