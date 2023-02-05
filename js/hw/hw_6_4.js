const refBox = document.querySelector('.js-box');

refBox.addEventListener('mouseover', onMouseEnter);

function onMouseEnter(event) {
  const box = event.currentTarget;
  box.classList.add('box--active');
}

refBox.addEventListener('mouseleave', onMouseLeave);

function onMouseLeave(event) {
  const box = event.currentTarget;
  box.classList.remove('box--active');
}

refBox.addEventListener('mousemove', onMouseMove);

function onMouseMove(event) {
  console.log(event);
}
