import { TestBed } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.type';
import { environment } from '../../environments/environment';

describe('TodoService', () => {
  let service: TodoService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.get(TodoService);
    http = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request all todos from the backend', function (done: DoneFn) {
    const todosFromBackend: Todo[] = [{ id: '1', text: 'TODO1' }, { id: '2', text: 'TODO2' }];
    const todos$: Observable<Todo[]> = service.getTodos();
    todos$.subscribe(nextTodos => {
      expect(nextTodos).toEqual(todosFromBackend);
      done();
    });

    const testRequest = http.expectOne(environment.todosUrl);
    expect(testRequest.request.method).toEqual('GET');
    testRequest.flush(todosFromBackend);

    http.verify();
  });
})
;
