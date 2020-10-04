const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector('input'),
    toDoList = document.querySelector('.js-toDoList');

const TODOS_LS = 'toDos';
let toDos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo) => {
        return toDo.id !== parseInt(li.id); //toDo.id는 숫자, li.id는 문자라서 숫자로 변환
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const li = document.createElement('li');
    const delButton = document.createElement('button');
    const span = document.createElement('span');
    const newId = toDos.length + 1;
    delButton.innerText = '할일 지우기';
    delButton.addEventListener('click', deleteToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delButton);
    li.id = newId;
    toDoList.appendChild(li);
    const toDoObj = {
        text: text,
        id: newId
    };
    toDos.push(toDoObj);
    saveToDos();
    toDoInput.value = '';

}

function handleSubmit() {
    event.preventDefault();
    if(localStorage.getItem(USER_LS) === null) {
        alert('이름을 먼저 저장 하세요');
        location.reload();

    } else {
        const currentValue = toDoInput.value;
        paintToDo(currentValue);
    }
    
}

function loadToDos() {
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null) {
       const parsedToDos = JSON.parse(loadedToDos);
       parsedToDos.forEach((toDo) => {
           paintToDo(toDo.text); //ToDos의 배열의 각각의 값을 todo라 칭하기로
       });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener('submit', handleSubmit);
}

init();

