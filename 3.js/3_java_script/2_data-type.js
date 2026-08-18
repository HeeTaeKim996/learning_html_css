'use strict';

// js 는 동적 타이핑이기에, 변수의 크기가 고정돼있지 않다.
// (아마 모든 걸 string처럼 취급하는 게 아닐까)
let var1 = 2;
let var2 = 2.4;
let var3 = '동적 타이핑이기에 뭐든 됩니다';

let var4 = 4 / 0;
console.log(var4);
// js 는 특이하게 Infinity, -Infinity 라는 숫자가 있다. 따라서 위처럼 0으로 나눠도 오류가 안남

let var5 = 'stringDivInt' / 5;
console.log(var5);
console.log(typeof var5);
// 저것도 오류가 안난다. NaN 이라는 숫자를 리턴한다

// 문자 출력
const name1 = '김해리';
const age1 = 15;
console.log(name1 + ' 의 나이 : ' + age1); // (쓰지말자)
console.log(`${name1} 의 나이 : ${age1}`); // (쓰지말자) ' 가 아니라 `(백틱) 이다. ㅅㅂ..
console.log('%s 의 나이 : %d', name1, age1); // 그냥 이거 쓰자..

// null, undefined
let nullVar = null;
let undefinedVar;

console.log(nullVar); // 비어있는 상태를 의미할 때는 null 을 할당하자.
console.log(undefinedVar); // 할당을 안한 상태는 undefined로 정의된다. null과 다르다. 구분.

// 객체
let ob1 = {
  var1: 'v1',
  var2: 'v2',
  sayHello() {
    console.log('ob1 : %s, %s : hi', this.var1, this.var2);
  },
};
ob1.sayHello();
