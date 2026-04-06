import { Component, input, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-item',
  imports: [FormsModule],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo: any;
}
