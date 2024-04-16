import { TodoList } from './todoList.js';
import { View } from './view.js';
import { Controller } from './controller.js';

const app = new Controller(new TodoList(), new View());
