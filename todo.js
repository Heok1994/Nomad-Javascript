const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];

const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

// ❌버튼 누르면 해당 list 삭제하는 함수
function deleteTodo(event) {
    const li = event.target.parentElement; // 삭제하고 싶은 li element 선택
    // console.log(typeof li.id); -> 콘솔에 string 출력
    toDos = toDos.filter((item) => item.id !== parseInt(li.id));
    saveToDos();
    li.remove();
}

// 입력한 todo를 리스트 형태로 추가하는 함수
function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id; // newTodoObj의 id 프로퍼티를 li 태그에 저장
    const span = document.createElement("span");
    span.innerText = newTodo.text; // newTodoObj의 text 프로퍼티 불러옴
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(span);
    li.appendChild(button);    
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value; // input의 value값을 변수에 복사
    toDoInput.value = ""; // input의 value를 비워도 newTodo변수까지 영향을 주지는 않음.
    const newTodoObj = {
        text: newTodo,
        id: Date.now(), // Date.now() 는 밀리초(1/1000)를 주는 함수
    }
    toDos.push(newTodoObj); // input의 value값을 toDos배열에 집어넣는 곳
    paintTodo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY); // string 형태

if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos); // array로 불러옴
    toDos = parsedToDos; // ★localStorage에 저장되어있던 기존 item들 복구
    // toDos 배열이 변경되므로 const 대신 let으로 변경해주어야 함(주의)
    parsedToDos.forEach(paintTodo);
}