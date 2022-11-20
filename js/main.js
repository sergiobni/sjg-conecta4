const tag = document.getElementById('tag');

function pintar(num) {
  const numCasilla = document.getElementById(num);
  numCasilla.style.backgroundColor = 'red';
  tag.innerHTML = num;
}
