import {checkStorage} from '../utils/utils';

/**
 * @property {function} getStorageName -
 * Собирает имя записи в LocalStorage
 * @param {string} param - Id карты
 * @return {string} Имя записи в LocalStorage
 */
function getStorageName(param) {
  return 'chart:' + param;
}

/**
 * @module pages/LocalStorageClient
 */
export class LocalStorageClient {
  /**
   * @param {string} name - Название карты
   */
  constructor(name) {
    this.name = getStorageName(name);
  }

  /**
   * @property {function} save -
   * Записывает карту в LocalStorage
   * @param {object} state Состояние карты
   * @return {Promise<void>}
   */
  save(state) {
    checkStorage(
        this.name,
        state
    );
    return Promise.resolve();
  }

  /**
   * @property {function} get -
   * Получает карту из LocalStorage
   * @return {Promise}
   */
  get() {
    return new Promise((resolve) => {
      const state = checkStorage(this.name);

      setTimeout(
          () => {
            resolve(state);
          },
          150
      );
    });
  }
}
