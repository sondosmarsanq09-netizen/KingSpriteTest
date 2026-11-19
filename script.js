const king = document.getElementById('king');

let x = Math.round(window.innerWidth / 2 - 48);
let y = 550;
const speed = 5;
let autoWalk = false;

const keys = {};

window.addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (['a', 'd', 'arrowleft', 'arrowright', ' '].includes(k)) {
    e.preventDefault();
  }
  keys[k] = true;

  if (k === ' ') {
    autoWalk = !autoWalk;
  }
});

window.addEventListener('keyup', (e) => {
  keys[e.key.toLowerCase()] = false;
});

function update() {
  let walking = autoWalk;

  if (keys['a'] || keys['arrowleft']) {
    x -= speed;
    walking = true;
    king.classList.add('facing-left');
    king.classList.remove('facing-right');
  }

  if (keys['d'] || keys['arrowright']) {
    x += speed;
    walking = true;
    king.classList.remove('facing-left');
    king.classList.add('facing-right');
  }

  if (x < 20) x = 20;
  if (x > window.innerWidth - 120) x = window.innerWidth - 120;

  king.style.left = x + 'px';
  king.style.top = y + 'px';
  king.classList.toggle('walking', walking);

  requestAnimationFrame(update);
}

update();
