import {Page} from "../core/Page";
import {createStore} from "../store/createStore";
import {rootReducer} from "../store/rootReducer";
import {Chart} from "../components/chart/Chart";
import {Table} from "../components/table/Table";
import {TableHeader} from "../components/table_header/TableHeader";
import {ZodiacHeader} from "../components/zodiac_header/ZodiacHeader";
import {Zodiac} from "../components/zodiac/Zodiac";

/**
 * Класс страницы с картами
 * @module pages/ChartPage
 */
export class ChartPage extends Page {
  /**
   * @property {function} getRoot -
   * Возвращает вёрстку страницы
   * @return {Object} Dom-instance
   */
  getRoot() {
    const store = createStore(rootReducer);

    this.chart = new Chart({
      components: [TableHeader, Table, ZodiacHeader, Zodiac],
      store,
    });

    return this.chart.getRootElement();
  }

  /**
   * @property {function} afterRender -
   * Callback function после рендера страницы
   * @return {void}
   */
  afterRender() {
    this.chart.init();
  }

  /**
   * @property {function} destroy -
   * Удаляет слушатели страницы
   * @return {void}
   */
  destroy() {
    this.chart.destroy();
  }
}
