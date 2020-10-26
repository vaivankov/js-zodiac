/**
 * Массив с параметрами для создания кнопок
 * @type {Array}
 */
const blocks = [
  {
    "position": "left",
    "button_classes": ["button", "button--header", "material-icons"],
    "icon_open": 'folder_open',
    "icon_save": 'save',
  },
  {
    "position": "right",
    "button_classes": ["button", "button--header", "material-icons"],
    "icon_open": 'folder_open',
    "icon_save": 'save',
  },
];

/**
 * @property {Function} createButton - Создаёт кнопки
 * @param {Array<Object>} blocks - Массив с параметрами блока
 * @return {String} Строка с кнопками
 */
function createButton(blocks) {
  return blocks
      .map((block) => {
        return `<div class="block__controls">
            <button 
              class="${block.button_classes.join(' ')}"
              data-position="${block.position}"
              data-action="open"
              type="button"
              >
              ${block.icon_open}
            </button>
            <input 
              class="block__input" 
              data-position="${block.position}"
              list="chartList"
              type="text">
            <button 
              class="${block.button_classes.join(' ')}"
              data-position="${block.position}"
              data-action="save"
              type="button"
              >
              ${block.icon_save}
            </button>
          </div>`;
      })
      .join(' ');
}

/**
 * @module components/table_header/createTableHeader
 * @property {Function} createTableHeader - Создаёт блок tableHeader
 * @param {Object} $root - Dom instance div контейнера
 * @return {Element} Блок с кнопками
 */
export function createTableHeader($root) {
  const content = createButton(blocks);
  $root.setHTML(content);
  return $root;
}
