import * as types from './types';

export function rootReducer(state, action) {
  let prevState;
  switch (action.type) {
    case types.INPUT_DATA:
      prevState = state.inputState || {};
      prevState[action.data.id] = action.data.value;
      return {...state,
        inputState: prevState};
    default: return state;
  }
}
