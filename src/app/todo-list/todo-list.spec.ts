import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { TodoList } from './todo-list';

describe('TodoList', () => {
  let component: TodoList;
  let fixture: ComponentFixture<TodoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoList],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new todo', () => {
    component.newTodo = 'Test Task';
    component.addTodo();
    expect(component.todos.length).toBe(3); // 2 initial + 1 new
    expect(component.todos[2].title).toBe('Test Task');
  });

  it('should toggle todo completion', () => {
    component.toggleTodo(0);
    expect(component.todos[0].completed).toBe(true);
  });
});
