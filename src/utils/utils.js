/**
 * @module utils/utils
 * @property {function} capitalize - Достаёт вёрстку из $element
 * @param {string} string - Строка для преобразования
 * @return {string} Строка с заглавной буквой
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

/**
 * @module utils/utils
 * @property {function} getMethodName - Возвращает новое имя метода
 * @param {string} eventName - Название события
 * @return {string} Новое имя метода
 */
export function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

/**
 * @module utils/utils
 * @property {function} getChartName -
 * Возвращает название карты c приставкой
 * @param {string} name - Название карты
 * @return {string} "chart-" + name
 */
export function getChartName(name) {
  return 'chart-' + name;
}

/**
 * @module utils/utils
 * @property {function} checkStorage - Проверяет данные в LocalStorage
 * @param {string} key - Ключ, по которому нужно произвести проверку
 * @param {object} data - Объект с данными, которые нужно сохранить
 * @return {Object|void} Объект с данными конкретного человека
 */
export function checkStorage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key));
  }
  localStorage.setItem(
      key,
      JSON.stringify(data)
  );
}

/**
 * @module utils/utils
 * @property {function} getSavedChartNames -
 * Создаёт список опций сохранённых карт
 * @return {string} keysList - Вёрстка опций
 */
export function getSavedChartNames() {
  const keys = Object.keys(localStorage);
  const keysList = keys
      .map((chartName) => {
        if (chartName.match(/^chart-/)) {
          const newName = chartName.split('chart-')[1];
          return `<option>${newName}</option>`;
        }
      })
      .join('');
  return keysList;
}

/**
 * @module utils/utils
 * @property {function} parseObject -
 * Преобразует объект в JSON и обратно
 * @param {object} obj - объект для преобразования
 * @return {object}
 */
export function parseObject(obj) {
  const json = JSON.stringify(obj);
  return JSON.parse(json);
}
