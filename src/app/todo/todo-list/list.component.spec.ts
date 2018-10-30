import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';

describe('TodoListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ]
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
});
