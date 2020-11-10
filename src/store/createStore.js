/**
 * @property {function} createStore -
 * Создаёт Store
 * @param {Function} rootReducer - Функция-обработчик State
 * @param {Object} initialState - Начальный State
 * @return {object} - Объект с методами для работы со State
 */
export function createStore(rootReducer, initialState = {}) {
  const state = rootReducer(
      {...initialState},
      {type: '__INIT__'}
  );
  let listeners = [];

  return {
    /**
     * @property {function} subscribe -
     * Подписывает функцию на Store
     * @param {Function} fn -
     * Функция, вызываемая при попадании новых данных в Store
     * @return {object} Объект к методом отписки от событий
     */
    subscribe(fn) {
      listeners.push(fn);
      return {
        unsubscribe() {
          listeners = listeners.filter((l) => l !== fn);
        },
      };
    },

    /**
     * @property {function} dispatch -
     * Отправляет новые данные в Store
     * @param {object} action - Объект с данными для State
     * @return {void}
     */
    dispatch(action) {
      rootReducer(
          state,
          action
      );
      listeners.forEach((listener) => listener(state));
    },

    /**
     * @property {function} getState -
     * Достаёт текущие данные из Store
     * @return {object} state - Текущее состояние приложения
     */
    getState() {
      return state;
    },
  };
}
