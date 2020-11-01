/**
 * Массив с параметрами для создания кнопок
 * @type {array}
 */
const buttons = [
  {
    "icon": 'aspect_ratio',
  },
  {
    "icon": 'straighten',
  },
  {
    "icon": 'brightness_7',
  },
  {
    "icon": 'help_outline',
  },
  {
    "icon": 'exit_to_app',
  },
];

/**
 * @property {function} createButton - Создаёт кнопки
 * @param {Array<Object>} buttons - Массив с параметрами кнопок
 * @return {string} Строка с кнопками
 */
function createButton(buttons) {
  return buttons
      .map((button) => {
        return `<button 
    class="button button--header material-icons">
    ${button.icon}
    </button>`;
      })
      .join(' ');
}

/**
 * @module components/zodiac_header/createZodiacHeader
 * @property {function} createZodiacHeader - Создаёт блок zodiacHeader
 * @param {object} $root - Dom instance div контейнера
 * @return {Element} Блок с кнопками
 */
export function createZodiacHeader($root) {
  const content = createButton(buttons);
  $root.setHTML(content);
  return $root;
}
