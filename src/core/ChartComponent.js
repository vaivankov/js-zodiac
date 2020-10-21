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
   * @property {Function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * @property {Function} template - Возвращает шаблон компонента
   * @return {Element}
   */
  get template() {
    return this.$root.getHTML();
  }

  /**
   * @property {Function} $emit - Закидывает в Emitter событие
   * @param {String} event - Название события
   * @param {Array} args - Массив с параметрами
   * @return {void}
   */
  $emit(event, ...args) {
    this.emitter.emit(
        event,
        ...args
    );
  }

  /**
   * @property {Function} $sub - Подписывается в Emitter на событие
   * @param {String} event - Название события
   * @param {Function} func - Callback function
   * @return {void}
   */
  $sub(event, func) {
    const unsub = this.emitter.subscribe(
        event,
        func
    );
    this.unsubscribers.push(unsub);
  }
}
