const circle = document.querySelector('#circle');
const upBtn = document.querySelector('#upBtn');
const downBtn = document.querySelector('#downBtn');
let rotateSum = circle.style.transform;
const deg = '90deg';
upBtn.addEventListener('click', () => {
  rotateSum = rotateSum + `rotate(-${deg})`;
  circle.style.transform = rotateSum;
});
downBtn.addEventListener('click', () => {
  rotateSum = rotateSum + `rotate(${deg})`;
  circle.style.transform = rotateSum;
});
