/**
 * Класс работающий с адресами в поле ввода браузера
 * @module core/routes/ActiveRoute
 */
export class ActiveRoute {
  /**
   * @property {function} path -
   * Getter значения текущего адреса
   * @return {string} Символы после "#"
   */
  static get path() {
    return window.location.hash.slice(1);
  }

  /**
   * @property {function} param -
   * Getter значения текущего адреса
   * @return {string} Символы после "/"
   */
  static get param() {
    return ActiveRoute.path.split('/')[1];
  }
}
