import * as constants from "../../constants";
import * as defaultValues from "../../defaultValues";

/**
 * Класс c данными программы
 * @module components/table/DataBase
 */
export class DataBase {
  constructor() {
    this.chartState = this.parseObject(defaultValues.chartState);
    this.nakshatrasList = this.parseObject(constants.nakshatrasList);
    this.nakshatrasTable = this.parseObject(constants.nakshatrasTable);
  }

  /**
   * @property {Function} currentInput -
   * Setter данных текущего input
   * @param {Object} node - Dom instance выбранного input
   * @return {void}
   */
  set currentInput(node) {
    const index = this.getNakshatraIndex(node.value);
    const data = node.dataset;
    const planet = this.chartState[data.position][data.planet];
    if (index !== planet.index) {
      planet.node = node;
      planet.index = index;
      planet.pada = index + 1;
      planet.nakshatra = Math.ceil((index + 1) / 4);
      planet.sign = Math.ceil((index + 1) / 9);

      const lagna = this.chartState[data.position].lagna;

      if (lagna.sign > 0 && planet !== lagna) {
        planet.house =
          planet.sign > lagna.sign ?
            (planet.sign - lagna.sign) + 1 :
            (lagna.sign - planet.sign) + 1;
      }
    }
  }

  /**
   * @property {Function} cleanInputData -
   * Обнуляет значения выбранного input
   * @param {Object} node - Dom instance выбранного input
   * @return {void}
   */
  cleanInputData(node) {
    const data = node.dataset;
    const currentPlanetValues = this.chartState[data.position][data.planet];
    const defaultPlanetValues =
      this.parseObject(defaultValues.chartState[data.position][data.planet]);
    const entries = Object.entries(defaultPlanetValues);
    for (const [key, value] of entries) {
      currentPlanetValues[key] = value;
    }
  }

  /**
   * @property {Function} includes -
   * Проверяет наличие строки с списке накшатр
   * @param {String} str - Строка для проверки
   * @return {Boolean}
   */
  includes(str) {
    return this.nakshatrasList.includes(str);
  }

  /**
   * @property {Function} getNakshatraIndex -
   * Возвращает индекс накшатры с списке накшатр
   * @param {String} value - Строка для проверки
   * @return {Number}
   */
  getNakshatraIndex(value) {
    return this.nakshatrasList.indexOf(value);
  }

  /**
   * @property {Function} parseObject -
   * Преобразует объект в JSON и обратно
   * @param {Object} obj - объект для преобразования
   * @return {Object}
   */
  parseObject(obj) {
    const json = JSON.stringify(obj);
    return JSON.parse(json);
  }
}
