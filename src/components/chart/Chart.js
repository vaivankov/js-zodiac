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
    return this.components
        .map((Comp) => new Comp)
        .map((comp) => comp.getTemplate())
        .map((comp) => comp.outerHTML)
        .join(" ");
  }

  /**
   * @property {Function} render Вставляет шаблон программы на страницу
   * @return {void}
   */
  render() {
    this.$root.innerHTML = this.getRootElement();
  }
}
