// 요소를 생성 및 추가

let ele = document.createElement('li');
ele.textContent = '추가된 요소1';

let list = document.querySelector('#list');
list.appendChild(ele);

// addEventListener 로 이벤트를 구독 + 람다식
// ※ onclick -> click 처럼, 기존의 on을 제거한걸 (1) 에 넣음
let alertBtn = document.querySelector('#alertButton');
alertBtn.addEventListener('click', function () {
  alert('hello');
});

// 버튼을 누를시, 요소를 추가

let inputBox = document.querySelector('input');
let addBtn = document.querySelector('#addBtn');

addBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  li.textContent = inputBox.value; // value 로 입력된 값을 가져온다

  let rmBtn = document.createElement('button');
  rmBtn.textContent = 'X';
  rmBtn.addEventListener('click', removeParentNode);
  // 위처럼 아래에 선언된 함수를 변수로 할당 가능

  li.appendChild(rmBtn);

  list.appendChild(li);

  inputBox.value = '';
});

// 함수 선언 (객체 내 함수 선언이랑 또 문법이 다르네..)
function removeParentNode(event) {
  // 클릭정보인 event 를 변수로 받을 수 있음

  event.target.parentNode.remove();
  // parentNode : parentNode로 부모 li Node에 접근
  // remove : 해당 노드를 제거
}
