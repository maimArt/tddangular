import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { Observable, of } from 'rxjs';
import { Todo } from '../../../model/todo.type';
import { TodoService } from '../todo.service';

class TodoServiceMock {
  todos = [{ id: '1', text: 'TODO1' }, { id: '2', text: 'TODO2' }];

  getTodos(): Observable<Todo[]> {
    return of(this.todos);
  }
}

describe('TodoListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let todoService: TodoServiceMock;

  beforeEach(async(() => {
    todoService = new TodoServiceMock();
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [{
        provide: TodoService,
        useValue: todoService
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a header TODOs', function () {
    const headerElement: HTMLHeadElement = fixture.nativeElement.querySelector('h1');
    expect(headerElement.textContent).toEqual('TODOs')
  });

  it('should display a todo list', function () {
    const todoListElement: HTMLUListElement = fixture.nativeElement.querySelector('ul');
    expect(todoListElement).toBeTruthy();
  });

  it('should initially load list of todos from todo service', function (done: DoneFn) {
    spyOn(todoService, 'getTodos').and.callThrough();

    component.ngOnInit();
    fixture.detectChanges();

    expect(todoService.getTodos).toHaveBeenCalled();
    component.todos$.subscribe(nextTodos => {
      expect(nextTodos).toEqual(todoService.todos);
      done();
    })
  });

  it('should display todos requested from todo service', function () {
    component.ngOnInit();
    fixture.detectChanges();

    const todoElements: NodeListOf<HTMLElement> = fixture.nativeElement.querySelectorAll('li');
    const todoTexts: string[] = Array.from(todoElements).map(todoElement => todoElement.textContent);
    expect(todoTexts).toEqual(todoService.todos.map(todo => todo.text));
  });
});
