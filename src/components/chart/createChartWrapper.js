import {nakshatrasList} from "../../constants";
import {$$} from "../../utils/Dom";
import {getSavedChartNames} from "../../utils/utils";

/**
 * @module components/chart/createChartWrapper
 * @property {function} createChartWrapper - Создаёт обёртку с блоками
 * @param {array} args - Массив Dom instances компонентов страницы
 * @return {object} Dom instance основного интерфейса программы
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
  const nakshatraListWrapper = $$.create(
      'div',
      'visually-hidden'
  );
  const chartListWrapper = $$.create(
      'div',
      'visually-hidden'
  );
  const nakshatraOptions = nakshatrasList
      .map((i) => `<option>${i}</option>`)
      .join('');
  const chartOptions = getSavedChartNames();

  nakshatraListWrapper
      .setHTML(`<datalist id="nakshatraList">${nakshatraOptions}</datalist>`);
  chartListWrapper
      .setHTML(`<datalist id="chartList">${chartOptions}</datalist>`);

  table.append(args[0].$root);
  table.append(args[1].$root);
  table.append(nakshatraListWrapper);
  table.append(chartListWrapper);
  chart.append(args[2].$root);
  chart.append(args[3].$root);
  container.append(table);
  container.append(chart);

  return container;
}
