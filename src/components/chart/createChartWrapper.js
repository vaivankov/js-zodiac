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
        <div>
          <datalist class="visually-hidden" id="nakshatrasList">
            <option>ашвини 1</option>
            <option>ашвини 2</option>
            <option>ашвини 3</option>
            <option>ашвини 4</option>
            <option>бхарани 1</option>
            <option>бхарани 2</option>
            <option>бхарани 3</option>
            <option>бхарани 4</option>
            <option>криттика 1</option>
            <option>криттика 2</option>
            <option>криттика 3</option>
            <option>криттика 4</option>
            <option>рохини 1</option>
            <option>рохини 2</option>
            <option>рохини 3</option>
            <option>рохини 4</option>
            <option>мригашира 1</option>
            <option>мригашира 2</option>
            <option>мригашира 3</option>
            <option>мригашира 4</option>
            <option>ардра 1</option>
            <option>ардра 2</option>
            <option>ардра 3</option>
            <option>ардра 4</option>
            <option>пунарвасу 1</option>
            <option>пунарвасу 2</option>
            <option>пунарвасу 3</option>
            <option>пунарвасу 4</option>
            <option>пушья 1</option>
            <option>пушья 2</option>
            <option>пушья 3</option>
            <option>пушья 4</option>
            <option>ашлеша 1</option>
            <option>ашлеша 2</option>
            <option>ашлеша 3</option>
            <option>ашлеша 4</option>
            <option>магха 1</option>
            <option>магха 2</option>
            <option>магха 3</option>
            <option>магха 4</option>
            <option>пурва-пхалгуни 1</option>
            <option>пурва-пхалгуни 2</option>
            <option>пурва-пхалгуни 3</option>
            <option>пурва-пхалгуни 4</option>
            <option>уттара-пхалгуни 1</option>
            <option>уттара-пхалгуни 2</option>
            <option>уттара-пхалгуни 3</option>
            <option>уттара-пхалгуни 4</option>
            <option>хаста 1</option>
            <option>хаста 2</option>
            <option>хаста 3</option>
            <option>хаста 4</option>
            <option>читра 1</option>
            <option>читра 2</option>
            <option>читра 3</option>
            <option>читра 4</option>
            <option>свати 1</option>
            <option>свати 2</option>
            <option>свати 3</option>
            <option>свати 4</option>
            <option>вишакха 1</option>
            <option>вишакха 2</option>
            <option>вишакха 3</option>
            <option>вишакха 4</option>
            <option>анурадха 1</option>
            <option>анурадха 2</option>
            <option>анурадха 3</option>
            <option>анурадха 4</option>
            <option>джьештха 1</option>
            <option>джьештха 2</option>
            <option>джьештха 3</option>
            <option>джьештха 4</option>
            <option>мула 1</option>
            <option>мула 2</option>
            <option>мула 3</option>
            <option>мула 4</option>
            <option>пурва-ашадха 1</option>
            <option>пурва-ашадха 2</option>
            <option>пурва-ашадха 3</option>
            <option>пурва-ашадха 4</option>
            <option>уттара-ашадха 1</option>
            <option>уттара-ашадха 2</option>
            <option>уттара-ашадха 3</option>
            <option>уттара-ашадха 4</option>
            <option>шравана 1</option>
            <option>шравана 2</option>
            <option>шравана 3</option>
            <option>шравана 4</option>
            <option>дхаништха 1</option>
            <option>дхаништха 2</option>
            <option>дхаништха 3</option>
            <option>дхаништха 4</option>
            <option>шатабхиша 1</option>
            <option>шатабхиша 2</option>
            <option>шатабхиша 3</option>
            <option>шатабхиша 4</option>
            <option>пурва-бхадра 1</option>
            <option>пурва-бхадра 2</option>
            <option>пурва-бхадра 3</option>
            <option>пурва-бхадра 4</option>
            <option>уттара-бхадра 1</option>
            <option>уттара-бхадра 2</option>
            <option>уттара-бхадра 3</option>
            <option>уттара-бхадра 4</option>
            <option>ревати 1</option>
            <option>ревати 2</option>
            <option>ревати 3</option>
            <option>ревати 4</option>
          </datalist>
        </div>
      </div>
      <div class="block block--chart">
        ${args[2].$root.getHTML() + args[3].$root.getHTML()}
      </div>
    </div>`;
}
