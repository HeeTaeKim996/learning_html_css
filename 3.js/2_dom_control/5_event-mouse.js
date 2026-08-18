// ※ F12 개발자 모드로 보면, 갱신이 늦게 되는 경우가 있음. 개발자 모드 말고
//    일반 모드로 보면 해당 문제 해결됨 (로그는 안보이겠지만)

let clientPos = document.querySelector('#clientPos');
let pagePos = document.querySelector('#pagePos');

let rec1 = document.querySelector('#rec1');
rec1.addEventListener('mousedown', function () {
  console.log('마우스다운');
});

rec1.addEventListener('mouseup', function () {
  console.log('마우스업');
});

rec1.addEventListener('mouseenter', function () {
  console.log('마우스 엔터');
  rec1.style.backgroundColor = 'blue';
});
rec1.addEventListener('mouseleave', function () {
  console.log('마우스 리브');
  rec1.style.backgroundColor = 'green';
});

rec1.addEventListener('mousemove', function (event) {
  console.log('마우스 무브');
  clientPos.textContent =
    'client : x(' + event.clientX + '), y(' + event.clientY + ')';
  pagePos.textContent = 'page : x(' + event.pageX + '), y(' + event.pageY + ')';
  // client X,Y : 화면에 잡히는 브라우저 기준의 pos
  // page X, Y  : 화면이 아닌 스크롤 기준 전체의 pos
});

let circle = document.querySelector('.circle');
document.querySelector('body').addEventListener('click', function (event) {
  let xHalf = circle.offsetWidth / 2;
  let yHalf = circle.offsetHeight / 2;

  circle.style.left = event.pageX - xHalf + 'px';
  circle.style.top = event.pageY - yHalf + 'px';
});
