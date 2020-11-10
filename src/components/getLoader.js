import {$$} from '../utils/Dom';

/**
 * @property {function} getLoader -
 * Создаёт окно загрузки
 * @return {Object} Dom instance
 */
export function getLoader() {
  return $$
      .create(
          'div',
          'loader'
      )
      .setHTML(`
        <div class="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      `);
}
