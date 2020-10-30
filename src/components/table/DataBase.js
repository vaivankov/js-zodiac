import {nakshatrasList, nakshatrasTable} from "../../constants";
import {chartState} from "../../defaultValues";
import {parseObject} from "../../utils/utils";

/**
 * Класс c данными программы
 * @module components/table/DataBase
 */
export class DataBase {
  constructor() {
    this.zodiacState = parseObject(chartState);
    this.nakshatrasList = parseObject(nakshatrasList);
    this.nakshatrasTable = parseObject(nakshatrasTable);
  }

  /**
   * @property {Function} onInput -
   * Callback function при смене данных input
   * @param {Object} node - Dom instance выбранного input
   * @return {void}
   */
  onInput(node) {
    const index = this.getNakshatraIndex(node.value);
    const data = node.dataset;
    const planet = this.zodiacState[data.position][data.planet];
    const lagna = this.zodiacState[data.position].lagna;
    if (index !== planet.index) {
      planet.index = index;
      planet.pada = index + 1;
      planet.nakshatra = Math.ceil((index + 1) / 4);
      planet.sign = Math.ceil((index + 1) / 9);

      if (lagna.sign > 0 && planet !== lagna) {
        planet.house =
          Math.max(
              planet.sign,
              lagna.sign
          ) -
          Math.min(
              planet.sign,
              lagna.sign
          ) + 1;
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
    const currentPlanetValues = this.zodiacState[data.position][data.planet];
    const defaultPlanetValues =
      parseObject(chartState[data.position][data.planet]);
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
}
