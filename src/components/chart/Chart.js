import {$$} from "../../utils/Dom";
import {Emitter} from "../../core/Emitter";
import {createDemoCharts} from "../../store/createDemoCharts";
import {createChartWrapper} from "./createChartWrapper";
import {DataBase} from "../table/database";

/**
   * Класс объединяющий все компоненты в единое целое
   * @module components/Chart
   */
export class Chart {
  /**
     *
     * @param {object} $root Корневой тег
     * @param {object} options Параметры класса
     */
  constructor($root, options) {
    this.components = options.components || [];
    this.$root = $$($root);
    this.store = options.store;
    this.database = new DataBase();
    this.emitter = new Emitter();
  }

  /**
     * @property {function} getRootElement -
     * Собирает основной рабочий интерфейс программы
     * @return {object} Dom instance вёрстки интерфейса
     */
  getRootElement() {
    const componentOptions = {
      emitter: this.emitter,
      store: this.store,
      database: this.database,
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
     * @property {function} render - Вставляет шаблон программы на страницу
     * @return {void}
     */
  render() {
    createDemoCharts();
    this.$root.append(this.getRootElement());
    this.init();
  }

  /**
     * @property {function} init - Инициализирует слушатели компонента
     * @return {void}
     */
  init() {
    this.components.forEach((component) => component.prepare());
    this.components.forEach((component) => component.init());
  }
}
