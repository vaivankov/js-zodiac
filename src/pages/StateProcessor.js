import {debounce} from '../utils/utils';

/**
 * Класс, работающий с текущим состоянием карты
 * @module pages/StateProcessor
 */
export class StateProcessor {
  /**
   *
   * @param {object} client - Объект карты
   * @param {number} delay - Время задержки для обработки
   */
  constructor(client, delay = 150) {
    this.client = client;
    this.listen = debounce(
        this.listen.bind(this),
        delay
    );
  }

  /**
   * @property {function} listen -
   * Запись карты в LocalStorage
   * @param {object} state - Состояние карты
   * @return {void}
   */
  listen(state) {
    this.client.save(state);
  }

  /**
   * @property {function} get -
   * Getter значения текущей карты
   * @return {object} State текущей карты
   */
  get() {
    return this.client.get();
  }
}
