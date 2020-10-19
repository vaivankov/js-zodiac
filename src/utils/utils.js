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
