export class Todo {
  /**
   * 事項名稱
   */
  private title = '';
  /**
   * 完成與否
   */
  private completed = false;
  /**
   * 是否處於編輯模式
   */
  private editMode = false;
  /**
   * constuctor
   */
  constructor(title: string) {
    this.title = title;
  }
  /**
   * 此事項是否已經完成
   */
  get done(): boolean {
    return this.completed;
  }

  /**
   * 取得事項名稱
   */
  getTitle(): string {
    return this.title;
  }
  /**
   * 設定事項名稱
   */
  setTitle(title: string): void {
    this.title = title;
  }
  /**
   * 切換完成狀態
   */
  toggleCompletion(): void {
    this.completed = !this.completed;
  }
  /**
   * 取得此事項是否處於編輯模式
   */
  getEditing(): boolean {
    return this.editMode;
  }

  /**
   * 設定此事項是否可被編輯
   */
  setEditable(boolean: boolean) {
    this.editMode = boolean;
  }

}

