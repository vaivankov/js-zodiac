/**
 * @property {Function} createStore -
 * Создаёт Store
 * @param {Function} rootReducer - Функция-обработчик State
 * @return {Object} - Объект с методами для работы со State
 */
export function createStore(rootReducer) {
  const state = {
    leftState: {},
    rightState: {},
  };
  let listeners = [];

  return {
    /**
     * @property {Function} subscribe -
     * Подписывает функцию на Store
     * @param {Function} fn -
     * Функция, вызываемая при попадании новых данных в Store
     * @return {Object} Объект к методом отписки от событий
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
     * @property {Function} dispatch -
     * Отправляет новые данные в Store
     * @param {Object} action - новые данные для State
     * @return {void}
     */
    dispatch(action) {
      const i = action.data.position + "State";
      state[i] = rootReducer(
          state[i],
          action
      );
      listeners.forEach((listener) => listener(state));
    },

    /**
     * @property {Function} getState -
     * Достаёт текущие данные из Store
     * @return {Object} state - Текущее состояние приложения
     */
    getState() {
      return state;
    },
  };
}
