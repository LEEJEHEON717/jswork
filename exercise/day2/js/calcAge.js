// 현재 연도 가져오기
const currentYear = new Date().getFullYear();

// 사용자로부터 태어난 연도 입력 받기
const birthYear = prompt("태어난 연도를 입력하세요 (예: 1990):");

// 나이 계산
const age = currentYear - birthYear;

// 결과 출력
console.log(`당신은 올해 ${age}살입니다.`);
