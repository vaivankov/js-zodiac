/**
 * Класс, инициализирующий события на элементах
 * @module core/DOMListener
 */
export class DOMListener {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Array} listeners События, которые слушает данный элемент
   */
  constructor($root, listeners = []) {
    this.$root = $root;
    this.listeners = listeners;
  }

  /**
   * @property {Function} initDOMListeners
   * @return {void}
   */
  initDOMListeners() {
  }

  /**
   * @property {Function} removeDOMListeners
   * @return {void}
   * */
  removeDOMListeners() {

  }
}
