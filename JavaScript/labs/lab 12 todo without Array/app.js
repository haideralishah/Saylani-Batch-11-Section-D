let todoInput = document.querySelectorAll(".new-todo")[0];
let todoListDiv = document.querySelectorAll(".todo-list")[0];
function add() {
  let todoVal = todoInput.value;
  printAllTodos(todoVal);
  todoInput.value = "";
}

function printAllTodos(newTodoText) {
  let newTodoList = makeTodoListEl(newTodoText);
  todoListDiv.appendChild(newTodoList);
}

function makeTodoListEl(newTodoText) {
  let pEl = document.createElement("P");
  let textNode = document.createTextNode(newTodoText);
  pEl.appendChild(textNode);

  let delBtn = document.createElement("BUTTON");
  let delText = document.createTextNode("Delete");
  delBtn.appendChild(delText);
  delBtn.setAttribute("onclick", "deleteTodo(this)");

  let editBtn = document.createElement("BUTTON");
  let editText = document.createTextNode("Edit");
  editBtn.appendChild(editText);
  editBtn.setAttribute("onclick", "editTodo(this)");

  pEl.appendChild(delBtn);
  pEl.appendChild(editBtn);

  return pEl;
}

function deleteTodo(el) {
  let targetNode = el.parentNode;
  let parentEl = el.parentNode.parentNode;
  parentEl.removeChild(targetNode);
}

let editTodoContainer = document.querySelectorAll("#edit-todo-container")[0];
let todoInputContainer = document.querySelectorAll(
  "#add-new-todo-container"
)[0];
let editInputEl = document.querySelectorAll(".edit-todo")[0];

let targetText;
function editTodo(el) {
  editTodoContainer.className = "";
  todoInputContainer.className += " hide";
  targetText = el.parentNode.childNodes[0];
  editInputEl.value = targetText.nodeValue;
}

function upadateTodo() {
  targetText.nodeValue = editInputEl.value;
  editTodoContainer.className += " hide";
  todoInputContainer.className = "";
}
