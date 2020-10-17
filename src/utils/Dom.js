/**
 * Служебный класс позволяющий удобно работать с nodes
 */
class Dom {
  /**
   *
   * @param {String|HTMLElement} selector Имя селектора или нода
   */
  constructor(selector) {
    this.$element = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  /**
   * @property {Function} getHTML Достаёт вёрстку из $element
   * @return {String} Node
   */
  getHTML() {
    return this.$element.outerHTML.trim();
  }

  /**
   * @property {Function} setHTML Меняет содержимое $element
   * @param {*} html Контент
   * @return {Object} this
   */
  setHTML(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html;
      return this;
    }
  }

  /**
   * @property {Function} addClasses Добавляет css-классы к $element
   * @param {Array} className Имя классов
   * @return {Object} this
   */
  addClasses(...className) {
    className.forEach((cl)=>{
      this.$element.classList.add(cl);
    });

    return this;
  }

  /**
   * @property {Function} removeClasses Удаляет css-классы у $element
   * @param {Array} className Имя классов
   * @return {Object} this
   */
  removeClasses(...className) {
    className.forEach((cl)=>{
      this.$element.classList.remove(cl);
    });

    return this;
  }
}

/**
 *
 * @param {String|HTMLElement} selector Имя селектора или нода
 * @return {Dom} Новый Dom instance
 */
export function $$(selector) {
  return new Dom(selector);
}

/**
 * @property {Function} create Создаёт новый тег и
 * оборачивает его в Dom instance
 * @param {String} tagName Название тега
 * @param {String} className Имя css-класса
 * @return {Dom} Новый Dom instance
 */
$$.create = (tagName, className = '') => {
  const el = document.createElement(tagName);

  if (className) {
    el.classList.add(className);
  }

  return $$(el);
};
