class TodoList {
    constructor() {
        this.getTodoInLocalStorage();
    }

    todoListChanged(callback) {
        this.onTodoListChanged = callback;
    }

    setTodoInLocalStorage(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    getTodoInLocalStorage() {
        this.todos = JSON.parse(localStorage.getItem('todos')) || [];
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false
        };

        this.todos.push(todo);
        this.setTodoInLocalStorage(this.todos);
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

export {TodoList};
