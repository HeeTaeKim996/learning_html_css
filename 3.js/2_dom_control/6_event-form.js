let inputBox = document.querySelector('#input-box');

// 키가 눌러져있을 때 호출
let keypress = document.querySelector('#keypress');
inputBox.addEventListener('keypress', function (event) {
  console.log('keypress');
  keypress.textContent = 'keypress : ' + inputBox.value;
});

// 키가 내려갈 때 호출
let keydown = document.querySelector('#keydown');
inputBox.addEventListener('keydown', function (event) {
  console.log('keydown');
  keydown.textContent = 'keydown : ' + inputBox.value;
});

// 키가 올라갈 때 호출
let keyup = document.querySelector('#keyup');
inputBox.addEventListener('keyup', function () {
  console.log('keyup');
  keyup.textContent = 'keyup : ' + inputBox.value;
});

// eventKey, eventKeyCode
let eventKey = document.querySelector('#event_key');
let eventKeyCode = document.querySelector('#event_keyCode');
inputBox.addEventListener('keyup', function (event) {
  eventKey.textContent = 'event.key : ' + event.key;
  // 아스키로 반환
  eventKeyCode.textContent = 'event.keyCode : ' + event.keyCode;
  // keyCode : 아스키를 숫자로 반환
});

inputBox.addEventListener('focus', function () {
  console.log('focus');
});

inputBox.addEventListener('blur', function () {
  console.log('blur');
});

inputBox.addEventListener('change', function (event) {
  console.log('change');
  // blur 될 때, 값이 바뀌었다면 호출
});

let errImg = document.querySelector('#errImg');
errImg.addEventListener('error', function (event) {
  // 해당 엘리먼트에 에러가 발생했을 때 호출
  console.log('error occured. so fixed it');
  event.target.src = '/assets/images/stars.jpg';
});
