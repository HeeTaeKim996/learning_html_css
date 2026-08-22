// 'use strict';
// 아래 예시 테스트를 위해 use strict 사용 안함

// this는 웬만하면 호출자이지만 예외가 있다.

let ob1 = {
  prop1: 10,
  prop2: '가',
  printThis: function () {
    console.log(this);
    console.log('this=== ob1 : ', this === ob1);
    console.log('this=== window : ', this === window);
  },
};
ob1.printThis(); // this === ob1 : true가 나온다. 여기서 this는 호출자(ob1 객체)이다

let printThis = ob1.printThis;
printThis(); // 하지만 여기서 호출하면 false 가 나온다. this 가 window 이다.

function printThis2() {
  console.log('printThis2 : ', this);
}
printThis2(); // this 는 window
let ob2 = {
  prop1: 100,
  printThis2: printThis2,
};
ob2.printThis2(); // this 는 ob2

let btn = document.querySelector('#btn');
btn.addEventListener('click', function (event) {
  console.log('btn this : ', this);
  console.log('this === btn : ', this === btn);
  // 버튼클릭시, this===btn : true. this의 호출자는 btn.
});

// ES5 bind - this 를 수동 할당 (이걸 굳이 왜 쓸까..)
function printThis3() {
  console.log('printThis3 : ', this);
}
let ob3 = {
  p1: 0,
};
let printThis4 = printThis3.bind(ob3);
printThis4(); // this 가 ob3로 나옴

let ob4 = {
  p11: 11,
};
let printThis5 = printThis4.bind(ob4);
printThis5(); // this 가 ob4 가 아닌 ob3 으로 나옴. bind는 한번만 할당될 수 있기 때문

// setTimeout (예약실행) 에서의 this
let ob5 = {
  checkThis() {
    setTimeout(function () {
      console.log('checkThis : ', this);
    }, 500);
    // setTimeout((1), (2)) : (1) 함수를 (2)ms 이후 실행
  },
};
ob5.checkThis(); // this가 ob5 가 아닌 윈도우로 나옴. 윈도우에서 setTimeout 관리해서인듯

// setTimeout 에서 bind를 통해 this를 수동 할당하기
let ob6 = {
  thisIsOb6: 0,
  checkThis2() {
    setTimeout(
      function () {
        console.log('checkThis2 : ', this);
      }.bind(ob6),
      500,
    );
  },
};
ob6.checkThis2(); // 수동으로 this 를 0b6 으로 바인딩했기에, this가 window 가 아닌 0b6 으로 나옴
