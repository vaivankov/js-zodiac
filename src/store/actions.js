import * as types from './types';

export function inputData(data) {
  return {
    type: types.INPUT_DATA,
    data,
  };
}
