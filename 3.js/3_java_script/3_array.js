'use strict';

// 배열 생성
let arr1 = [1, 2.5, 2.2, 3.3, '해리'];
console.log('arr1 : ', arr1);
console.log('arr1[0] : ', arr1[0]);
console.log('arr1[2] : ', arr1[2]);

// 배열의 API
// length
console.log('length : ', arr1.length); // length

// push
arr1.push('보리');
console.log(arr1);

// pop
arr1.pop();
console.log(arr1);
arr1.pop();
console.log(arr1);

// forEach : ※ 인자로 callback 함수를 넣는다
arr1.forEach(function (item, index) {
  console.log('item[%s], index[%d]', item, index);
});

// shift : 앞에서부터 pop
arr1.shift();
console.log(arr1);
arr1.shift();
console.log(arr1);

// unshift : 앞에서부터 push
arr1.unshift('해리');
console.log(arr1);
arr1.unshift('보리');
console.log(arr1);

// indexof
console.log(arr1.indexOf('해리'));
console.log(arr1.indexOf('없는 값')); // 없을시, -1 반환

// splice
console.log('제거전 : ', arr1);
arr1.splice(arr1.indexOf('해리'), 2); // (1) 인덱스부터, (2)length로 제거
console.log('slice(1,1) 후 : ', arr1);

// 3. 구조분해할당
let arr2 = [1, 2, 3, 4, 5];
let [v1, v2, v3, ...others] = arr2;
// others : 남은 값들을 배열로 할당
console.log('v1 : ', v1);
console.log('v3 : ', v3);
console.log('others : ', others);

// 4. 전개구문
let arr3 = [...arr2, 6, 7]; // ...arr2 : arr2 를 arr3 에 똑같게 깊은 복사
console.log('arr3 : ', arr3);

// 5. Rest Parameter
function printRestParameter(...values) {
  // ... 으로 가변크기의 매개변수를 넘길 수 있음
  values.forEach(function (value, index) {
    console.log('printRestParameter : ', value);
  });
}
printRestParameter('1', '2', '3');

// 6. 얕은 복사
let src = ['1', '2', '3'];
let tar = src;
tar[0] = '4';
console.log('src : ', src);
console.log('tar : ', tar);

// 7. 깊은 복사 방법 3개
let src1 = ['1', '2'];
let tar1 = [...src1];

let src2 = ['3', '4'];
let tar2 = Array.from(src2);

let src3 = ['5', '6'];
let tar3 = src3.slice;
