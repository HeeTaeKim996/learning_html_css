// 방법2 : onclick = function.. 으로 할당
document.querySelector('#propBtn').onclick = function () {
  alert('프로퍼티 이벤트입니다');
};

// 방법3 : addEventListener 로 할당
document.querySelector('#eventBtn').addEventListener('click', function () {
  alert('이벤트리스너 입니다');
});

let eBtn = document.querySelector('#eventBtn2');
eBtn.addEventListener('click', eClicked);
function eClicked() {
  alert('이벤트리스너2입니다');
}

// ※ 이벤트 제거하기
document.querySelector('#rmEvent').addEventListener('click', function () {
  eBtn.removeEventListener('click', eClicked);
  alert('제거 완료');
});
