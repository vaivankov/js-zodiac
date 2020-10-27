import {checkStorage} from "../utils/utils";

/**
 * @type {Array} demoCharts - Объект с данными карт
 */
const demoCharts =
  [
    {
      name: 'Demo chart 1',
      data: {
        atma: 54,
        buddha: 54,
        chandra: 54,
        dara: 54,
        guru: 54,
        ketu: 54,
        mangala: 54,
        rahu: 54,
        surya: 54,
        zani: 54,
        zukra: 54,
      },
    },
    {
      name: 'Demo chart 2',
      data: {
        atma: 97,
        buddha: 97,
        chandra: 97,
        dara: 97,
        guru: 97,
        ketu: 97,
        mangala: 97,
        rahu: 97,
        surya: 97,
        zani: 97,
        zukra: 97,
      },
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
