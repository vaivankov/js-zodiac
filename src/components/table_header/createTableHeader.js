/**
 * Массив с параметрами для создания кнопок
 * @type {Array}
 */
const buttons = [
  {
    "classes": ["button", "button--header", "material-icons"],
    "icon": 'filter_1',
  },
  {
    "classes": ["button", "button--header", "material-icons"],
    "icon": 'filter_2',
  },
];

/**
 * @property {Function} createButton - Создаёт кнопки
 * @param {Array<Object>} buttons - Массив с параметрами кнопок
 * @return {String} Строка с кнопками
 */
function createButton(buttons) {
  return buttons
      .map((button) => {
        return `<button 
            class="${button.classes.join(' ')}">
            ${button.icon}
            </button>`;
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
  const content = createButton(buttons);
  $root.setHTML(content);
  return $root;
}
