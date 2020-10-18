const title = document.querySelector('title');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  if (title.innerHTML === 'Single Page') {
    document.querySelectorAll('button').forEach((button) => {
      button.onclick = () => {
        showPage(button.dataset.page);
      };
    });
  }
  if (title.innerHTML === 'Scroll') {
    window.onscroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        document.querySelector('body').style.background = 'green';
      } else {
        document.querySelector('body').style.background = 'white';
      }
    };
  }
  if (title.innerHTML === 'Animate') {
    const h1 = document.querySelector('h1');
    h1.style.animationPlayState = 'paused';

    document.querySelector('button').onclick = () => {
      if (h1.style.animationPlayState === 'paused') {
        h1.style.animationPlayState = 'running';
      } else {
        h1.style.animationPlayState = 'paused';
      }
    }
  }
  if (title.innerHTML === 'React') {

    
  }
});

function showPage(page) {
  document.querySelectorAll('div').forEach((div) => {
    div.style.display = 'none';
  });
  document.querySelector(`#${page}`).style.display = 'block';
}
