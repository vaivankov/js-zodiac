import {DOMListener} from "./DOMListener";

/**
 *  Общий класс для компонентов страницы с зодиаком
 * @module core/ChartComponent
 */
export class ChartComponent extends DOMListener {
  /**
   *
   * @param {Object} $root - Корневой тег элемента
   * @param {Object} options - Параметры компонента
   */
  constructor($root, options = {}) {
    super(
        $root,
        options.listeners
    );

    this.name = options.name || '';
    this.emitter = options.emitter;
    this.subscribes = options.subscribes || [];
    this.unsubscribers = [];
  }

  /**
   * @property {Function} template - Возвращает шаблон компонента
   * @return {Element}
   */
  get template() {
    return this.$root.getHTML();
  }
}
