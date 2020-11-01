import {ChartComponent} from "../../core/ChartComponent";
import {createZodiacHeader} from "./createZodiacHeader";

/**
 * Класс визуализации зодиака
 * @module components/zodiac_header/ZodiacHeader
 */
export class ZodiacHeader extends ChartComponent {
  /**
   *
   * @param {object} $root - Корневой тег элемента
   * @param {object} options - Параметры компонента
   */
  static className = ["block__header"];
  constructor($root, options) {
    super(
        $root,
        {
          name: "Zodiac Header",
          ...options,
        }
    );

    this.$root = createZodiacHeader($root);
  }

  /**
   * @property {function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();
  }
}
