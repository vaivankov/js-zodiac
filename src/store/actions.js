import * as types from './types';

export function inputData(data) {
  return {
    type: types.CHANGE_INPUT,
    data,
  };
}
