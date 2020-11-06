/**
 * Массив с параметрами для создания кнопок
 * @type {array}
 */
const buttons = [
  {
    "icon": 'aspect_ratio',
    "action": 'ratio',
  },
  {
    "icon": 'help_outline',
    "action": 'help',
  },
  {
    "icon": 'exit_to_app',
    "action": 'exit',
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
    class="button button--header material-icons"
    data-action="${button.action}"
    >
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
