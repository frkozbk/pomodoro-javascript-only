/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
let breakValue = Number(document.getElementById('break-value').innerText);
let sessionValue = Number(document.getElementById('session-value').innerText);
let sessionSecond = 0;
let breakSecond = 0;
let isSession = true;
console.log(sessionValue);
let sessionInterval;
let breakInterval;
function incValue(elementid) {
  if (elementid === 'break-value') {
    breakValue += 1;
    document.getElementById(elementid).innerText = breakValue;
  } else {
    sessionValue += 1;
    document.getElementById(elementid).innerText = sessionValue;
    document.querySelector('.screen-timer').innerText = `${sessionValue} : 00`;
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
    document.querySelector('.screen-timer').innerText = `${sessionValue} : 00`;
  }
}

// Timer ayarlama yapan butonlara event listener ekleme ve func
// çağırma
function buttonConfiguration() {
  const incBreakButton = document.getElementById('inc-break');
  const decBreakButton = document.getElementById('dec-break');
  const incSessionButton = document.getElementById('inc-session');
  const decSessionButton = document.getElementById('dec-session');
  incBreakButton.addEventListener('click', () => incValue('break-value'));
  incSessionButton.addEventListener('click', () => incValue('session-value'));
  decBreakButton.addEventListener('click', () => decValue('break-value'));
  decSessionButton.addEventListener('click', () => decValue('session-value'));
}
console.log(sessionValue);
function disableButtonConfiguration(yes) {
  const incBreakButton = document.getElementById('inc-break');
  const decBreakButton = document.getElementById('dec-break');
  const incSessionButton = document.getElementById('inc-session');
  const decSessionButton = document.getElementById('dec-session');
  incBreakButton.disabled = !!yes;
  decBreakButton.disabled = !!yes;
  incSessionButton.disabled = !!yes;
  decSessionButton.disabled = !!yes;
}
function timerConfiguration() {
  const start = document.getElementById('start');
  const stop = document.getElementById('stop');
  const reset = document.getElementById('reset');
  start.addEventListener('click', () => {
    disableButtonConfiguration(true);
    if (isSession) {
      sessionInterval = setInterval(() => startTimer(), 1000);
    } else {
      breakInterval = setInterval(() => startBreakTimer, 1000);
    }
  });
  stop.addEventListener('click', () => {
    if (isSession) {
      clearInterval(sessionInterval);
    } else {
      clearInterval(breakInterval);
    }
  });

  reset.addEventListener('click', () => {
    isSession = true;
    let screenTitle = document.querySelector('.screen-label');
    screenTitle.innerText = 'Session';
    disableButtonConfiguration(false);
    breakValue = Number(document.getElementById('break-value').innerText);
    sessionValue = Number(document.getElementById('session-value').innerText);
    sessionSecond = 0;
    clearInterval(sessionInterval);
    document.querySelector('.screen-timer').innerText = `${
      sessionValue < 10 ? `0${sessionValue}` : sessionValue
    } : ${sessionSecond < 10 ? `0${sessionSecond}` : sessionSecond}`;
  });
}
// Timer ı başlatma;
buttonConfiguration();
timerConfiguration();
function startTimer() {
  if (sessionValue === 0 && sessionSecond === 0) {
    clearInterval(sessionInterval);
    isSession = false;
    let screenTitle = document.querySelector('.screen-label');
    screenTitle.innerText = 'Break';
    breakInterval = setInterval(() => startBreakTimer(), 1000);
    return null;
  }
  if (sessionSecond === 0) {
    sessionSecond = 59;
    sessionValue -= 1;
    document.querySelector('.screen-timer').innerText = `${
      sessionValue < 10 ? `0${sessionValue}` : sessionValue
    } : ${sessionSecond < 10 ? `0${sessionSecond}` : sessionSecond}`;

    return null;
  }
  sessionSecond -= 1;
  document.querySelector('.screen-timer').innerText = `${
    sessionValue < 10 ? `0${sessionValue}` : sessionValue
  } : ${sessionSecond < 10 ? `0${sessionSecond}` : sessionSecond}`;

  return null;
}
function startBreakTimer() {
  if (breakValue === 0 && breakSecond === 0) {
    clearInterval(sessionInterval);
    startBreakTimer();
    return null;
  }
  if (breakSecond === 0) {
    breakSecond = 59;
    breakValue -= 1;
    document.querySelector('.screen-timer').innerText = `${
      breakValue < 10 ? `0${breakValue}` : breakValue
    } : ${breakSecond < 10 ? `0${breakSecond}` : breakSecond}`;

    return null;
  }
  breakSecond -= 1;
  document.querySelector('.screen-timer').innerText = `${
    breakValue < 10 ? `0${breakValue}` : breakValue
  } : ${breakSecond < 10 ? `0${breakSecond}` : breakSecond}`;

  return null;
}
// let interval = setInterval(() => startTimer(sessionValue), 1000);
