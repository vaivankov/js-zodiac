import {$$} from "../../utils/Dom";
import {ChartComponent} from "../../core/ChartComponent";
import {createTable} from "./createTable";
import {createDemoCharts} from "../../store/createDemoCharts";
import * as utils from "../../utils/utils";

/**
 * Класс таблицы с значениями
 * @module components/table/Table
 */
export class Table extends ChartComponent {
  /**
   *
   * @param {object} $root - Корневой тег элемента
   * @param {object} options - Параметры компонента
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
   * @property {function} prepare -
   * Предварительная подготовка компонента
   * @return {void}
   */
  prepare() {
    this.inputs = this.$root.$element.querySelectorAll('.row__item--inputs');
    this.database.setNodeTree();
    createDemoCharts();
  }

  /**
   * @property {function} init -
   * Инициализирует Emitter слушатели компонента
   * @return {void}
   */
  init() {
    super.init();

    this.$sub(
        "tableHeader:click",
        (node) => {
          if (node.dataset.action) {
            this.manageStore(node);
          }
        }
    );

    this.$sub(
        "zodiacHeader:ratio",
        () => {
          this.resizeTable();
        }
    );
  }

  /**
   * @property {function} onChange -
   * Callback function при изменении значения input
   * @param {object} evt - Событие
   * @return {void}
   */
  onChange(evt) {
    const node = $$(evt.target);

    if (!this.validateInput(node)) {
      return;
    }

    this.database.pasteData(node);
  }

  /**
   * @property {function} onMouseDown -
   * Callback function при нажатии на input
   * @param {object} evt - Событие
   * @return {void}
   */
  onMousedown(evt) {
    const node = $$(evt.target);

    node.classes(
        'remove',
        'row__input--error'
    );

    if (node.containsClass('row__input') && node.value !== "") {
      node.value = "";
      this.database.cleanInputData(node);
    }
  }

  /**
   * @property {function} validateInput -
   * Проверка валидности введённого значения в input
   * @param {object} node -
   * Dom-instance input в котором изменилось значение
   * @return {Boolean}
   */
  validateInput(node) {
    let inputText = node.value === "" ?
      "empty" :
      node.value;
    inputText = this.database.includes(inputText) ?
      "includes" :
      inputText;
    switch (inputText) {
      case "empty":
        node.classes(
            "remove",
            "row__input--error"
        );
        return false;
      case "includes":
        node.classes(
            "remove",
            "row__input--error"
        );
        return true;
      default:
        node.classes(
            "add",
            "row__input--error"
        );
        return false;
    }
  }

  /**
   * @property {function} pasteData -
   * Вставляет полученные данные в каждый input
   * @param {object} store - Объект с данными
   * @param {array} inputs - Массив inputs
   * @return {void}
   */
  pasteData(store, inputs) {
    for (const inp of inputs) {
      const planet = inp.dataset.planet;
      const planetIndex = store[planet].index;
      if (planetIndex > -1) {
        inp.value = this.database.getNakshatraByIndex(planetIndex);
      }
    }
  }

  /**
   * @property {function} manageStore -
   * Обрабатывает события кнопок сохранения/загрузки карт
   * @param {object} node - Dom instance кнопки
   * @return {void}
   */
  manageStore(node) {
    const data = node.dataset;
    const selector =
                  `.block__input[data-position="${data.position}"]`;
    const input = $$(document
        .querySelector(selector));
    const chart = this.database.getChartState(data.position);
    const personName = utils.getChartName(input.value);

    if (data.action === "save") {
      utils.checkStorage(
          personName,
          chart
      );
      input.classes(
          "remove",
          'block__input--error'
      );
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
   * @property {function} loadChart -
   * Загружает карту из LocalStorage
   * @param {string} personName - Имя владельца карты
   * @param {object} position - Позиция карты
   * @param {object} input - Поле ввода имени
   * @return {void}
   */
  loadChart(personName, position, input) {
    const store = utils.checkStorage(personName);
    if (store) {
      const selector =
        `.row__input[data-position="${position}"]:not([disabled])`;
      const inputs = Array
          .from(document.querySelectorAll(selector))
          .sort((i)=>i.dataset.planet === "lagna" ? -1 : 1);

      this.pasteData(
          store,
          inputs
      );

      this.database.pasteData(inputs);
    } else {
      input.classes(
          "add",
          'block__input--error'
      );
    }
  }

  /**
   * @property {function} resizeTable -
   * Прячет поля ввода
   * @return {void}
   */
  resizeTable() {
    this.inputs.forEach((i) => i.classList.toggle('visually-hidden'));
  }
}
