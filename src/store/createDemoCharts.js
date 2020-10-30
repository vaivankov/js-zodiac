import {chartState} from "../defaultValues";
import {checkStorage} from "../utils/utils";

/**
 * @type {Array} demoCharts - Объект с данными карт
 */
const demoCharts =
  [
    {
      name: 'zodiac-Demo chart 1',
      data: chartState,
    },
    {
      name: 'zodiac-Demo chart 2',
      data: chartState,
    },
  ];

/**
 * @property {Function} createDemoCharts -
 * Добавляет в LocalStorage демо карты
 * @return {void}
 */
export function createDemoCharts() {
  demoCharts.forEach((obj) => {
    checkStorage(
        obj.name,
        obj.data
    );
  });
}
