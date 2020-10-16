import {ChartComponent} from "../../core/ChartComponent";
import {createZodiac} from "./createZodiac";

/**
 * Класс визуализации зодиака
 * * @module components/zodiac/Zodiac
 */
export class Zodiac extends ChartComponent {
  /**
   *
   * @param {Object} $root Корневой тег элемента
   * @param {Object} options Параметры компонента
   */
  constructor($root, options) {
    super(
        $root,
        {
          name: 'Zodiac',
          ...options,
        }
    );
  }

  get template() {
    return createZodiac();
  }
}
