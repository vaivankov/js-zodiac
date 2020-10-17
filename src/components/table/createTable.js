import {$$} from "../../utils/Dom";

/**
 * Массив с параметрами для создания строк
 * @type {Array}
 */
const rowParams = [
  {
    name: "row--atma",
    symbol: "АК",
    isActive: true,
  },
  {
    name: "row--dara",
    symbol: "ДК",
    isActive: true,
  },
  {
    name: "row--atmadara",
    symbol: "А|Д",
    isActive: false,
  },
  {
    name: "row--daraatma",
    symbol: "Д|А",
    isActive: false,
  },
  {
    name: "row--lagna",
    symbol: "Ⓛ",
    isActive: false,
  },
  {
    name: "row--surya",
    symbol: "Ⓢ",
    isActive: true,
  },
  {
    name: "row--chandra",
    symbol: "Ⓒ",
    isActive: true,
  },
  {
    name: "row--mangala",
    symbol: "Ⓜ",
    isActive: true,
  },
  {
    name: "row--buddha",
    symbol: "Ⓑ",
    isActive: true,
  },
  {
    name: "row--guru",
    symbol: "Ⓖ",
    isActive: true,
  },
  {
    name: "row--zukra",
    symbol: "Ⓩ",
    isActive: true,
  },
  {
    name: "row--zani",
    symbol: "Ⓩ",
    isActive: true,
  },
  {
    name: "row--rahu",
    symbol: "Ⓡ",
    isActive: true,
  },
  {
    name: "row--ketu",
    symbol: "Ⓚ",
    isActive: true,
  },
];

/**
 * @property {Function} createRows Создаёт строки
 * @param {Array<Object>} rowParams Массив с параметрами строк
 * @return {String} Строка с вёрсткой строк
 */
function createRows(rowParams) {
  return rowParams
      .map((row) => {
        return `
          <div class="row ${row.name}">
            <div class="row__item">
              <span class="row__house"></span>
              <span class="row__planet">${row.symbol}</span>
              <span class="row__house"></span>
            </div>
            <div class="row__item">
              <input class="row__input"
                placeholder="накшатра"
                ${row.isActive ? "" : "disabled"}>
              <input
                class="row__input"
                placeholder="накшатра"
                ${row.isActive ? "" : "disabled"}>
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
 * @property {Function} createTable Создаёт блок table
 * @return {Element} Таблица по каждой планете
 */
export function createTable() {
  const content = createRows(rowParams);
  const container = $$.create('div');

  container.addClasses(
      'block__body',
      'block__body--table'
  );
  container.setHTML(content);

  return container.$element;
}
