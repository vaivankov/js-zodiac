import {DOMListener} from "./DOMListener";

/**
 *  Общий класс для компонентов страницы с зодиаком
 * @module core/ChartComponent
 */
export class ChartComponent extends DOMListener {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Object} options Параметры компонента
   */
  constructor($root, options = {}) {
    super(
        $root,
        options.listeners
    );
  }

  /**
   * @property {Function} template Возвращает шаблон компонента
   * @return {HTMLDivElement}
   */
  get template() {
    return document.createElement('div');
  }

  /**
   * @property {Function} getTemplate Запрашивает шаблон компонента
   * @return {HTMLDivElement}
   */
  getTemplate() {
    return this.template;
  }
}
