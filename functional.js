const ids = ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"];

document.onclick = function (event) {

  const { target } = event;
  const { id } = target;

  if (ids.includes(id)) {
    const box = document.getElementById(id);
    box.classList.add('clicked');
    box.classList.remove('unclicked');
    document.addEventListener('click', function() {
      box.classList.add('unclicked');
      box.classList.remove('clicked');
    }, true);
  }
}
