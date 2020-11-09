/**
 * Базовый класс страницы
 * @module core/Page
 */
export class Page {
  constructor(param) {
    this.param = param;
  }

  /**
   * @property {function} getRoot -
   * Создаёт метод, который нужно переопределить иначе выдаст ошибку
   * @return {void}
   */
  getRoot() {
    throw new Error('Method "getRoot" should be implemented');
  }

  /**
   * @property {function} afterRender -
   * Метод, вызывающийся после того, как страница отрисована
   * @return {void}
   */
  afterRender() {}

  /**
   * @property {function} destroy -
   * Метод, удаляющий слушателей страницы
   * @return {void}
   */
  destroy() {}
}
