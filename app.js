//Pushes a popup on reload
const popup = document.getElementById("popupWelcome");
const btnClose = document.getElementById("close");
const pushPopup = () => {
  popup.style.display = 'block';
}

btnClose.addEventListener('click', () => {
  popup.style.display = "none";
});

const checkFirstVisit = () => {
  if (document.cookie.split(';').some((item) => item.includes('test=1'))) {
    pushPopup();
  } else {
    document.cookie = 'test=1';
  }
}

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
    document.cookie = 'test=2';
  }
});

// Slider animation
const issues = document.getElementById('issues');
const issueSlider = document.getElementById('issueSlider');
const issueIcon = document.getElementById('issueIcon');

issues.addEventListener('click', () => {
  issueSlider.classList.toggle('open');
  issueIcon.classList.toggle('open');
});