// ■ 가져오기

// ※ 가져오려면, html 에서 <script src ... defer> 로 defer 가 있어야 함
//    (아직 defer가 뭔지는 안배움)

// □ 1) get 매서드

let title = document.getElementById('this_h2');
// id 는 하나로 고유하기 때문에, 단일 변수를 가져온다
console.log('title : ', title);

let items = document.getElementsByClassName('item');
// class 는 여러 개체가 공유 가능하기 때문에, 리스트로 가져온다

console.log('items : ', items);
console.log('items[1] : ', items[1]);

let liList = document.getElementsByTagName('li');
// 태그도 리스트로

console.log('liList : ', liList);

// □ 2) HTML 요소 쿼리
let title2 = document.querySelector('#this_h2');
console.log('title2: ', title2);

let items2 = document.querySelector('.item');
// querySelector 는 무조건 하나만 가져오기에, 처음 검색된 것만 리턴
console.log('item2 : ', items2);

let items3 = document.querySelectorAll('.item');
// 리스트로 가져오려면 위처럼 querySelectorAll
console.log('item3 : ', items3);

let liList2 = document.querySelectorAll('li');
console.log('liList2 : ', liList2);

// ■ 수정하기

title.textContent = '수정된 title';
// 텍스트만 수정

items[1].innerHTML = '<span>수정된 span item1</span>';
// 태그까지 수정함. span 태그도 추가됨

let inputText = document.querySelector('input');
inputText.setAttribute('placeholder', '텍스트를 입력해주세요');
// setAttribute : 속성 추가

inputText.setAttribute('required', '');
inputText.removeAttribute('required');
// removeAttribute : 속성 제거

let pItem = document.querySelector('.this_p');
pItem.style.color = 'white';
pItem.style.backgroundColor = 'black';
// style 에 직접 접근하여 style을 수정 (자주 사용되지는 않음)

let pItem2 = document.querySelector('#p_2');
pItem2.classList.add('red');
console.log(pItem2);
// 위처럼 미리 정의된 style의 클래스를 classList에 추가 (자주 사용됨)

let pItem3 = document.querySelector('#p_3');
pItem3.classList.remove('red');
// 클래스를 제거
