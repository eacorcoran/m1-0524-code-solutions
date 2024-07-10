"use strict";
let todos = readTodos();
function writeTodos() {
    const todosJSON = JSON.stringify(todos);
    localStorage.setItem('todos-storage', todosJSON);
}
function readTodos() {
    let newTodos = [];
    const readJSON = localStorage.getItem('todos-storage');
    if (readJSON === null) {
        newTodos = [];
    }
    else {
        newTodos = JSON.parse(readJSON);
    }
    return newTodos;
}
