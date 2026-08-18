'use strict';
/* 'use strict'
    : js 는 선언하지 않은 변수를 미리 변수로 사용할 수 있는 등
      유지관리가 매우 안좋다. use strict 를 사용할 시
      그런 문제들이 제한되기에, 
      웬만하면 'use strict' 를 js 파일의 맨 위에 선언하자
*/

// let (변수)
let var1 = 'var1';
console.log(var1);

var1 = 'var11'; // 수정 가능
console.log(var1);

// const(상수) ※ 변수를 바꾸지 않는다면, 성능상 const가 더 좋다
const cVar = 'cVar1';
console.log(cVar);

// cVar = 'cVar2';
// const는 수정 불가능. 오류남

{
  let a = '블록 안 변수';
}
{
  let a = '블록 안 변수2'; // 블록 안에 a 들이 선언됐기에, 오류 안남
  console.log(a);
}

// ※ var 키워드는 사용 안한다고 이해하자. 성능도 안좋고, 유지보수에도 안좋다
