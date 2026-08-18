// 이렇게 주석 가능

/* 여러줄은
이렇게 주석 가능 */

console.log('Hello JavaScript');
// F12 로 들어가서 Console창으로 들어가면 로그를 볼 수 있다

alert('This is from alert');
// 경고창이 뜬다

// let : 변수 선언. ※ 타입을 지정 안해도 된다. 파이썬과 같은 동적타이핑 언어
let var1 = "this is var1's content";
console.log(var1);

let var2 = 30;
console.log('number : ', var2);

// function : 함수 선언
function sayHello() {
  console.log("hello, this is from function 'sayHello'");
}
sayHello();

// = { .. } : 객체 선언
let obj = {
  // 객체가 갖고 있는 변수를 property라 한다
  prop1: 30,

  // A: function(..){..} : 객체 내 함수 선언
  objFunc(num) {
    console.log("This is from obj's objFunc [%d]", this.prop1 + num); // 객체 내 변수 참조시, 반드시 this를 붙여야 한다
  },

  objFunc2(num) {
    alert("this is from obj's objFunc2 [${this.prop1} + ${num}]");
  },
};

obj.objFunc(40);
console.log('this is from out : [%d]', obj.prop1); // 외부에서 객체의 A의 변수 b 참조시, A.b 로 참조
