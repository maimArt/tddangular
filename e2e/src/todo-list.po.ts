import { browser, by, element, promise } from 'protractor';
import Promise = promise.Promise;

export class TodoListPO {

  navigateTo() {
    return browser.get('/');
  }

  getHeaderText(): Promise<string> {
    return element(by.css('todo-list h1')).getText();
  }

  isTodoListShown(): Promise<boolean> {
    return element(by.css('todo-list ul')).isPresent();
  }

  getTodoTexts(): Promise<string[]> {
    return element.all(by.css('todo-list ul li')).map(listItem => listItem.getText());
  }
}
