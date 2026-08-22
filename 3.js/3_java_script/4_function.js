'use strict';

// 아래 func1, func2 는 동일한 함수 선언이지만, 세부 문법에 차이가 있음
// 함수 선언식 (해당 함수 선언 전에, 함수 호출이 가능함)
function func1() {
  console.log('func1');
}
func1();
// 함수 표현식 (함수를 변수로 선언. 해당 함수 선언 전에, 함수 호출이 불가능)
const func2 = function () {
  console.log('func2');
};
func2();

// ArrowFunction(람다식) ( 이 방법이 가장 많이 쓰인다 한다. 그냥 이것만 쓰자.)
const func4 = (parm1, parm2) => {
  console.log('람다식 : ', parm1, parm2);
};
func4(1, 3);

// 매개변수와 반환값
const func3 = function (first, second) {
  return first + second;
};
console.log('firs + second = ', func3(3, 4));

// 즉시 실행함수
(function () {
  console.log(
    '즉시 실행 함수. 선언 옆에 바로 () 붙여서 선언과 동시에 즉시 실행됨',
  );
})();

// 임시 함수에서도 람다 가능
let arr = ['1', '2'];
arr.forEach((value, index) => {
  console.log('val(%d), index(%d)', value, index);
});
