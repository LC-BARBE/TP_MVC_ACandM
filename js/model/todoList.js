import {Task} from "./task.js";
import {ViewList} from "../view/viewList.js";

/**
 * @typedef {Object} TodoList
 * @property {Task[]} _tasks - task list
 */
export class TodoList {

    constructor() {
        if (!TodoList._instance) {
            this._tasks = []; // Liste des tâches
            this.initTasks();
            TodoList._instance = this; // Instance unique de TodoList
        }
        return TodoList._instance;
    }

    initTasks() {
        const sample = ["task1", "task2", "task3"];
        sample.forEach(description => {
            this.addTodo(new Task(null, description));
        })
    }

    get tasks() {
        return this._tasks;
    }

    set tasks(value) {
        this._tasks = value;
    }

    get instance() {
        return this._instance;
    }

    set instance(value) {
        this._instance = value;
    }


    addTodo(todo) {
        if (todo instanceof Task) {
            const todoInit = new Task(
                this._tasks.length > 0 ? this._tasks[this._tasks.length - 1].id + 1 : 1,
                todo.description
            )
            this._tasks.push(todoInit);
            return todoInit.id
        }

        return -1
    }

    editTodo(id, updatedText) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? {id: todo.id, text: updatedText, complete: todo.complete} : todo);
        this.setTodoInLocalStorage(this.todos);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);

        this.setTodoInLocalStorage(this.todos);
    }

    checkTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id
                ? {id: todo.id, text: todo.text, complete: !todo.complete}
                : todo
        );

        this.setTodoInLocalStorage(this.todos);
    }
}