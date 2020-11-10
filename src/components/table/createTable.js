/**
 * Массив с параметрами для создания строк
 * @type {array}
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
    name: "lagna",
    symbol: "Ⓛ",
    isActive: "",
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
 * @property {function} createRows - Создаёт строки
 * @param {Array<Object>} rowParams - Массив с параметрами строк
 * @return {string} Строка с вёрсткой строк
 */
function createRows(rowParams) {
  return rowParams
      .map((row) => {
        return `
          <div class="row row--${row.name}">
            <div class="row__item">
              <span 
                class="row__house"
                data-position="left"
                ></span>
              <span class="row__planet" >${row.symbol}</span>
              <span 
                class="row__house"
                data-position="right"
                ></span>
            </div>
            <div class="row__item row__item--inputs">
              <input 
                class="row__input"
                data-position="left"
                data-planet="${row.name}"
                type="text" list="nakshatraList"
                ${row.isActive}>
              <input 
                class="row__input"
                data-position="right"
                data-planet="${row.name}"
                type="text" list="nakshatraList"
                ${row.isActive}>
            </div>
            <div class="row__item">
              <span class="row__similarity"></span>
            </div>
            <div class="row__item row__item--distance">
              <div class="row__division">
                <span 
                  class="row__division-sign"  
                  data-position="left"
                  ></span>:
                <span 
                  class="row__division-sign"  
                  data-position="right"
                  ></span>
              </div>
              <div class="row__division">
                <span 
                  class="row__division-nakshatra"  
                  data-position="left"
                  ></span>:
                <span 
                  class="row__division-nakshatra"  
                  data-position="right"
                  ></span>
              </div>
              <div class="row__division">
                <span 
                  class="row__division-pada"  
                  data-position="left"
                  ></span>:
                <span 
                  class="row__division-pada"  
                  data-position="right"
                  ></span>
              </div>
            </div>
          </div>`;
      })
      .join(' ');
}

/**
 * @module components/table/createTable
 * @param {object} $root - Dom instance div контейнера
 * @property {function} createTable - Создаёт блок table
 * @return {*} Dom instance c таблицей по каждой планете
 */
export function createTable($root) {
  const content = createRows(rowParams);
  $root.setHTML(content);
  return $root;
}
