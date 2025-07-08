let word = 'Hello'
let word2 = 'Hi'

console.log(word, word2)

word = '작은 따옴표 안에 "큰 따옴표" 사용'
word2 = "큰 따옴표 안에 '작은 따옴표' 사용" //둘 다 가능
console.log(word, word2)

word = "큰 따옴표 안에 \"큰 따옴표\" 사용"
word = '작은 따옴표 안에 \'작은 따옴표\' 사용' //이스케이프 문자 (\n = 줄바꿈, \\ = 백슬래시, \t = 탭)
console.log(word, word2)

const long_text = '동해물과 백두산이 마르고 닳도록 \
하느님이 보우하사 우리나라 만세 \
무궁화 삼천리 화려강산 \
대한사람 대한으로 길이 보전하세';
console.log(long_text)

let word3 = `안녕하세요     반갑습니다
저는 \\홍길동\\입니다!`
console.log(word3) //백틱으로 이스케이프 문자없이 탭, 줄바꿈, 백슬래시 표현 가능

const name = '영수'
const age = 30
const married = false

console.log(`
제 이름은 ${name} 이고 나이는 ${age}입니다
저는 지금 ${married? '기혼' : '미혼'} 입니다. 
`)
