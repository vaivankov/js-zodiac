import {$$} from "../../utils/Dom";
import {nakshatrasList} from "../../constants";
import {ChartComponent} from "../../core/ChartComponent";
import {createTable} from "./createTable";
import * as actions from "./../../store/actions";
import {checkStorage} from "../../utils/utils";

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
    this.leftChart = null;
    this.rightChart = null;
  }

  /**
   * @property {Function} init -
   * Инициализирует Emitter слушатели компонента
   * @return {void}
   */
  init() {
    super.init();

    this.$sub(
        'tableHeader: click',
        (node) => {
          if (node.dataset.action) {
            const position = node.dataset.position;
            const selector =
                `.block__input[data-position="${position}"]`;
            const input = document
                .querySelector(selector);
            const chart = this[position + 'Chart'];
            node.dataset.action === 'save' ?
              checkStorage(
                  input.value,
                  chart
              ) :
              checkStorage(input.value);
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

    if (!this.validateInput()) {
      return;
    }

    this.setInputState = this.selectedInputData;

    this.$dispatch(actions.inputData(this.selectedInputData));
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
    const chart = data.position + 'Chart';
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
}
