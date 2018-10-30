import { TodoListPO } from './todo-list.po';
import { MockServer } from '../mock/mock-server'

describe('TodoList', () => {
  const todoList: TodoListPO = new TodoListPO();
  const mockServer: MockServer = new MockServer(true);

  beforeEach(async () => {
    await mockServer.start();
    todoList.navigateTo();
  });

  afterEach(async () => {
    await mockServer.stop();
  });

  it('should display a header "TODOs"', () => {
    expect(todoList.getHeaderText()).toEqual('TODOs');
  });

  it('should display a list of TODOs', function () {
    expect(todoList.isTodoListShown()).toBe(true);
  });

  it('should display TODOs of the backend', function () {
    expect(todoList.getTodoTexts()).toEqual(['Make coffee', 'Start coding', 'Make some coffee again'])
  });
});
