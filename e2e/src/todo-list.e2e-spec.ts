import { TodoListPO } from './todo-list.po';
import { MockServer} from '../mock/mock-server'

describe('TodoList', () => {
  const todoList: TodoListPO = new TodoListPO();
  const mockServer: MockServer = new MockServer(true);

  beforeEach(async() => {
    await mockServer.start();
    todoList.navigateTo();
  });

  afterEach( async () => {
    await mockServer.stop();
  });

  it('should do something', () => {
  });
});
