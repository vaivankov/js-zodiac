import {nakshatrasList, nakshatrasTable} from "../../constants";
import {chartState, tableNodeTree} from "../../defaultValues";
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
    this.tableNodeTree = parseObject(tableNodeTree);
  }

  /**
   * @property {function} setNodeTree -
   * Создаёт дерево node
   * @return {void}
   */
  setNodeTree() {
    const planetNames = Object.keys(this.tableNodeTree.both);

    for (const planet of planetNames) {
      const row = document.querySelector(`.row--${planet}`);

      this.tableNodeTree.both[planet].relations =
          row.querySelector(`.row__similarity`);

      for (const position of ['left', 'right']) {
        this.tableNodeTree[position][planet].input =
          row.querySelector(`.row__input[data-position="${position}"]`);
        this.tableNodeTree[position][planet].house =
          row.querySelector(`.row__house[data-position="${position}"]`);

        for (const division of ['sign', 'nakshatra', 'pada']) {
          this.tableNodeTree.both[planet].distance[division][position] =
            row.querySelector(`
              .row__division-${division}[data-position="${position}"]
            `);
        }
      }
    }
  }

  /**
   * @property {function} pasteData -
   * Расчёт данных выбранного input
   * @param {object} node - Dom instance выбранного input
   * @return {void}
   */
  pasteData(node) {
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

    this.tableNodeTree[data.position][data.planet]
        .house.textContent = planet.house;
  }

  /**
   * @property {function} cleanInputData -
   * Обнуляет значения выбранного input
   * @param {object} node - Dom instance выбранного input
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
   * @property {function} includes -
   * Проверяет наличие строки с списке накшатр
   * @param {string} str - Строка для проверки
   * @return {Boolean}
   */
  includes(str) {
    return this.nakshatrasList.includes(str);
  }

  /**
   * @property {function} getNakshatraIndex -
   * Возвращает индекс накшатры с списке накшатр
   * @param {string} value - Строка для проверки
   * @return {Number}
   */
  getNakshatraIndex(value) {
    return this.nakshatrasList.indexOf(value);
  }

  /**
   * @property {function} getNakshatraByIndex -
   * Возвращает индекс накшатры с списке накшатр
   * @param {Number} num - Порядковый номер накшатры
   * @return {string}
   */
  getNakshatraByIndex(num) {
    return this.nakshatrasList[num];
  }

  /**
   * @property {function} state -
   * Возвращает состояние
   * @return {object}
   */
  get state() {
    return parseObject(this.zodiacState);
  }

  /**
   * @property {function} state -
   * Возвращает состояние выбранной карты
   * @param {string} position - Положение в программе
   * @return {string} JSON
   */
  getChartState(position) {
    return parseObject(this.zodiacState[position]);
  }
}
