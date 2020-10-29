import {$$} from "../../utils/Dom";
import {ChartComponent} from "../../core/ChartComponent";
import {createTable} from "./createTable";
import {DataBase} from "./DataBase";
import * as utils from "../../utils/utils";
import * as defaultValues from "../../defaultValues";
import * as actions from "./../../store/actions";

/**
 * Класс таблицы с значениями
 * @module components/table/Table
 */
export class Table extends ChartComponent {
  /**
   *
   * @param {Object} $root - Корневой тег элемента
   * @param {Object} options - Параметры компонента
   */
  static className = ["block__body", "block__body--table"];
  constructor($root, options) {
    super(
        $root,
        {
          name: "Table",
          listeners: ["change"],
          ...options,
        }
    );

    this.$root = createTable($root);
    this.currentInput = null;
    this.oppositeInput = null;
    this.chartState = defaultValues.chartState;
    this.DataBase = new DataBase();
  }

  /**
   * @property {Function} init -
   * Инициализирует Emitter слушатели компонента
   * @return {void}
   */
  init() {
    super.init();

    this.$sub(
        "tableHeader: click",
        (node) => {
          if (node.elementDataAction) {
            try {
              this.manageStore(node);
            } catch (err) {
              console.warn(`There is no such chart in storage!`);
            }
          }
        }
    );

    this.$sub(
        "tableHeader: change",
        (node) => {
          try {
            this.loadChart(
                utils.getChartName(node.elementValue),
                node.elementDataPosition
            );
            node.removeClasses('block__input--error');
          } catch (err) {
            node.addClasses('block__input--error');
            console.warn(`There is no such chart in storage!`);
          }
        }
    );
  }

  /**
   * @property {Function} onChange -
   * Callback function при изменении значения input
   * @param {Object} evt - Событие
   * @return {void}
   */
  onChange(evt) {
    this.currentInput = $$(evt.target);
    this.oppositeInput = this.currentInput.getNextInput();

    if (!this.validateInput()) {
      return;
    }

    this.setInputState = this.selectedInputData;

    this.$dispatch(actions.inputData(this.selectedInputData));

    if (this.oppositeInput.elementValue !== "") {
      console.log(this.getNakshatrasRelation);
    }
  }

  /**
   * @property {Function} getNakshatrasRelation -
   * getter отношений двух планет
   * @return {*}
   */
  get getNakshatrasRelation() {
    return '';
  }

  /**
   * @property {Function} selectedInputData -
   * getter данных текущего input
   * @return {Object}
   */
  get selectedInputData() {
    const position = this.currentInput.elementDataChart;
    const planet = this.currentInput.elementDataPlanet;
    const index = this.nakshatrasList.indexOf(this.currentInput.elementValue);
    return {
      position,
      planet,
      index,
    };
  }

  /**
   * @property {Function} setInputState -
   * @param {Object} data - Данные выбранного input
   * setter данных текущего input
   * @return {void}
   */
  set setInputState(data) {
    const chart = data.position + "Chart";
    const newData = {};
    newData[data.planet] = data.index;
    this[chart] = {
      ...this[chart],
      ...newData,
    };
  }

  /**
   * @property {Function} validateInput -
   * Проверка валидности введённого значения в input
   * @return {Boolean}
   */
  validateInput() {
    let inputText = event.target.value === "" ?
      "empty" :
      event.target.value;
    inputText = this.nakshatrasList.includes(inputText) ?
      "includes" :
      inputText;
    switch (inputText) {
      case "empty":
        this.currentInput.removeClasses("row__input--error");
        return false;
      case "includes":
        this.currentInput.removeClasses("row__input--error");
        return true;
      default:
        this.currentInput.addClasses("row__input--error");
        return false;
    }
  }

  /**
   * @property {Function} pasteData -
   * Вставляет полученные данные в каждый input
   * @param {String} position - Положение карты
   * @param {Object} data - Объект с данными
   * @return {void}
   */
  pasteData(position, data) {
    const selector = `.row__input[data-chart="${position}"]:not([disabled])`;
    const inputs = document
        .querySelectorAll(selector);
    for (const inp of inputs) {
      const planet = inp.dataset.planet;
      const planetIndex = data[planet];
      if (planetIndex !== undefined) {
        inp.value = this.nakshatrasList[planetIndex];
      }
    }
  }

  /**
   * @property {Function} manageStore -
   * Обрабатывает события кнопок сохранения/загрузки карт
   * @param {Object} node - Нода кнопки
   * @return {void}
   */
  manageStore(node) {
    const position = node.elementDataPosition;
    const selector =
                  `.block__input[data-position="${position}"]`;
    const input = $$(document
        .querySelector(selector));
    const chart = this[position + "Chart"];
    const personName = utils.getChartName(input.elementValue);
    const action = node.elementDataAction;

    if (action === "save") {
      utils.checkStorage(
          personName,
          chart
      );
      input.removeClasses('block__input--error');
    }

    if (action === "open") {
      this.loadChart(
          personName,
          position
      );
    }
  }

  /**
   * @property {Function} loadChart -
   * Загружает карту из LocalStorage
   * @param {String} personName - Имя владельца карты
   * @param {Object} position - Позиция карты
   * @return {void}
   */
  loadChart(personName, position) {
    const store = utils.checkStorage(personName);
    this.pasteData(
        position,
        store
    );

    const chart = position + "Chart";
    this[chart] = store;
  }
}
