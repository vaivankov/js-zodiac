import {$$} from "../../utils/Dom";
import {Emitter} from "../../core/Emitter";
import {createChartWrapper} from "./createChartWrapper";
import {DataBase} from "../table/database";

/**
   * Класс объединяющий все компоненты в единое целое
   * @module components/Chart
   */
export class Chart {
  /**
     *
     * @param {object} options Параметры класса
     */
  constructor(options) {
    this.components = options.components || [];
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
     * @property {function} init - Инициализирует слушатели компонентов
     * @return {void}
     */
  init() {
    this.components.forEach((component) => component.prepare());
    this.components.forEach((component) => component.init());
  }

  /**
     * @property {function} destroy - Удаляет слушатели компонентов
     * @return {void}
     */
  destroy() {
    this.components.forEach((component) => component.destroy());
  }
}
