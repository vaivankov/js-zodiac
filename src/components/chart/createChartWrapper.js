import {$$} from "../../utils/Dom";

/**
 * @module components/chart/createChartWrapper
 * @property {Function} createChartWrapper - Создаёт обёртку с блоками
 * @param {Array} args - Массив Dom instances компонентов страницы
 * @return {Object} Dom instance основного интерфейса программы
 */
export function createChartWrapper(args) {
  const container = $$.create(
      'div',
      'chart-container'
  );
  const table = $$.create(
      'div',
      ["block", "block--table"]
  );
  const chart = $$.create(
      'div',
      ["block", "block--chart"]
  );

  table.append(args[0].$root);
  table.append(args[1].$root);
  chart.append(args[2].$root);
  chart.append(args[3].$root);
  container.append(table);
  container.append(chart);

  return container;
}
