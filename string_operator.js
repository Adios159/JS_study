let x = 1
let y = 2
let a = 'a'
let b = 'b'

console.log(x == y) //값이 같다
console.log(x === y) //값과 자료형이 같다
console.log(x != y) //값이 다르다
console.log(x !== y) //값 이나 자료형이 다르다
console.log(a < b) //사전순서 상 a가 먼저 온다
console.log(a <= b) //사전순서 상 a가 먼저 오거나 같다
console.log(a > b) //사전순서 상 b가 먼저 온다
console.log(a >= b) //사전순서 상 b가 먼저 오거나 같다

console.log('1' == 1) //==은 자료형 구분 안함
console.log('1' != 1) //!=은 자료형 구분 안함

console.log(
    100 > 12, //숫자는 그 자체로 비교
    '100' > 12,  //문자와 숫자 비교는 문자를 숫자로 변환
    '100' > '12' //문자는 사전순으로 비교
)

let str1 = 'abc'
let str2 = ' ' + 'def'
console.log(str1)
console.log(str2)
console.log(str1 + str2) //두 문자를 이어주기만 하는 역할, 그 결과를 반환하지는 않음

let str3 = 'Hello'
str3 += ' World'
console.log(str3) // 두 문자를 이어주고 그 결과를 반환도 함

const lyric1  = '노는게 제일 좋아'
+ '\n친구들 모여라'
+ '\n언제나 즐거워'
+ '\n오늘은 또 무슨일이 생길까?';
console.log(lyric1)
