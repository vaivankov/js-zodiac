import {ChartComponent} from "../../core/ChartComponent";

/**
 * Класс таблицы с значениями
 * @module components/table/Table
 */
export class Table extends ChartComponent {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Object} options Параметры компонента
   */
  constructor($root, options) {
    super(
        $root,
        {
          name: 'Table',
          ...options,
        }
    );
  }
}
