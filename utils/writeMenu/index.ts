export const jobGroup = ["프론트엔드", "백엔드", "디자인", "기획", "기타"];
export const recruitNumber = [
  "1명",
  "2명",
  "3명",
  "4명",
  "5명",
  "6명",
  "7명",
  "8명",
  "9명",
  "10명",
];

export function getYear() {
  const date = new Date();
  const currentYear = date.getFullYear();
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push(currentYear + i + "년");
  }
  return result;
}

export const getMonth = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];

export const getDay = [
  "1일",
  "2일",
  "3일",
  "4일",
  "5일",
  "6일",
  "7일",
  "8일",
  "9일",
  "10일",
  "11일",
  "12일",
  "13일",
  "14일",
  "15일",
  "16일",
  "17일",
  "18일",
  "19일",
  "20일",
  "21일",
  "22일",
  "23일",
  "24일",
  "25일",
  "26일",
  "27일",
  "28일",
  "29일",
  "30일",
  "31일",
];
