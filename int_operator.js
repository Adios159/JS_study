let integer = 100
let real = 12.3456
let negative = -5.67

let x = 1 / 0
let y = -1 / 0
let z = Infinity
console.log(x, typeof x)  //무한대 존재
console.log(-x, typeof -x) //음의 무한대도 존재
console.log(y, typeof y)
console.log(z, typeof z)  //직접 무한대 값 할당도 가능홤

const a = 1 / 'abc'
console.log(a, typeof a) //숫자가 아닌것 = NaN

console.log(
    a,
    a == NaN,
    a === NaN,
    isNaN(a), //숫자가 아니다 싶으면 무조건 true
    Number.isNaN(a) //숫자 자료형인 주제에 숫자가 아니면 true 
)

//연산자

x = 10
y = x * 10

console.log(y)
console.log(
    y + 1, //덧셈
    y - 1,  //뺄셈
    y * 2,  //곱셈
    y / 5,  //나눗셈
    y % 3,  //나머지 연산
    y ** 2  //거듭 제곱
);

console.log(y) //부수효과 없음

//단항 산술 연산자

x = 10
console.log(x++, x) //1.반환, 2.증가
console.log(++x, x) //1.증가, 2.반환

x = 3
y = 4

console.log(x-- * --y, x, y)

x = 1
console.log(
    +x,
    -x,
    -(-x),
    -(x++),
    -x * -1
);

x = '100'
console.log(x++, x)  //문자열인 숫자도 연산자가 붙으면 숫자로 자동 변환하여 처리

//할당 산술 연산자

x = 3;

x += 2;
console.log(x);

x -= 3;
console.log(x);

x *= 12;
console.log(x);

x /= 3;
console.log(x);

x %= 5;
console.log(x);

x **= 4;
console.log(x)

y = 25;

console.log(
    y **= 0.5, // 할당된 결과 반환
    y
);