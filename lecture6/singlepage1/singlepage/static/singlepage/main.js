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
      showSection(button.dataset.section);
    }
  })
});
