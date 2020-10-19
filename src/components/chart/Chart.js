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
    this.emitter = new Emitter();
  }

  /**
   * @property {Function} getRootElement -
   * Собирает основной рабочий интерфейс программы
   * @return {String} Вёрстка интерфейса
   */
  getRootElement() {
    this.components = this.components
        .map((Comp) => {
          const container = $$.create('div');
          container.addClasses(Comp.className);
          const instance = new Comp(container);
          return instance;
        });

    return createChartWrapper(this.components);
  }

  /**
   * @property {Function} render - Вставляет шаблон программы на страницу
   * @return {void}
   */
  render() {
    this.$root.setHTML(this.getRootElement());
  }

  /**
   * @property {Function} init - Вставляет шаблон программы на страницу
   * @return {void}
   */
  init() {
    this.components.forEach((component) => component.init());
  }
}
