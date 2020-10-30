import * as types from './types';

/**
 * @property {Function} rootReducer -
 * Обновляет данные в State
 * @param {Object} state - Текущее состояние приложения
 * @param {Object} action - Новые данные
 * @return {void}
 */
export function rootReducer(state, action) {
  const changes = JSON.parse(action.data);
  let newState;
  switch (action.type) {
    case types.CHANGE_INPUT:
      newState = {
        ...state,
        ...changes,
      };
      console.log(newState);
      return newState;
    default: return state;
  }
}
