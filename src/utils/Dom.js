/**
 *
 * @param {*} selector - Имя селектора или нода
 * @return {Dom} Новый Dom instance
 */
export function $$(selector) {
  return new Dom(selector);
}

/**
 * @property {function} create - Создаёт новый тег и
 * оборачивает его в Dom instance
 * @param {string} tagName - Название тега
 * @param {String|Array} className - Имя css-класса
 * @return {Dom} Новый Dom instance
 */
$$.create = (tagName, className) => {
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
   * @param {String|HTMLElement} selector - Имя селектора или node
   */
  constructor(selector) {
    this.$element = typeof selector === 'string' ?
      document.querySelector(selector) :
      selector;
  }

  /**
   * @property {function} getHTML - Достаёт вёрстку из $element
   * @return {string} - Node
   */
  getHTML() {
    return this.$element.outerHTML.trim();
  }

  /**
   * @property {function} setHTML - Меняет содержимое $element
   * @param {String|Dom} html - Контент
   * @return {object} this
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
   * @property {function} append - Добавляет новый узел в $element
   * @param {Node|Dom} node - Контент
   * @return {object} this
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
   * @property {function} addClasses - Добавляет css-классы к $element
   * @param {Array|String} name - Название класса
   * @return {object} this
   */
  addClasses(name) {
    if (Array.isArray(name)) {
      name.forEach((cl)=>{
        this.$element.classList.add(cl);
      });
    } else {
      this.$element.classList.add(name);
    }

    return this;
  }

  /**
   * @property {function} removeClasses - Удаляет css-классы у $element
   * @param {Array|String} name - Название класса
   * @return {object} this
   */
  removeClasses(name) {
    if (Array.isArray(name)) {
      name.forEach((cl) => {
        this.$element.classList.remove(cl);
      });
    } else {
      this.$element.classList.remove(name);
    }

    return this;
  }

  /**
   * @property {function} removeClasses - Удаляет css-классы у $element
   * @param {string} name - Название класса
   * @return {Boolean}
   */
  containsClass(name) {
    return this.$element.classList.contains(name);
  }

  /**
   * @property {function} on - Добавляет к $element событие
   * @param {object} eventType - Название события
   * @param {object} callback - Функция для выполнения при событии
   * @return {void}
   */
  on(eventType, callback) {
    this.$element.addEventListener(
        eventType,
        callback
    );
  }

  /**
   * @property {function} off - Удаляет у $element событие
   * @param {object} eventType - Название события
   * @param {object} callback - Функция для выполнения при событии
   * @return {void}
   */
  off(eventType, callback) {
    this.$element.removeEventListener(
        eventType,
        callback
    );
  }

  /**
   * @property {function} value -
   * Getter значения элемента
   * @return {*}
   */
  get value() {
    return this.$element.value;
  }

  /**
   * @property {function} value -
   * Setter значения элемента
   * @param {*} data - значение элемента
   * @return {void}
   */
  set value(data) {
    this.$element.value = data;
  }

  get dataset() {
    const dataset = JSON.stringify(this.$element.dataset);
    return JSON.parse(dataset);
  }
}

