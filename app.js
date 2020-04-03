const issues = document.getElementById('issues');
const issueSlider = document.getElementById('issueSlider');
const issueIcon = document.getElementById('issueIcon');

issues.addEventListener('click', () => {
  issueSlider.classList.toggle('open');
  issueIcon.classList.toggle('open');
});