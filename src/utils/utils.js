/**
 * @property {Function} capitalize - Достаёт вёрстку из $element
 * @param {String} string - Строка для преобразования
 * @return {String} Node
 */
export function capitalize(string) {
  if (typeof string !== 'string') {
    return '';
  }
  return string.charAt(0).toLocaleUpperCase() + string.slice(1);
}
