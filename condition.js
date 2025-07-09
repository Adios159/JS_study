//if문
const open = true;

// 한줄 코드
if (open) console.log('영업중입니다.');

// 여러줄 코드 - 블록문 사용
if (open) {
    console.log('환영합니다.');
    console.log('즐거운 쇼핑하세요!');
}

// if - else문

const x = 20;

if (x % 2) {
    console.log('홀수입니다.');
} else {
    console.log('짝수입니다.');
}

x = 22;

if (x % 4) { //나머지가 있으면 블록문으로 넘어감
    if (x % 2) {
    console.log('홀수입니다.');
    } else {  
    console.log('짝수입니다.');  //나머지가 없으면 출력
    }
} else {
    console.log('4의 배수입니다.');  //나머지가 없으면 출력
}

x = 21;

if (x % 2) {
    console.log('홀수입니다.');
} else if (x % 4) {
    console.log('짝수입니다.');
} else {
    console.log('4의 배수입니다.');  //else if 까지 해당이 안되면 실행
}

function evalNum () {
    const x = 21;

    if (x % 2) {
        console.log('홀수입니다.');
        return;
    }

    if (x % 4) {
        console.log('짝수입니다.');
        return;
    }

    console.log('4의 배수입니다.');
}

evalNum();
console.log('블록문 바깥');

//switch문법

const fingersOut = 2;

switch (fingersOut) {
  // 순서 상관없음
    case 2:
        console.log('가위');
        break;
    case 0:
        console.log('바위');
        break;
    case 5:
        console.log('보');
        break;
    default:
        console.log('무효');
}

const direction = 'north'
let directionKor;

switch (direction) {
    case 'north':
        directionKor = '북';
        break;
    case 'south':
        directionKor = '남';
        break;
    case 'east':
        directionKor = '동';
        break;
    case 'west':
        directionKor = '서';
        break;
    default:
        directionKor = '무효';
}

console.log(directionKor);

// 💡 참고: 객체를 사용한 방법
direction = 'north'

/* const directionKor = {
    north: '북',
    south: '남',
    east: '동',
    west: '서'
}[direction] ?? '무효'

console.log(directionKor); */
/* ?? 연산자로 키에 없는 값 접근시 undefinded를 반환하고 무효 출력*/

const month = 1;
let season = '';

switch (month) {
    case 1: case 2: case 3:
        season = '1분기'; break;

    case 4: case 5: case 6:
        season = '2분기'; break;

    case 7: case 8: case 9:
        season = '3분기'; break;

    case 10: case 11: case 12:
        season = '4분기'; break;

    default: 
        season = '잘못된 월입니다.';
}

console.log(season);

const startMonth = 1;
let holidays = '분기 내 휴일:';

switch (startMonth) {
    case 1:
        holidays += ' 설날';
    case 2:
    case 3:
        holidays += ' 3•1절';
    break;

    case 4:
    case 5:
        holidays += ' 어린이날';
    case 6:
        holidays += ' 현충일';
    break;

    case 7:
    case 8:
        holidays += ' 광복절';
    case 9:
        holidays += ' 추석';
    break;

    case 10:
        holidays += ' 한글날';
    case 11:
    case 12:
        holidays += ' 크리스마스';
    break;

    default: 
        holidays = '잘못된 월입니다.';
}

console.log(holidays);