import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoItem } from '../todo-item/todo-item';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoList {
  newTodo = '';
  todos = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build my first component', completed: false },
  ];
  addTodo() {
    if (this.newTodo.trim() === '') return;
    this.todos.push({ id: Date.now(), title: this.newTodo, completed: false });
    this.newTodo = '';
  }
  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
