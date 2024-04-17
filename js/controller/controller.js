import {Task} from "../model/task.js";

export class Controller {

  constructor(todoList, view) {
    this.todoList = todoList;
    this.view = view;
    this.initListeners();
  }

  getDOMElement(selector) {
    return document.getElementById(selector);
  }

  initListeners() {
    this.getDOMElement("addTodo").addEventListener('click', (event) => {
    this.addTodo()
    });
  }

  addTodo() {
    event.preventDefault();
    let description = this.getDOMElement("inputDescription").value
    if (description) {
      this.todoList.addTodo(new Task(null, description));
      this.view.resetInput();
      this.view.displayTodos();
    }
  }

  // addTodo(handler) {
  //   this.form.addEventListener('submit', event => {
  //     event.preventDefault();
  //
  //     if (this.inputText) {
  //       handler(this.inputText);
  //       this.resetInput();
  //     }
  //   });
  // }
  //
  // editTodo(handler) {
  //   this.todoList.addEventListener('focusout', event => {
  //     if (this.temporaryTodoText) {
  //       const id = parseInt(event.target.parentElement.id);
  //
  //       handler(id, this.temporaryTodoText);
  //       this.temporaryTodoText = '';
  //     }
  //   });
  // }
  //
  // deleteTodo(handler) {
  //   this.todoList.addEventListener('click', event => {
  //     if (event.target.className === 'delete') {
  //       const id = parseInt(event.target.parentElement.id);
  //
  //       handler(id);
  //     }
  //   });
  // }
  //
  // checkTodo(handler) {
  //   this.todoList.addEventListener('change', event => {
  //     if (event.target.type === 'checkbox') {
  //       const id = parseInt(event.target.parentElement.id);
  //
  //       handler(id);
  //     }
  //   });
  // }

}
