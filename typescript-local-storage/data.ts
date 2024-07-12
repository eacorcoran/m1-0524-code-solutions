/* exported todos */
interface Todo {
  todoId: string;
  task: string;
  isCompleted: boolean;
}

let todos: Todo[] = readTodos();

function writeTodos(): void {
  const todosJSON: string = JSON.stringify(todos);
  localStorage.setItem('todos-storage', todosJSON);
}

function readTodos():Todo[] {
  let newTodos: Todo[] = [];
  const readJSON = localStorage.getItem('todos-storage');
  if (readJSON === null) {
    newTodos = [];
  } else {
    newTodos = JSON.parse(readJSON);
  }
  return newTodos;
}
