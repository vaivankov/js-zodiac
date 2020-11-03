import {$$} from '../../utils/Dom';
import {ActiveRoute} from './ActiveRoute';

/**
 * Класс смены страниц
 * @module core/routes/Router
 */
export class Router {
  constructor(selector, routes) {
    if (!selector) {
      throw new Error('Selector is not provided in Router');
    }

    this.$placeholder = $$(selector);
    this.routes = routes;

    this.page = null;

    this.changePageHandler = this.changePageHandler.bind(this);

    this.init();
  }

  /**
   * @property {function} init -
   * Инициализирует router
   * @return {void}
   */
  init() {
    window.addEventListener(
        'hashchange',
        this.changePageHandler
    );
    this.changePageHandler();
  }

  /**
   * @property {function} changePageHandler -
   * Устанавливает содержимое страницы
   * @return {void}
   */
  changePageHandler() {
    if (this.page) {
      this.page.destroy();
    }

    this.$placeholder.clearHTML();

    const Page = ActiveRoute.path.includes('chart') ?
      this.routes.chart :
      this.routes.dashboard;

    this.page = new Page(ActiveRoute.path);

    this.$placeholder.append(this.page.getRoot());

    this.page.afterRender();
  }

  /**
   * @property {function} destroy -
   * Удаляет подписки на события
   * @return {void}
   */
  destroy() {
    window.removeEventListener(
        'hashchange',
        this.changePageHandler
    );
  }
}
