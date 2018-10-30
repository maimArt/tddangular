import { browser, promise } from 'protractor';
import Promise = promise.Promise;

export class TodoListPO {
  navigateTo() {
    return browser.get('/');
  }
}
