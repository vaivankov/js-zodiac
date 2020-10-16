/**
 * Объект с параметрами для создания кнопок
 * @type {Array}
 */
const buttons = [
  {
    "classes": ["button", "button--header", "material-icons"],
    "icon": 'help_outline',
  },
  {
    "classes": ["button", "button--header", "material-icons"],
    "icon": 'aspect_ratio',
  },
  {
    "classes": ["button", "button--header", "material-icons"],
    "icon": 'straighten',
  },
];

/**
 * @property {Function} createButton Создаёт кнопки
 * @param {Array<Object>} buttons Массив с параметрами кнопок
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
 * @module components/table_header/createZodiacHeader
 * @property {Function} createZodiacHeader Создаёт блок zodiacHeader
 * @return {HTMLDivElement} Блок с кнопками
 */
export function createZodiacHeader() {
  const content = createButton(buttons);
  const container = document.createElement('div');

  container.classList.add('block__header');
  container.innerHTML = content;

  return container;
}
