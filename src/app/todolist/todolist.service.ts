import { Injectable } from '@angular/core';
// Class
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list: Todo[] = [];

  constructor() { }

  /**
   * 取得待辦事項清單
   */
  getList(): Todo[] {
    return this.list;
  }

  /**
   * 新增待辦事項
   */
  add(title: string): void {
      this.list.push(new Todo(title));
  }
  /**
   * 移除待辦事項
   */
  remove(index: number): void {
    this.list.splice(index, 1);
  }
  /**
   * 取得已完成/未完成的清單
   */
  getWithCompleted(completed: boolean): Todo[] {
    return this.list.filter(todo => todo.done === completed);
  }
  /**
   * 從清單中移除所有已完成之待辦事項
   */
  removeCompleted(): void {
    this.list = this.getWithCompleted(false);
  }
}
