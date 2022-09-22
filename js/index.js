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
})

function viewMore() {
  var fsData2 = document.getElementById('featured-speakers-card ${data #2 #3 #4 #5}');
  var fSpeaker = document.getElementById('featured-speakers-card ${#0 #1}');
  var moreButton = document.getElementById('more');


  if (fsData2.style.display === "block") {
    fsData2.style.display = "none";
    fSpeaker.style.display = "block";
  } else {
    fsData2.style.display = "block";
    moreButton.innerHTML = "less"; 
    fSpeaker.style.display = "none";
  }
}


