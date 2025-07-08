const greet = 'Hello' //상수 선언
let name = '철수'  //변수 선언

console.log(greet, name)

name = '영희'  //변수 값이 바뀌어도 바로 반영
console.log(greet, name)

/* x = 1 상수, 변수 선언을 안해도 할당 가능(콘솔 에서만)
console.log(x) */

let x = 1
let y = x
console.log(x, y)

x = 'Hello'
console.log(x, y) //x = y 여도 자료형 다르면 재할당 불가 

/* 이미 선언한 변수명 또 선언은 불가능
ex)
let x = 1
console.log(x)

let x = 2
console.log(x
*/

const pi = 3.14 //상수 선언. 선언하기만 하는 것 불가
console.log(pi)

//변하지 않는 값은 상수로 선언

let a = 1, b = 2, c = 3
const X = 1, Y = 2, Z = 3
console.log(a, b, c)
console.log(X, Y, Z)

/*변수 이름 규칙
1. 영문, 한글을 비롯한 유니코드글자, 숫자 사용가능
2. 특수문자 $, _만 가능
3. 숫자로 시박 안됨
4. 공백 사용 불가
*/