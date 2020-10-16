import {ChartComponent} from "../../core/ChartComponent";

/**
 * Класс визуализации зодиака
 * @module components/zodiac_header/ZodiacHeader
 */
export class ZodiacHeader extends ChartComponent {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Object} options Параметры компонента
   */
  constructor($root, options) {
    super(
        $root,
        {
          name: 'Zodiac Header',
          ...options,
        }
    );
  }
}
