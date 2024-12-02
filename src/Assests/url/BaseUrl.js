// import {Platform} from 'react-native';

// 💇‍♀️ 2023-04-11  : AWS 서버 지정한다.
// let baseURL = 'http://3.34.91.22:3000/api/v1/';

// 2023-04-10 : aws에서 auto scaling / load balance 의 통합하는 url이다. 이 포트로 접근을  하면 자동적으로 분배를 하게 한다.
// let baseURL =
//   'http://awseb-AWSEB-YVIHW12KJ0UZ-735887386.ap-northeast-2.elb.amazonaws.com/api/v1/';

// 2023-05-03 : www.rootone-ai-shopping-mall.link 도메인을 구입을 했다. 이 도메인이 결국은 ip로 변환이 된다. route53을 이용해서 구현을 했다.
// 2024-05-08 : 실제 ip 주소 : 15.165.133.117
// nslookup :www.rootone-ai-shopping-mall.link
// const baseURL = "https://www.rootone-ai-shopping-mall.link/api/v1/";

// 💇‍♀️ 2023-04-14 : ios에서는 localhost, android에서는 let baseURL = 'http://10.0.2.2:3000/api/v1/'; 로 설정을 하고 로컬에 대응을 하고
export const baseURL = "http://localhost:3000";
// eslint-disable-next-line no-lone-blocks

// export { baseURL };
