import {Page} from "../core/Page";
import {createStore} from "../store/createStore";
import {rootReducer} from "../store/rootReducer";
import {Chart} from "../components/chart/Chart";
import {Table} from "../components/table/Table";
import {TableHeader} from "../components/table_header/TableHeader";
import {ZodiacHeader} from "../components/zodiac_header/ZodiacHeader";
import {Zodiac} from "../components/zodiac/Zodiac";
import {StateProcessor} from './StateProcessor';
import {LocalStorageClient} from './LocalStorageClient';

/**
 * Класс страницы с картами
 * @module pages/ChartPage
 */
export class ChartPage extends Page {
  constructor(param) {
    super(param);

    this.storeSub = null;
    this.processor = new StateProcessor(new LocalStorageClient(this.param));
  }
  /**
   * @property {function} getRoot -
   * Возвращает вёрстку страницы
   * @return {Promise} Dom-instance
   */
  async getRoot() {
    const state = await this.processor.get();
    const store = createStore(
        rootReducer,
        state
    );

    this.storeSub = store.subscribe(this.processor.listen);

    this.chart = new Chart({
      components: [TableHeader, Table, ZodiacHeader, Zodiac],
      store,
      param: this.param,
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
    this.storeSub.unsubscribe();
  }
}
