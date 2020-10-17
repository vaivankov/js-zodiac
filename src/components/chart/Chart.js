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
    this.$root = document.querySelector($root);
  }

  /**
   * @property {Function} getRootElement
   * Собирает основной рабочий интерфейс программы
   * @return {String} Вёрстка интерфейса
   */
  getRootElement() {
    this.components = this.components
        .map((Comp) => new Comp)
        .map((comp) => comp.getTemplate());

    return createChartWrapper(this.components);
  }

  /**
   * @property {Function} render Вставляет шаблон программы на страницу
   * @return {void}
   */
  render() {
    this.$root.innerHTML = this.getRootElement();
  }
}
