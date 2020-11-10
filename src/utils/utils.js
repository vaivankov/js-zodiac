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
 * @property {function} getChartId -
 * Возвращает название карты c приставкой
 * @param {string} name - Название карты
 * @return {string} "chart:" + Id
 */
export function getChartId(name) {
  const keys = Object.keys(localStorage);
  let id = undefined;
  label: for (const key of keys) {
    if (key.match(/^chart:/)) {
      const chart = JSON.parse(localStorage[key]);
      if (chart.name === name) {
        id = chart.id;
        break label;
      }
    }
  }
  return id ? 'chart:' + id : id;
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
 * @property {function} getSavedChartsNames -
 * Создаёт список опций сохранённых карт
 * @return {string} keysList - Вёрстка опций
 */
export function getSavedChartsNames() {
  const keys = Object.keys(localStorage);
  const keysList = keys
      .map((chartName) => {
        if (chartName.match(/^chart:/)) {
          const chart = JSON.parse(localStorage[chartName]);
          return `<option>${chart.name}</option>`;
        }
      })
      .join('');
  return keysList;
}

/**
 * @module utils/utils
 * @property {function} isLocalStorageEmpty -
 * Проверяет пустой ли LocalStorage
 * @return {Boolean}
 */
export function isLocalStorageEmpty() {
  const keys = Object.keys(localStorage);
  let keysList = true;
  label: for (const chartName of keys) {
    if (chartName.match(/^chart:/)) {
      keysList = false;
      break label;
    }
  }
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

/**
 * @module utils/utils
 * @property {function} debounce -
 * Создаёт задержку на выполнение функции
 * @param {function} func - Функция
 * @param {number} wait -
 * Время задержки
 * @return {*}
 */
export function debounce(func, wait) {
  let timeout;
  return function(...args) {
    const callback = () => {
      clearTimeout(timeout);
      // eslint-disable-next-line
      func.apply(this, args)
    };
    clearTimeout(timeout);
    timeout = setTimeout(
        callback,
        wait
    );
  };
}
