let de = document.querySelector('[data-example]');
// 위처럼 유저가 정의한 속성 data-~ 를 통해 엘리먼트를 가져올 수 있음
console.log('de.dataset.example : ', de.dataset.example);
// 위처럼 사용자가 정의한 data-example 에 할당된 컨텐츠를,
// dataset.example 형식으로 가져올 수 있음

// 응용 : 이미지 주소 가져와서 추가하기
let dImg = document.querySelector('#dImage');
let pickBtns = document.querySelectorAll('.pickImg');
for (let i = 0; i < pickBtns.length; i++) {
  // 이렇게 for문은 같은 양식으로 작동하네
  let pickBtn = pickBtns[i];
  pickBtn.addEventListener('click', function (event) {
    console.log(event.target.parentNode.dataset.image);
    dImg.setAttribute('src', event.target.parentNode.dataset.image);
    dImg.setAttribute('width', 300);
  });
}
