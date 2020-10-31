import {$$} from "../../utils/Dom";
import {ChartComponent} from "../../core/ChartComponent";
import {createTable} from "./createTable";
import * as utils from "../../utils/utils";

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
          listeners: ["change", "mousedown"],
          ...options,
        }
    );

    this.$root = createTable($root);
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
          if (node.dataset.action) {
            try {
              this.manageStore(node);
            } catch (err) {
              console.warn(`There is no such chart in storage!`);
            }
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
    const node = $$(evt.target);

    if (!this.validateInput(node)) {
      return;
    }

    this.DataBase.onInput(node);
  }

  /**
   * @property {Function} onMouseDown -
   * Callback function при нажатии на input
   * @param {Object} evt - Событие
   * @return {void}
   */
  onMousedown(evt) {
    const node = $$(evt.target);

    node.removeClasses('row__input--error');

    if (node.containsClass('row__input') && node.value !== "") {
      node.value = "";
      this.DataBase.cleanInputData(node);
    }
  }

  /**
   * @property {Function} validateInput -
   * Проверка валидности введённого значения в input
   * @param {Object} node -
   * Dom-instance input в котором изменилось значение
   * @return {Boolean}
   */
  validateInput(node) {
    let inputText = node.value === "" ?
      "empty" :
      node.value;
    inputText = this.DataBase.includes(inputText) ?
      "includes" :
      inputText;
    switch (inputText) {
      case "empty":
        node.removeClasses("row__input--error");
        return false;
      case "includes":
        node.removeClasses("row__input--error");
        return true;
      default:
        node.addClasses("row__input--error");
        return false;
    }
  }

  /**
   * @property {Function} pasteData -
   * Вставляет полученные данные в каждый input
   * @param {String} position - Положение карты
   * @param {Object} store - Объект с данными
   * @return {void}
   */
  pasteData(position, store) {
    const selector = `.row__input[data-position="${position}"]:not([disabled])`;
    const inputs = document
        .querySelectorAll(selector);
    for (const inp of inputs) {
      const planet = inp.dataset.planet;
      const planetIndex = store[planet].index;
      if (planetIndex > -1) {
        inp.value = this.DataBase.getNakshatraByIndex(planetIndex);
      }
    }
  }

  /**
   * @property {Function} manageStore -
   * Обрабатывает события кнопок сохранения/загрузки карт
   * @param {Object} node - Dom instance кнопки
   * @return {void}
   */
  manageStore(node) {
    const data = node.dataset;
    const selector =
                  `.block__input[data-position="${data.position}"]`;
    const input = $$(document
        .querySelector(selector));
    const chart = this.DataBase.getChartState(data.position);
    const personName = utils.getChartName(input.value);

    if (data.action === "save") {
      utils.checkStorage(
          personName,
          chart
      );
      input.removeClasses('block__input--error');
    }

    if (data.action === "open") {
      this.loadChart(
          personName,
          data.position,
          input
      );
    }
  }

  /**
   * @property {Function} loadChart -
   * Загружает карту из LocalStorage
   * @param {String} personName - Имя владельца карты
   * @param {Object} position - Позиция карты
   * @param {Object} input - Поле ввода имени
   * @return {void}
   */
  loadChart(personName, position, input) {
    const store = utils.checkStorage(personName);
    store ?
      this.pasteData(
          position,
          store
      ) :
      input.addClasses('block__input--error');
  }
}
