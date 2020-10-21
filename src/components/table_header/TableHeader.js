import {ChartComponent} from "../../core/ChartComponent";
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
}
