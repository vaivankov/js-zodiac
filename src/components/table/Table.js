import {ChartComponent} from "../../core/ChartComponent";
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
          ...options,
        }
    );

    this.$root = createTable($root);
  }
}
