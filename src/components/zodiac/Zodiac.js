import {ChartComponent} from "../../core/ChartComponent";
import {createZodiac} from "./createZodiac";

/**
 * Класс визуализации зодиака
 * * @module components/zodiac/Zodiac
 */
export class Zodiac extends ChartComponent {
  /**
   *
   * @param {Object} $root - Корневой тег элемента
   * @param {Object} options - Параметры компонента
   */
  static className = ["block__body"];
  constructor($root, options) {
    super(
        $root,
        {
          name: "Zodiac",
          ...options,
        }
    );

    this.$root = createZodiac($root);
  }

  /**
   * @property {Function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();
  }
}
