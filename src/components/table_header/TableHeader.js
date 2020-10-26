import {ChartComponent} from "../../core/ChartComponent";
import {$$} from "../../utils/Dom";
import {createTableHeader} from "./createTableHeader";

/**
 * Класс визуализации зодиака
 * * @module components/table_header/TableHeader
 */
export class TableHeader extends ChartComponent {
  /**
   *
   * @param {Object} $root - Корневой тег элемента
   * @param {Object} options - Параметры компонента
   */
  static className = ["block__header"];
  constructor($root, options) {
    super(
        $root,
        {
          name: "Table Header",
          listeners: ['click', 'change'],
          ...options,
        }
    );

    this.$root = createTableHeader($root);
  }

  /**
   * @property {Function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();
  }

  /**
   * @property {Function} onClick -
   * Закидывает в Emitter событие при нажатии на компонент
   * @param {Event} evt - Событие
   * @return {void}
   */
  onClick(evt) {
    this.$emit(
        'tableHeader: click',
        $$(evt.target)
    );
  }

  /**
   * @property {Function} onChange -
   * Закидывает в Emitter событие при смене значения поля
   * @param {Event} evt - Событие
   * @return {void}
   */
  onChange(evt) {
    this.$emit(
        'tableHeader: change',
        $$(evt.target)
    );
  }
}
