import {TodoList} from "../model/todoList.js";

export class ViewList {
  constructor() {
    this.todos = new TodoList();
    this.initView();
    this.displayTodos()
    this.temporaryTodoText;
    // this.initListeners();
  }

  initView() {
    this.app = this.getElement('#app');

    this.title = this.createElement('h1');
    this.title.textContent = 'Todo List';

    this.form = this.createElement('form');
    this.form.setAttribute('autoComplete', 'off');

    this.input = this.createElement('input');
    this.input.type = 'text';
    this.input.placeholder = 'Add a task';
    this.input.name = 'todo';
    this.input.id = 'inputDescription';

    this.submitButton = this.createElement('button');
    this.submitButton.id = 'addTodo';
    this.submitButton.textContent = 'Add';

    this.todoListView = this.createElement('ul', 'todo-list');

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoListView);
  }

  get inputText() {
    return this.input.value;
  }

  resetInput() {
    this.input.value = '';
  }

  createElement(tag, className) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);

    return element;
  }

  getElement(selector) {
    return document.querySelector(selector);
  }

  displayTodos() {
    let todolist = this.todos.tasks;
    console.log(this.todos.tasks);

    while (this.todoListView.firstChild) {
      this.todoListView.removeChild(this.todoListView.firstChild);
    }

    if (todolist.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'Nothing to do.';
      this.todoListView.append(p);
    } else {
      todolist.forEach(todo => {
        const li = this.createElement('li');
        li.id = todo._id;

        const checkbox = this.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo._completed;

        const span = this.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo._completed) {
          const strike = this.createElement('s');
          strike.textContent = todo._description;
          span.append(strike);
        } else {
          span.textContent = todo._description;
        }

        const deleteButton = this.createElement('button', 'delete');
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        this.todoListView.append(li);
      });
    }
  }

}