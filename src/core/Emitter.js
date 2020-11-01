/**
 * Класс, управляющий общими событиями в приложении
 * @module core/Emitter
 */
export class Emitter {
  constructor() {
    this.listeners = {};
  }

  /**
   * @property {function} emit - Вызывает функцию на слушаемое событие
   * @param {string} event - Название события
   * @param {array} args - Массив с параметрами
   * @return {Boolean}
   */
  emit(event, ...args) {
    if (!Array.isArray(this.listeners[event])) {
      return false;
    }

    this.listeners[event].forEach((listener) => {
      listener(...args);
    });

    return true;
  }

  /**
   * @property {function} subscribe -
   * Подписывает новую функцию на слушаемое событие
   * @param {string} event - Название события
   * @param {Function} func - callback function
   * @return {Function} anonymous - Функция отписчик
   */
  subscribe(event, func) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(func);
    return () => {
      this.listeners[event] = this.listeners[event]
          .filter((listener) => listener !== func);
    };
  }
}

