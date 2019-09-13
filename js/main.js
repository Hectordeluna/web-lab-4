const postTodo = document.getElementById("postTodo"); 
const clearTodo = document.getElementById("clearTodo"); 
const markTodo = document.getElementById("markTodo");
const deleteTodo = document.getElementById("deleteTodo");
var todos = document.getElementById("todos");
var checkboxNum = 0;

postTodo.addEventListener("click", newTodo); 
clearTodo.addEventListener("click", clearAllTodo); 
markTodo.addEventListener("click", markAllTodo);
deleteTodo.addEventListener("click", deleteAllTodo); 

function newTodo() { 
    var div = document.createElement("div");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.id = checkboxNum;

    var todoInput = document.getElementById("todoText");


    var label = document.createElement('label')
    label.htmlFor = checkboxNum;
    label.appendChild(document.createTextNode(todoInput.value));


    div.appendChild(checkbox);
    div.appendChild(label);
    todos.appendChild(div);
    checkboxNum++;

} 

function clearAllTodo() {
    var childs = todos.getElementsByTagName("DIV");
    for (div of childs) {
        var checkbox = div.firstChild;
        checkbox.checked = false; 
    }
}

function markAllTodo() {
    var childs = todos.getElementsByTagName("DIV");
    for (div of childs) {
        var checkbox = div.firstChild;
        checkbox.checked = true; 
    }
}

function deleteAllTodo() {
    todos.innerHTML = '';

}