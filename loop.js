// 💡 변수이므로 let이 사용됨
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5;) {
    console.log(i++); // ++i로 바꿔볼 것
}

for (let i = 10; i >= 0; i-= 2) {
    console.log(i); // 10부터 시작, 2씩 감소
}

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(`${i} * ${j} = ${i * j}`); //구구단 출력
    }
}

for (let x = 0, y = 10; x <= y; x++, y--) {
    console.log(x, y);  //x는 증가 y는 감소
}

for (
    let x = true, y = 0, z = 0; //x는 true, y, z는 각각 0
    y * z < 10; //y, z의 곱이 10 미만일때 까지 반복
    x = !x, x ? y++ : z++ //매 반복마다 x의 참거짓을 바꾸고 참이면 y출력 및 1추가, 거짓이면 z출력 및 1추가
) {
    console.log(y, z);
}

// 무한 루프
/*let x = 0;

for (;;) {
    console.log(x);
}

console.log('출력 안됨'); */

const lunch = {
    name: '라면',
    taste: '매운맛',
    kilocalories: 500,
    cold: false
}

for (const key in lunch) { // 💡 변할 것이 아니므로 const 사용
    console.log(key, ':', lunch[key])
}

const list = [1, '가나다', false, null];

for (const item of list) {
    console.log(item);
}
for (const el of list) {
    console.log(el);
}

//for ... of문의 장점
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// ⚠️ 변수(i)를 사용하므로 위험요소 존재
for (let i = 0; i < numbers.length; i++) {
  // 이곳에 i를 변경하는 코드가 들어간다면...
    console.log(numbers[i]);
}
// ⭐️ 변수를 사용하지 않음으로 보다 안전
for (const num of numbers) {
    console.log(num);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
    num++; // ⚠️ 복사된 값. let 사용 주목
    numbers2.push(num + 1);
}
console.log(numbers1, numbers2);

for (let i = 0; i < numbers1.length; i++) {
    numbers1[i]++; // ⚠️ 실제 값에 인덱스로 접근 - 원본 배열의 내용 변경
}
console.log(numbers1, numbers2);

//continue와 break

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue; //반복문을 한 번 건너뜀
    console.log(i);
}

console.log('for 루프 종료');

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;  //블록을 종료하고 탈출
    console.log(i);
}

console.log('for 루프 종료');

outer:
for (let i = 1; i < 10; i++) {

    inner:
    for (let j = 1; j < 10; j++) {

        if (j % 2 === 0) continue inner;  //j와 2를 나눈 나머지가 0이면 inner반복문 1회 건너뛰기
        if (i * j >= 30) continue outer;  //i와 j의 곱이 30이상이면 outer반복문 1회 건너뛰기
    
        if (j > 8) break inner;  //j가 8보다 크면 inner 반복문 종료
        if (i - j > 7) break outer;  //i와 j의 차가 7보다 크면 outer반복문 종료

        console.log(i, j, i * j);
    }
}

//while, do while

let x = 0;

while (x < 10) {
    console.log(x++);
}

x = 0;

while (true) {
    if (x++ >= 5) break; // 😎
    console.log(x);
}
// 1 ~ 5 출력

// 1, 3, 5, 7을 의도한 코드. 그러나...
// ⚠️ 무한루프! 왜일까요?
x = 0;
/* while (x < 14) {
    if (x % 2 === 0) continue;
    if (x > 7) break;
    console.log(x++);
}*/

// 짧게 짠 수정 코드
x = 0;
while (x < 14) {
    if (x++ % 2 === 0) continue;
    if (x > 8) break;
    console.log(x - 1);
}

//더 짧고도 직관성을 유지한 코드
x = 0;
while (x < 14) {
    const xNow = x++;

    if (xNow % 2 === 0) continue;
    if (xNow > 7) break;

    console.log(xNow);
}

x = 12;

do {
    console.log(x++);
} while (x < 10);  //do 안의 코드 먼저 하고 while조건을 따져보고 반복문 실행