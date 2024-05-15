let todoInput = document.querySelectorAll('.new-todo');
let todoListDiv = document.querySelectorAll('.todo-list');
let allTodos = [];

function add() {
    let todoVal = todoInput[0].value;
    allTodos.push(todoVal);
    printAllTodos();
    todoInput[0].value = '';
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

function editTodo(index) {
    console.log('edit', index);
}


function deleteTodo(index) {
    allTodos.splice(index, 1);    
    printAllTodos();
}