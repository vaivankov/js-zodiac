/**
 * @module utils/utils
 * @property {Function} capitalize - Достаёт вёрстку из $element
 * @param {String} string - Строка для преобразования
 * @return {String} Строка с заглавной буквой
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}

/**
 * @module utils/utils
 * @property {Function} getMethodName - Возвращает новое имя метода
 * @param {String} eventName - Название события
 * @return {String} Новое имя метода
 */
export function getMethodName(eventName) {
  return 'on' + capitalize(eventName);
}

/**
 * @module utils/utils
 * @property {Function} checkStorage - Проверяет данные в LocalStorage
 * @param {String} key - Ключ, по которому нужно произвести проверку
 * @param {Object} data - Объект с данными, которые нужно сохранить
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
