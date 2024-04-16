class Controller {
  constructor(todoList, view) {
    this.todoList = todoList;
    this.view = view;

    this.onTodoListChanged(this.todoList.todos);

    this.todoList.todoListChanged(this.onTodoListChanged);
    this.view.addTodo(this.handleAddTodo);
    this.view.editTodo(this.handleEditTodo);
    this.view.deleteTodo(this.handleDeleteTodo);
    this.view.checkTodo(this.handleToggleTodo);
  }

  onTodoListChanged = todos => {
    this.view.displayTodos(todos);
  };

  handleAddTodo = todoText => {
        this.todoList.addTodo(todoText);
  };

  handleEditTodo = (id, todoText) => {
    this.todoList.editTodo(id, todoText);
  };

  handleDeleteTodo = id => {
    this.todoList.deleteTodo(id);
  };

  handleToggleTodo = id => {
    this.todoList.checkTodo(id);
  };
}

export { Controller };
