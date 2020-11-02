import {
  divisionLengthsArray,
  divisionsArray,
  nakshatrasList,
  nakshatrasTable,
  positionsArray,
} from "../../constants";
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

      for (const position of positionsArray) {
        this.tableNodeTree[position][planet].input =
          row.querySelector(`.row__input[data-position="${position}"]`);
        this.tableNodeTree[position][planet].house =
          row.querySelector(`.row__house[data-position="${position}"]`);

        for (const division of divisionsArray) {
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
   * @param {object} nodes - Dom instance выбранного input
   * @return {void}
   */
  pasteData(nodes) {
    Array.isArray(nodes) ? true : nodes = [nodes];

    for (const node of nodes) {
      const index = this.getNakshatraIndex(node.value);
      const currentData = node.dataset;
      const oppositePosition = currentData.position === "left" ? "right" : "left";
      const oppositePlanet = this.zodiacState[oppositePosition][currentData.planet];
      const currentPlanet = this.zodiacState[currentData.position][currentData.planet];
      const currentLagna = this.zodiacState[currentData.position].lagna;

      if (index !== currentPlanet.index) {
        currentPlanet.index = index;
        currentPlanet.pada = index + 1;
        currentPlanet.nakshatra = Math.ceil((index + 1) / 4);
        currentPlanet.sign = Math.ceil((index + 1) / 9);

        if (currentLagna.sign > 0 && currentPlanet !== currentLagna) {
          const house = currentPlanet.sign - currentLagna.sign + 1;
          currentPlanet.house = house >= 1 ? house : house + 12;
        }

        this.tableNodeTree[currentData.position][currentData.planet]
            .house.textContent = currentPlanet.house;

        if (oppositePlanet.index > -1) {
          this.tableNodeTree.both[currentData.planet]
              .relations.textContent =
            this.nakshatrasTable[index][oppositePlanet.index];

          this.zodiacState.both[currentData.planet].relations =
            this.nakshatrasTable[index][oppositePlanet.index];

          this.pasteDistance(currentData.planet);
        }
      }
    }
  }

  /**
   * @property {function} pasteDistance -
   * Расчёт расстояний между inputs
   * @param {string} planet - Название планеты
   * @return {void}
   */
  pasteDistance(planet) {
    for (const [div, den] of divisionLengthsArray) {
      let left2right =
        this.zodiacState.left[planet][div] -
        this.zodiacState.right[planet][div] + 1;
      left2right > 0 ? true : left2right = left2right + den;

      let right2left =
        this.zodiacState.right[planet][div] -
        this.zodiacState.left[planet][div] + 1;
      right2left > 0 ? true : right2left = right2left + den;


      for (const position of positionsArray) {
        this.tableNodeTree.both[planet]
            .distance[div][position].textContent =
          position === "right" ? left2right : right2left;

        this.zodiacState.both[planet].distance[div][position] =
            position === "right" ? left2right : right2left;
      }
    }
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
