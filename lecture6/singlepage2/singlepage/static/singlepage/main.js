window.onpopstate = function(event) {
  console.log(event.state.section);
  showSection(event.state.section);
}

function showSection(section) {
  fetch(`/sections/${section}`)
    .then((res) => res.text())
    .then((text) => {
      document.querySelector('#content').innerHTML = text;
    });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('button').forEach(button => {
    button.onclick = () => {
      const section = button.dataset.section;
      history.pushState({section: section}, '', `section${section}`);
      showSection(button.dataset.section);
    }
  })
});
