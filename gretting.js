const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings"),
  delBtnForm = document.querySelector('.js-btn'),
  delBtn = delBtnForm.querySelector('input');

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleDelName() {
    localStorage.clear();
    location.reload();
}

function handleSubmit() {
    event.preventDefault();
    const currentUser = input.value;
    paintGreeting(currentUser);
    saveName(currentUser);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener('submit', handleSubmit);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}

function init() {
  loadName();
  delBtn.addEventListener('click', handleDelName);
}

init();