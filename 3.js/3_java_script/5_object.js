'use strict';

// 객체 생성 리터럴 문법
const ob1 = {
  prop1: 'p1',
  prop2: 'p2',
  arrProp: ['f', 's'],
  func1() {
    console.log('func1 called');
  },
  ob2: {
    // 객체 안에 객체 선언도 가능
    prop3: 'p3',
    func2() {
      console.log('func2 called p3(%s)', this.prop3);
    },
  },
};
ob1.prop3 = 'p3'; // 특이하게 이렇게 객체의 프로퍼티를 외부에서 추가로 정의할 수 있다.

// 정표기법 프로퍼티 접근
console.log(ob1);
console.log('prop1 : ', ob1.prop1);
console.log('arrProp[0] : ', ob1.arrProp[0]);
ob1.func1();
ob1.ob2.func2();

// 괄호 표기법 프로퍼티 접근 (왜쓰지?)
console.log("From ['~'] called : ", ob1['prop1']);
console.log("From ['~'] called2 : ", ob1['ob2']['prop3']);

// 프로퍼티 제거
delete ob1.prop1;
console.log("prop's are deleted : ", ob1);

// 구조분해 할당 (자주 쓰임)
const { prop2, arrProp } = ob1;
console.log('prop2(%s), arrProp[1](%s)', prop2, arrProp[1]);

// 함수 매개변수로 구조분해 할당 (자주 쓰임)
const func4 = ({ prop2, arrProp }) => {
  console.log('func4 : %s, %s', prop2, arrProp[0]);
};
func4(ob1);

// 객체 생성 팩토리 함수 (자주 쓰임)
const createOb = (np1, np2, np3) => {
  return { prop1: np1, prop2: np2, prop3: np3 };
};

const ob3 = createOb('p11', 'p22', 'p33');
const ob4 = createOb('p111', 'p222', 'p333');
console.log('ob3 : %s, ob4 : %s', ob3.prop1, ob4.prop2);

// ES5 클래스 생성자 함수 (안쓰임)
function Ob(p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;
}
const ob5 = new Ob('피원', '피투', '피쓰리');
console.log('ES5 : %s', ob5.p1);

// ES6 클래스 생성자 함수 (자주쓰임)
class Ob2 {
  constructor(p1, p2, p3) {
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
}

const ob6 = new Ob2('원', '투', '쓰리');
console.log('ES6 : %s', ob6.p2);

// 깊은 복사
let ob7 = new Ob2('1', '2', '3');
let ob8 = ob7; // 얕은 복사
let ob9 = Object.assign({}, ob7); // 깊은 복사
ob7.p1 = '4';
console.log('Shallow - Deep copy : %s, %s, %s', ob7.p1, ob8.p1, ob9.p1);

// 프로퍼티 존재 확인
if ('p1' in ob7) {
  console.log('p1 프로퍼티가 ob7에 존재합니다');
} else {
  console.log('p1 프로퍼티가 ob7에 존재하지 않습니다');
}

// 아래 방법으로 프로퍼티 존재 유무 판단하면 안됨. 값 자체가 false 인경우에도 false를 리턴
if (ob7.p4) {
  console.log('0b7 에 p4이 할당되었으며, 값이 trud입니다');
} else {
  console.log('0b7 에 p4이 할당되지 않았거나, 값이 false입니다');
}
