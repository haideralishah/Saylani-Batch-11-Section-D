let todoInput = document.querySelectorAll('.new-todo')[0];
let todoListDiv = document.querySelectorAll('.todo-list');
let allTodos = [];

function add() {
    let todoVal = todoInput.value;
    allTodos.push(todoVal);
    printAllTodos();
    todoInput.value = '';
}

function printAllTodos() {
    todoListDiv[0].innerHTML = "";
    for (let i = 0; i < allTodos.length; i++) {
        todoListDiv[0].innerHTML += `
            <p id="todo-${i}">
                ${allTodos[i]}
                <button onclick="editTodo(${i})">Edit</button>
                <button onclick="deleteTodo(${i})">Delete</button>
            </p>
        `;
    }
}

function deleteTodo(index) {
    allTodos.splice(index, 1);
    printAllTodos();
}


let editTodoDiv = document.querySelectorAll('#edit-todo-container')[0];
let addTodoDiv = document.querySelectorAll('#add-new-todo-container')[0];
let editTodoInput = document.querySelectorAll('.edit-todo')[0];
let editIndex;
function editTodo(index) {
    if (isEditing) {
        displayError();
    }
    else {
        editIndex = index;
        toggleTodoForm();
        editTodoInput.value = allTodos[index];
    }
}

function upadateTodo() {
    toggleTodoForm();
    allTodos.splice(editIndex, 1, editTodoInput.value);
    printAllTodos();
}

let isEditing = false;
function toggleTodoForm() {
    if (!isEditing) {
        editTodoDiv.className = "";
        addTodoDiv.className += " hide";
    }
    else {
        editTodoDiv.className += " hide";
        addTodoDiv.className = "";
    }
    isEditing = !isEditing;
}

let errorPEl = document.querySelectorAll('.error-msg')[0];
function displayError() {
    errorPEl.innerHTML = "First save edited todo.";
    setTimeout(function () {
        errorPEl.innerHTML = "";
    }, 3000);
}