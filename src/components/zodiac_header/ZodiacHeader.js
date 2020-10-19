import {ChartComponent} from "../../core/ChartComponent";
import {createZodiacHeader} from "./createZodiacHeader";

/**
 * Класс визуализации зодиака
 * @module components/zodiac_header/ZodiacHeader
 */
export class ZodiacHeader extends ChartComponent {
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
          ...options,
        }
    );

    this.$root = createZodiacHeader($root);
  }
}
