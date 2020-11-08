import {createChartList} from '../components/dashboard/createChartList';
import {Page} from "../core/Page";
import {$$} from "../utils/Dom";

/**
 * Класс главной страницы
 * @module pages/DashboardPage
 */
export class DashboardPage extends Page {
  /**
   * @property {function} getRoot -
   * Возвращает вёрстку страницы
   * @return {Object} Dom-instance
   */
  getRoot() {
    return $$
        .create(
            'div',
            'dashboard-container'
        )
        .setHTML(`
            <div class="dashboard">
              <div class="dashboard__header">
                <h1 class="dashboard__title">Главное меню</h1>
                <div class="dashboard__info">
                  Откройте карту или создайте новую:
                  <a class="material-icons dashboard__new-page" href="#chart">
                    add_circle_outline
                  </a>
                </div>
              </div>
              <div class="dashboard__body">
                ${createChartList()}
              </div>
              <div class="dashboard__footer">
                <button class="button button--load-more" type="button">
                  <b>Загрузить ещё</b>
                </button>
              </div>
            </div>
      `);
  }
}
