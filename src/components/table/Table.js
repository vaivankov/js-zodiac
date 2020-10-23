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

    this.validateInput();
  }

  /**
   * @property {Function} validateInput -
   * Проверка валидности введённого значения в input
   * @return {void}
   */
  validateInput() {
    !this.nakshatrasList.includes(event.target.value) ?
      this.currentInput.addClasses('row__input--error') :
      this.currentInput.removeClasses('row__input--error');
  }
}
