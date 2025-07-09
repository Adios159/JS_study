let a = 1 === 2;
let b = 'abc' !== 'def'
let c = a !== b;
let d = typeof a === typeof b === true; //boolean === boolean === boolean

console.log(a, typeof a);
console.log(b, typeof b);
console.log(c, typeof c);
console.log(d, typeof d);

console.log(
    true, !true, false, !false //느낌표 횟수마다 바뀜
);

console.log(
    true, !true, !!true, !!!true
);

console.log(
    false, !false, !!false, !!!false
);

console.log(
    true && true,
    true && false,
    false && true,
    false && false,
); //둘 다 같아야 true

console.log(
    true || true,
    true || false,
    false || true,
    false || false,
);  //한 쪽 이라도 true이면 true빈횐

let x = 14; //true
// x = 6;  //false || true == true
// x = 25; //

console.log(
    (x > 10 && x <= 20) || x % 3 === 0
);

// 💡 드 모르간의 법칙
a = true;
// a = false;
b = true;
// b = false;

console.log(
    !(a && b) === (!a || !b),
    !(a || b) === (!a && !b)
); // 💡 항상 true

let error = true;
// error = false;

// 앞의 것이 true일 때만 뒤의 코드 실행
error && console.warn('오류 발생!');

// 앞의 것이 false일 때만 뒤의 코드 실행
error || console.log('이상 없음.');

x = true;  //abc true
// x = false;  //false 123

// ⭐️ &&, || 연산자는 값 자체를 반환
let y = x && 'abc';
let z = x || 123;

console.log(y, z);

x = true;
// x = false;

y = x ? '참입니다.' : '거짓입니다.';
console.log(y);
//boolean ? 참일 경우 출력할 것 : 거짓일 경우 출력할 것

let num = 103247;

console.log(
    'num은 3의 배수' +
    (num % 3 === 0 ? '입니다.' : '가 아닙니다.')
);

error = true;
//error = false;

error 
    ? console.error('오류 발생!') 
    : console.log('이상 없음');


//truthy, falsy
console.log(
    1.23 ? true : false,
    -999 ? true: false,
    '0' ? true : false,
    ' ' ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false,
); //위의것 전부 다 true

// ⚠️ true와 `같다`는 의미는 아님
console.log(
    1.23 == true,
    ' ' == true,
    {} == true
);

console.log(
    0 ? true : false,
    -0 ? true : false,
    '' ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false,
); //전부 다 false

// 💡 어떤 값들은 false로 타입변환됨
console.log(
    0 == false,
    0 === false,
    '' == false,
    '' === false
);
console.log(
    null == false,
    undefined == false,
    NaN == false,
);

x = 0;
y = 1;

x && x++;
y && y++;

console.log(x, y);

x = '';
y = '회사원';
z = x || y;  //앞의 값이 false이기 때문에 뒤의 값 반환

console.log(z);

x = x || '단기알바';
y = y || '단기알바'; // 앞의 값이 true이기 때문에 앞의 값 반환

console.log(x, y);

// 한 번 부정
console.log(
    !1, !-999, !'hello',
    !0, !'', !null
);

// ⭐️ 두 번 부정하여 해당 boolean값으로
console.log(
    !!1, !!-999, !!'hello',
    !!0, !!'', !!null
);

x = 123;

console.log(
    'x는 홀수인가?',
    !!(x % 2)
);