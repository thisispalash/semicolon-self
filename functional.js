const ids = ['a1', 'a2', 'a3', 'b1', 'b2', 'b3', 'c1', 'c2', 'c3'];

const subtitle = 'A collection of poetry by @<a href="https://thisispalash.com">thisispalash</a>';
const poems = {
  a1: 'Poetry, How To',
  a2: 'Taco Tuesday',
  a3: 'Waht Am I?',
  b1: 'Zooming Love',
  b2: 'Welcome to my mind / \'Tis but a tool',
  b3: 'Rolling a Spliff',
  c1: 'Perhaps',
  c2: 'i feel small today',
  c3: '<em>Amour Futile</em>'
}
const files = {
  a1: 'poetry-how-to',
  a2: 'taco-tuesday',
  a3: 'waht-am-i',
  b1: 'zooming-love',
  b2: 'welcome-mind',
  b3: 'rolling-a-spliff',
  c1: 'perhaps',
  c2: 'small-today',
  c3: 'amour-futile',
}

const subtitleBox = document.getElementById('subtitle');
const boxes = {
  a1: document.getElementById('a1'),
  a2: document.getElementById('a2'),
  a3: document.getElementById('a3'),
  b1: document.getElementById('b1'),
  b2: document.getElementById('b2'),
  b3: document.getElementById('b3'),
  c1: document.getElementById('c1'),
  c2: document.getElementById('c2'),
  c3: document.getElementById('c3'),
}

Object.keys(boxes).forEach(key => {
  boxes[key].onmouseover = function() {
    subtitleBox.innerHTML = poems[key];
    boxes[key].classList.add('hovered');
  }
  boxes[key].onmouseout = function() {
    subtitleBox.innerHTML = subtitle;
    boxes[key].classList.remove('hovered');
  }
});

const modal = document.getElementById('reader');
const closeBtn = document.getElementById('closeReader');
const poemTitle = document.getElementById('poemTitle');
const poemBody = document.getElementById('poemBody');


document.onclick = function (event) {

  const { target } = event;
  const { id } = target;

  if (ids.includes(id)) {
    const box = document.getElementById(id);
    
    // neumorphic charm
    box.classList.add('clicked');
    box.classList.remove('hovered');
    box.classList.remove('unclicked');

    // open modal and load poem
    modal.style.display = 'block';
    poemTitle.innerHTML = `<b>${poems[id]}</b>`;
    $('#poemBody').load(`./files/${files[id]}.html`);
    
    document.addEventListener('click', function(e) {
      
      if(e.target == modal) {
        modal.style.display = 'none';
        box.classList.add('unclicked');
        box.classList.remove('clicked');
      }

    }, true);

    // if closed through the X button
    closeBtn.onclick = function () {
      modal.style.display = 'none';
      box.classList.add('unclicked');
      box.classList.remove('clicked');
    }
  }
}
