//블록문
{
    console.log('블록문');
}

//스코프
{
    const x = 'Hello';
    let y = 'world!';
    console.log(x, y);
}

//console.log(x);
//console.log(y); //블록문에서 정의된 변수는 블록문 밖에서는 사용불가

//블록 밖 변수는 블록 안에서 사용 가능
let x = 1;

{
    let y = 2;
    console.log(x, y);
}
console.log(x);
//console.log(y);

const xx = 0;
let yy = 'Hello!';
console.log(xx, yy);

{
    const xx = 1; // 💡 블록 안에서는 바깥의 const 재선언 가능
    let yy = '안녕하세요~';

    console.log(xx, yy);
    // ⚠️ const, let을 빼먹으면 재선언이 아니라 바깥것의 값을(변수면) 바꿈!
}

console.log(xx, yy);

//스코프 체인
let a = 0;
let b = 1;
let c = 2;
console.log('시점 1:', a, b, c);

{ //스코프 1
    let a = 'A';
    let b = 'B'
    console.log('시점 2:', a, b, c);

    {  //스코프 2
        let a = '가'
        console.log('시점 3:', a, b, c);
    }

    console.log('시점 4:', a, b, c);
}

console.log('시점 5:', a, b, c);