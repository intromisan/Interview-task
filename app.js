//Pushes a popup on 2nd reload, if clicked X or screen stops pop-ups
const popup = document.getElementById("popupWelcome");
const btnClose = document.getElementById("close");
const pushPopup = () => {
  popup.style.display = 'block';
}

// if (document.cookie.split(';').some((item) => item.includes('test=1')) && document.cookie.split(';').some((item) => item.includes('test=2')))

const checkFirstVisit = () => {
  if (document.cookie.split(';').some((item) => item.includes('test=1'))){
    if (document.cookie.split(';').some((item) => item.includes('test=1')) && document.cookie.split(';').some((item) => item.includes('enter=2'))){
      return true
    } else {
      pushPopup();
    }
  } else {
    document.cookie = 'test=1';
  }
}

btnClose.addEventListener('click', () => {
  popup.style.display = "none";
  document.cookie = 'enter=2';
});

window.addEventListener('click', (event) => {
  if (event.target == popup) {
    popup.style.display = "none";
    document.cookie = 'enter=2';
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