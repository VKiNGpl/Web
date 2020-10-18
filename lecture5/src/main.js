let goodbye = false;
const heading = document.querySelector('h1');
const title = document.querySelector('title');

console.log('Document state: ' + document.readyState);

function hello() {
  if (!goodbye) {
    heading.innerHTML = 'Goodbye!';
    goodbye = true;
  } else {
    heading.innerHTML = 'Hello!';
    goodbye = false;
  }
}

function count() {
  let counter = localStorage.getItem('counter');
  counter++;
  heading.innerHTML = counter;
  localStorage.setItem('counter', counter);
}

document.addEventListener('readystatechange', () => {
  console.log('Document state: ' + document.readyState);
  if (document.readyState == 'complete') {
    console.log('Document ready');
  }
});

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM content loaded');
  if (heading.innerHTML === '0') {
    document.getElementById('count').onclick = count;
  }
  if (title.innerHTML === 'Hello') {
    document.getElementById('form1').onsubmit = () => {
      const name = document.querySelector('#name').value;
      console.log('hello');
      alert(`Hello, ${name}!`);
    };
  }
  if (title.innerHTML === 'Currency Exchange') {
    document.querySelector('form').onsubmit = () => {
      fetch('https://api.exchangeratesapi.io/latest?base=USD').then((res) =>
        res.json().then((data) => {
          const currency = document
            .querySelector('#currency')
            .value.toUpperCase();
          const rate = data.rates[currency];
          if (rate !== undefined) {
            document.querySelector(
              '#result'
            ).innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}`;
          } else {
            document.querySelector(
              '#result'
            ).innerHTML = `Currency '${currency}' not found.`;
          }
          document.querySelector('#currency').value = '';
        }).catch(error => console.error('Error:', error))
      );
      return false;
    };
  }
  if (title.innerHTML === 'Counter') {
    if (!localStorage.getItem('counter')) {
      localStorage.setItem('counter', 0);
    }
    heading.innerHTML = localStorage.getItem('counter');
  }
  if (title.innerHTML === 'Colors!') {
    document.querySelector('select').onchange = (select) => {
      document.querySelector('#colors').style.color = select.target.value;
    };
  }
  if (title.innerHTML === 'Tasks') {
    document.querySelector('#task').onkeyup = () => {
      if (document.querySelector('#task').value.length > 0) {
        disableSubmit(false);
      } else {
        disableSubmit(true);
      }
    };
    document.querySelector('form').onsubmit = () => {
      disableSubmit(true);
      const task = document.querySelector('#task').value;
      const li = document.createElement('li');
      li.innerHTML = task;
      document.querySelector('#tasks').append(li);

      document.querySelector('#task').value = '';

      // stop form submit button from submitting
      return false;
    };
  }
});

function disableSubmit(value) {
  document.querySelector('#submit').disabled = value;
}
