/**
 * @module components/chart/createChartWrapper
 * @property {Function} createChartWrapper - Создаёт обёртку с блоками
 * @param {Array} args - Массив компонентов страницы
 * @return {String} Основной интерфейс программы
 */
export function createChartWrapper(args) {
  return `<div class="chart-container">
      <div class="block block--table">
        ${args[0].$root.getHTML() + args[1].$root.getHTML()}
      </div>
      <div class="block block--chart">
        ${args[2].$root.getHTML() + args[3].$root.getHTML()}
      </div>
    </div>`;
}
