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
    this.store = options.store;
    this.subscribes = options.subscribes || [];
    this.unsubscribers = [];
    this.storeSub = null;
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

  /**
   * @property {Function} $dispatch -
   * Отправляет действие на сохранение в Store
   * @param {*} data - Данные
   * @return {void}
   */
  $dispatch(data) {
    this.store.dispatch(data);
  }

  /**
   * @property {Function} $subscribe -
   * Отправляет функцию в список подписок Store
   * @param {Function} fn - Функция
   * @return {void}
   */
  $subscribe(fn) {
    this.storeSub = this.store.subscribe(fn);
  }

  /**
   * @property {Function} destroy -
   * Удаляет подписки класса
   * @return {void}
   */
  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
    this.storeSub.unsubscribe();
  }
}
