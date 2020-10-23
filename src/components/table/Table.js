import {nakshatrasList} from "../../constants";
import {ChartComponent} from "../../core/ChartComponent";
import {$$} from "../../utils/Dom";
import {createTable} from "./createTable";

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
          listeners: ['change'],
          ...options,
        }
    );

    this.$root = createTable($root);
    this.nakshatrasList = nakshatrasList;
    this.currentInput = null;
  }

  /**
   * @property {Function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();
  }

  /**
   * @property {Function} onChange -
   * Callback function при изменении значения input
   * @param {Object} evt - Событие
   * @return {void}
   */
  onChange(evt) {
    this.currentInput = $$(evt.target);

    if (!this.validateInput()) {
      return;
    }

    this.setInputState();
  }

  /**
   * @property {Function} selectedInputData -
   * getter данных текущего input
   * @return {Object}
   */
  get selectedInputData() {
    const chart = this.currentInput.elementDataChart;
    const planet = this.currentInput.elementDataPlanet;
    const index = this.nakshatrasList.indexOf(this.currentInput.elementValue);
    return {
      name: `${planet + '-' + chart}`,
      data: {
        chart,
        planet,
        index,
      },
    };
  }

  /**
   * @property {Function} validateInput -
   * Проверка валидности введённого значения в input
   * @return {Boolean}
   */
  validateInput() {
    let inputText = event.target.value === "" ?
      'empty' :
      event.target.value;
    inputText = this.nakshatrasList.includes(inputText) ?
      'includes' :
      inputText;
    switch (inputText) {
      case "empty":
        this.currentInput.removeClasses('row__input--error');
        return false;
      case "includes":
        this.currentInput.removeClasses('row__input--error');
        return true;
      default:
        this.currentInput.addClasses('row__input--error');
        return false;
    }
  }

  setInputState() {
    const inputData = this.selectedInputData;
    console.log(inputData);
  }
}
