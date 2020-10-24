import {Emitter} from "../../core/Emitter";
import {$$} from "../../utils/Dom";
import {createChartWrapper} from "./createChartWrapper";

/**
 * Класс объединяющий все компоненты в единое целое
 * @module components/Chart
 */
export class Chart {
  /**
   *
   * @param {Object} $root Корневой тег
   * @param {Object} options Параметры класса
   */
  constructor($root, options) {
    this.components = options.components || [];
    this.$root = $$($root);
    this.store = options.store;
    this.emitter = new Emitter();
  }

  /**
   * @property {Function} getRootElement -
   * Собирает основной рабочий интерфейс программы
   * @return {Object} Dom instance вёрстки интерфейса
   */
  getRootElement() {
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
    };

    this.components = this.components
        .map((Comp) => {
          const container = $$.create(
              'div',
              Comp.className
          );
          const instance = new Comp(
              container,
              componentOptions
          );
          return instance;
        });

    return createChartWrapper(this.components);
  }

  /**
   * @property {Function} render - Вставляет шаблон программы на страницу
   * @return {void}
   */
  render() {
    this.$root.append(this.getRootElement());
    this.init();
  }

  /**
   * @property {Function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    this.components.forEach((component) => component.init());
  }
}
