import * as types from './types';

/**
 * @property {Function} rootReducer -
 * Обновляет данные в State
 * @param {Object} state - Текущее состояние приложения
 * @param {Object} action - Новые данные
 * @return {void}
 */
export function rootReducer(state, action) {
  const data = action.data;
  let newState;
  switch (action.type) {
    case types.INPUT_DATA:
      newState = {
        ...state,
        [data.planet]: data.index,
      };
      return newState;
    default: return state;
  }
}
