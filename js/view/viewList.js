class ViewList {
  constructor() {
    this.initView();
    this.temporaryTodoText;
    this.initListeners();
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

    this.submitButton = this.createElement('button');
    this.submitButton.textContent = 'Add';

    this.todoList = this.createElement('ul', 'todo-list');

    this.form.append(this.input, this.submitButton);

    this.app.append(this.title, this.form, this.todoList);
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

  displayTodos(todos) {
    while (this.todoList.firstChild) {
      this.todoList.removeChild(this.todoList.firstChild);
    }

    if (todos.length === 0) {
      const p = this.createElement('p');
      p.textContent = 'Nothing to do.';
      this.todoList.append(p);
    } else {
      todos.forEach(todo => {
        const li = this.createElement('li');
        li.id = todo.id;

        const checkbox = this.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.complete;

        const span = this.createElement('span');
        span.contentEditable = true;
        span.classList.add('editable');

        if (todo.complete) {
          const strike = this.createElement('s');
          strike.textContent = todo.text;
          span.append(strike);
        } else {
          span.textContent = todo.text;
        }

        const deleteButton = this.createElement('button', 'delete');
        deleteButton.textContent = 'Delete';
        li.append(checkbox, span, deleteButton);

        this.todoList.append(li);
      });
    }
  }

  initListeners() {
    this.todoList.addEventListener('input', event => {
      if (event.target.className === 'editable') {
        this.temporaryTodoText = event.target.innerText;
      }
    });
  }

  addTodo(handler) {
    this.form.addEventListener('submit', event => {
      event.preventDefault();

      if (this.inputText) {
        handler(this.inputText);
        this.resetInput();
      }
    });
  }

  editTodo(handler) {
    this.todoList.addEventListener('focusout', event => {
      if (this.temporaryTodoText) {
        const id = parseInt(event.target.parentElement.id);

        handler(id, this.temporaryTodoText);
        this.temporaryTodoText = '';
      }
    });
  }

  deleteTodo(handler) {
    this.todoList.addEventListener('click', event => {
      if (event.target.className === 'delete') {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }

  checkTodo(handler) {
    this.todoList.addEventListener('change', event => {
      if (event.target.type === 'checkbox') {
        const id = parseInt(event.target.parentElement.id);

        handler(id);
      }
    });
  }
}

export { ViewList };