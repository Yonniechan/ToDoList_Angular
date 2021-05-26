import { Component, OnInit } from '@angular/core';
import { TodoStatusType } from './todo-status-type.enum';
// Service
import { TodoListService } from './todolist.service';

// Class
import { Todo } from './todo.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodoListComponent implements OnInit {
  private list: Todo[] = [];
  newTodo: string = '';
  /**
   * 目前狀態
   */
  private status = TodoStatusType.All;
  constructor(private todoListService: TodoListService) { }
  ngOnInit(): void{
  }

  /**
   * 待辦事項狀態的列舉
   */
  // tslint:disable-next-line: member-ordering
  todoStatusType = TodoStatusType;
  /**
   * 新增待辦事項
   */
  addTodo(): void{
    this.todoListService.add(this.newTodo);
    this.newTodo = '';
  }
  /**
   * 移除待辦事項
   */
  remove(index: number): void {
    this.todoListService.remove(index);
  }

  /**
   * 取得待辦事項清單
   */
  getList(): Todo[] {

    let list: Todo[] = [];

    switch (this.status) {
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;

      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;

      default:
        list = this.todoListService.getList();
        break;
    }
    return list;
  }
  /**
   * 開始編輯待辦事項
   */
  edit(todo: Todo): void {
    todo.setEditable(true);
  }

  /**
   * 更新待辦事項
   */
  update(todo: Todo, newTitle: string): void {
    if (!todo.getEditing()) {
      return;
    }
    const title = newTitle;
    todo.setTitle(title);
    todo.setEditable(false);
  }
  /**
   * 取消編輯狀態
   */
  cancelEditing(todo: Todo): void {
    todo.setEditable(false);
  }
  /**
   * 取得未完成的待辦事項清單
   */
  getRemainingList(): Todo[] {
    return this.todoListService.getWithCompleted(false);
  }
  /**
   * 取得已完成的待辦事項
   */
  getCompletedList(): Todo[] {
    return this.todoListService.getWithCompleted(true);
  }

  /**
   * 設定狀態
   */
  setStatus(status: number): void {
    this.status = status;
  }

  /**
   * 檢查目前狀態
   */
  checkStatus(status: number): boolean {
    return this.status === status;
  }
  /**
   * 從清單中移除所有已完成之待辦事項
   */
  removeCompleted(): void {
    this.todoListService.removeCompleted();
  }
}
