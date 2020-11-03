import {DOMListener} from "./DOMListener";

/**
 *  Общий класс для компонентов страницы с зодиаком
 * @module core/ChartComponent
 */
export class ChartComponent extends DOMListener {
  /**
   *
   * @param {object} $root - Корневой тег элемента
   * @param {object} options - Параметры компонента
   */
  constructor($root, options = {}) {
    super(
        $root,
        options.listeners
    );

    this.name = options.name || '';
    this.emitter = options.emitter;
    this.store = options.store;
    this.database = options.database;
    this.subscribes = options.subscribes || [];
    this.unsubscribers = [];
  }

  /**
   * @property {function} prepare -
   * Предварительная подготовка компонента
   * @return {void}
   */
  prepare() {
  }

  /**
   * @property {function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    this.initDOMListeners();
  }

  /**
   * @property {function} template - Возвращает шаблон компонента
   * @return {Element}
   */
  get template() {
    return this.$root.getHTML();
  }

  /**
   * @property {function} $emit - Закидывает в Emitter событие
   * @param {string} event - Название события
   * @param {array} args - Массив с параметрами
   * @return {void}
   */
  $emit(event, ...args) {
    this.emitter.emit(
        event,
        ...args
    );
  }

  /**
   * @property {function} $sub - Подписывается в Emitter на событие
   * @param {string} event - Название события
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

  /**
   * @property {function} $dispatch -
   * Отправляет действие на сохранение в Store
   * @param {*} data - Данные
   * @return {void}
   */
  $dispatch(data) {
    this.store.dispatch(data);
  }

  /**
   * @property {function} destroy -
   * Удаляет подписки класса
   * @return {void}
   */
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
