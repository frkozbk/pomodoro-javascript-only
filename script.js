/* eslint-disable no-param-reassign */
let breakValue = Number(document.getElementById('break-value').innerText);
let sessionValue = Number(document.getElementById('session-value').innerText);
function incValue(elementid) {
  if (elementid === 'break-value') {
    breakValue += 1;
    document.getElementById(elementid).innerText = breakValue;
  } else {
    sessionValue += 1;
    document.getElementById(elementid).innerText = sessionValue;
  }
}
function decValue(elementid) {
  if (elementid === 'break-value') {
    if (breakValue !== 1) {
      breakValue -= 1;
      document.getElementById(elementid).innerText = breakValue;
    }
  } else if (sessionValue !== 1) {
    sessionValue -= 1;
    document.getElementById(elementid).innerText = sessionValue;
  }
}
// Find buttons and Timer values

const incBreakButton = document.getElementById('inc-break');
const decBreakButton = document.getElementById('dec-break');
const incSessionButton = document.getElementById('inc-session');
const decSessionButton = document.getElementById('dec-session');
incBreakButton.addEventListener('click', () => incValue('break-value'));
incSessionButton.addEventListener('click', () => incValue('session-value'));
decBreakButton.addEventListener('click', () => decValue('break-value'));
decSessionButton.addEventListener('click', () => decValue('session-value'));

// incBreakButton.addEventListener('click', function increaseBreakValue() {
//   let breakValue = document.getElementById('break-value').innerText;
//   document.getElementById('break-value').innerText = Number(breakValue) + 1;
// });
