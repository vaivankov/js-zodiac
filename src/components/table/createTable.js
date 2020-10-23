/**
 * Массив с параметрами для создания строк
 * @type {Array}
 */
const rowParams = [
  {
    name: "atma",
    symbol: "АК",
    isActive: "",
  },
  {
    name: "dara",
    symbol: "ДК",
    isActive: "",
  },
  {
    name: "atmadara",
    symbol: "А|Д",
    isActive: "disabled",
  },
  {
    name: "daraatma",
    symbol: "Д|А",
    isActive: "disabled",
  },
  {
    name: "lagna",
    symbol: "Ⓛ",
    isActive: "disabled",
  },
  {
    name: "surya",
    symbol: "Ⓢ",
    isActive: "",
  },
  {
    name: "chandra",
    symbol: "Ⓒ",
    isActive: "",
  },
  {
    name: "mangala",
    symbol: "Ⓜ",
    isActive: "",
  },
  {
    name: "buddha",
    symbol: "Ⓑ",
    isActive: "",
  },
  {
    name: "guru",
    symbol: "Ⓖ",
    isActive: "",
  },
  {
    name: "zukra",
    symbol: "Ⓩ",
    isActive: "",
  },
  {
    name: "zani",
    symbol: "Ⓩ",
    isActive: "",
  },
  {
    name: "rahu",
    symbol: "Ⓡ",
    isActive: "",
  },
  {
    name: "ketu",
    symbol: "Ⓚ",
    isActive: "",
  },
];

/**
 * @property {Function} createRows - Создаёт строки
 * @param {Array<Object>} rowParams - Массив с параметрами строк
 * @return {String} Строка с вёрсткой строк
 */
function createRows(rowParams) {
  return rowParams
      .map((row) => {
        return `
          <div class="row row--${row.name}">
            <div class="row__item">
              <span class="row__house"></span>
              <span class="row__planet">${row.symbol}</span>
              <span class="row__house"></span>
            </div>
            <div class="row__item">
              <input class="row__input"
                data-chart="left"
                data-planet="${row.name}"
                type="text" list="nakshatrasList"
                ${row.isActive}>
              <input class="row__input"
                data-chart="right"
                data-planet="${row.name}"
                type="text" list="nakshatrasList"
                ${row.isActive}>
            </div>
            <div class="row__item">
              <span class="row__similarity"></span>
            </div>
            <div class="row__item row__item--distance">
              <div class="row__division">
                <span></span>:
                <span></span>
              </div>
              <div class="row__division">
                <span></span>:
                <span></span>
              </div>
              <div class="row__division">
                <span></span>:
                <span></span>
              </div>
            </div>
          </div>`;
      })
      .join(' ');
}

/**
 * @module components/table/createTable
 * @param {Object} $root - Dom instance div контейнера
 * @property {Function} createTable - Создаёт блок table
 * @return {*} Dom instance c таблицей по каждой планете
 */
export function createTable($root) {
  const content = createRows(rowParams);
  $root.setHTML(content);
  return $root;
}
