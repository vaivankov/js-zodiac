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
          listeners: ['click'],
          ...options,
        }
    );

    this.$root = createZodiacHeader($root);
  }

  /**
   * @property {function} onClick -
   * Закидывает в emitter событие
   * @param {event} evt Событие
   * @return {void}
   */
  onClick(evt) {
    if (evt.target.dataset.action === 'exit') {
      window.location.hash = "dashboard";
      return;
    }

    if (evt.target.dataset.action === 'ratio') {
      this.$emit('zodiacHeader:ratio');
      return;
    }
  }

  /**
   * @property {function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();
  }
}
