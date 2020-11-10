import * as types from './types';

/**
 * @property {function} rootReducer -
 * Обновляет данные в State
 * @param {object} state - Текущее состояние приложения
 * @param {object} action - Новые данные
 * @return {void}
 */
export function rootReducer(state, action) {
  let changes;
  let newState;
  switch (action.type) {
    case types.CHANGE_INPUT:
      changes = JSON.parse(action.data);
      newState = {
        ...state,
        ...changes,
      };
      return newState;
    default: return state;
  }
}
