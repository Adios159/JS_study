const a = true, b = 1, c = 'Hello'

console.log(a, typeof a) //불리언, 맞다 아니다 표현 true, false
console.log(b, typeof b) //number, 숫자 자료형
console.log(c, typeof c) //문자열 string

let d 
console.log(typeof d) //undefinded 값이 아직 무엇인지 모름

d = null
console.log(typeof d) //null 의도적인 빈 값

constve = Symbol('hello')
console.log(typeof e)

console.log(
    typeof(typeof 3.14),
    typeof(typeof 'hello'),
) //모두 string