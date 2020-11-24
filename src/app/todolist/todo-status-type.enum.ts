/**
 * 記錄使用者現在看的清單是哪一種，所以用 CLI 幫我們建立一個列舉用以列舉出所有的狀態
 * ：待辦事項的狀態類型列舉
 */
export enum TodoStatusType {

  /**
   * 所有
   */
  All,

  /**
   * 正在進行
   */
  Active,

  /**
   * 已完成
   */
  Completed

}
