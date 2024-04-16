import { TodoList } from './model/todoList.js';
import { ViewList } from './view/viewList.js';
import { Controller } from './controller/controller.js';

const app = new Controller(new TodoList(), new ViewList());
