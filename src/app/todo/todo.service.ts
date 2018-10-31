import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../model/todo.type';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<Todo[]> {
    return this.http.get<Todo[]>(environment.todosUrl);
  }
}
