/**
 *
 * @param {String|HTMLElement} selector - Имя селектора или нода
 * @return {Dom} Новый Dom instance
 */
export function $$(selector) {
  return new Dom(selector);
}

/**
 * @property {Function} create - Создаёт новый тег и
 * оборачивает его в Dom instance
 * @param {String} tagName - Название тега
 * @param {String|Array} className - Имя css-класса
 * @return {Dom} Новый Dom instance
 */
$$.create = (tagName, className = '') => {
  const el = document.createElement(tagName);

  if (Array.isArray(className)) {
    className.forEach((cl)=>{
      el.classList.add(cl);
    });
  } else if (typeof className === 'string') {
    el.classList.add(className);
  } else {
    throw new Error(`Creating Dom instance without css class name!`);
  }

  return $$(el);
};

/**
 * Служебный класс позволяющий удобно работать с nodes
 */
class Dom {
  /**
   *
   * @param {String|HTMLElement} selector - Имя селектора или нода
   */
  constructor(selector) {
    this.$element = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  /**
   * @property {Function} getHTML - Достаёт вёрстку из $element
   * @return {String} - Node
   */
  getHTML() {
    return this.$element.outerHTML.trim();
  }

  /**
   * @property {Function} setHTML - Меняет содержимое $element
   * @param {String|Dom} html - Контент
   * @return {Object} this
   */
  setHTML(html) {
    if (typeof html === 'string') {
      this.$element.innerHTML = html;
    } else if (html instanceof Dom) {
      this.$element.innerHTML = html.getHTML();
    }
    return this;
  }

  /**
   * @property {Function} append - Добавляет новый узел в $element
   * @param {Node|Dom} node - Контент
   * @return {Object} this
   */
  append(node) {
    if (node instanceof Dom) {
      node = node.$element;
    }

    if (Element.prototype.append) {
      this.$element.append(node);
    } else {
      this.$element.appendChild(node);
    }

    return this;
  }

  /**
   * @property {Function} addClasses - Добавляет css-классы к $element
   * @param {Array} className - Имя классов
   * @return {Object} this
   */
  addClasses(className) {
    if (Array.isArray(className)) {
      className.forEach((cl)=>{
        this.$element.classList.add(cl);
      });
    } else {
      this.$element.classList.add(className);
    }

    return this;
  }

  /**
   * @property {Function} removeClasses - Удаляет css-классы у $element
   * @param {Array} className - Имя классов
   * @return {Object} this
   */
  removeClasses(className) {
    if (className) {
      className.forEach((cl)=>{
        this.$element.classList.remove(cl);
      });
    }

    return this;
  }


  /**
   * @property {Function} on - Добавляет к $element событие
   * @param {Object} eventType - Название события
   * @param {Object} callback - Функция для выполнения при событии
   * @return {void}
   */
  on(eventType, callback) {
    this.$element.addEventListener(
        eventType,
        callback
    );
  }

  /**
   * @property {Function} off - Удаляет у $element событие
   * @param {Object} eventType - Название события
   * @param {Object} callback - Функция для выполнения при событии
   * @return {void}
   */
  off(eventType, callback) {
    this.$element.removeEventListener(
        eventType,
        callback
    );
  }
}

