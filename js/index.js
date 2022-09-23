import data from './appData.js';

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('nav-items');
const featuredSpeaker = document.getElementById('featured-speakers-card-container');

menuBtn.addEventListener('click', () => {
  menu.classList.add('menuShown');
  closeBtn.style.display = 'block';
});
closeBtn.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menuShown');
});

menu.addEventListener('click', () => {
  closeBtn.style.display = 'none';
  menu.classList.remove('menuShown');
});

data.forEach((data) => {
  const {
    speakerImage, speakerName, description1, description2,
  } = data;

  const speaker = document.createElement('div');
  speaker.innerHTML += `
    <div class="featured-speakers-card">
            <img  class="featured-speakers-card-image" src="${speakerImage}" alt="Speaker Image">
    <div class="featured-speakers-card-content">
        <div class="featured-speakers-card-title">
            <h2>${speakerName}</h2>
            <p>${description1}</p>
            <hr class="featured-speakers-card-title-hr">
        </div>
        <div class="featured-speakers-card-description">
            <p>${description2}</p>
        </div>
    </div>
  </div>
`;
  featuredSpeaker.appendChild(speaker);
});

const form = document.querySelector('#form');
const messageContainer = document.querySelector('.message');

const isValidEmail = (email) => {
  const eamilPattern = /^(([^<>()[\]\\.,;:\s@"A-Z]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,}))$/;
  return eamilPattern.test(email);
};

form.addEventListener('submit', (e) => {
  const formData = new FormData(e.target);
  const valid = isValidEmail(formData.get('email'));
  if (valid) {
    const message = document.createElement('span');
    message.classList.add('success');
    message.innerHTML = 'Data sent successfully!';
    messageContainer.replaceChildren(message);
  } else {
    e.preventDefault();
    const message = document.createElement('span');
    message.classList.add('error');
    message.innerHTML = 'Incorrect format. Enter email in lowercase';
    messageContainer.replaceChildren(message);
  }
});

// Mobile form Local Storage
const name = form.elements.item(0);
const email = form.elements.item(1);
const comment = form.elements.item(2);
function saveData() {
  const data = {
    Name: form.elements.item(0).value,
    Email: form.elements.item(1).value,
    Comment: form.elements.item(2).value,
  };
  localStorage.setItem('data', JSON.stringify(data));
}

let formObject = JSON.parse(localStorage.getItem('data'));
if (!formObject) {
  formObject = {
    name: '',
    email: '',
    comment: '',
  };
  saveData();
}

name.value = formObject.name;
name.addEventListener('change', (e) => {
  formObject.name = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

email.value = formObject.email;
email.addEventListener('change', (e) => {
  formObject.email = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});

comment.value = formObject.comment;
comment.addEventListener('change', (e) => {
  formObject.comment = e.target.value;
  localStorage.setItem('data', JSON.stringify(formObject));
});
