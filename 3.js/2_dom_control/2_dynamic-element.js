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

// 뒤에 추가
let aftBtn = document.querySelector('#afterAdd');
aftBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  list.appendChild(li);
  li.textContent = inputBox.value; // value 로 입력된 값을 가져온다
});

// 앞에 추가
let befBtn = document.querySelector('#beforeAdd');
befBtn.addEventListener('click', function () {
  let li = document.createElement('li');
  li.textContent = inputBox.value;

  list.insertBefore(li, list.firstChild);
});
