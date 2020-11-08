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
   * @param {object} $root - Корневой тег элемента
   * @param {object} options - Параметры компонента
   */
  static className = ["block__header"];
  constructor($root, options) {
    super(
        $root,
        {
          name: "Table Header",
          listeners: ['click', 'mousedown'],
          ...options,
        }
    );

    this.$root = createTableHeader($root);
  }

  /**
   * @property {function} init - Инициализирует слушатели компонента
   * @return {void}
   */
  init() {
    super.init();

    this.$sub(
        'zodiacHeader:ratio',
        () => {
          this.$root.classes(
              'toggle',
              'visually-hidden'
          );
        }
    );
  }

  /**
   * @property {function} onClick -
   * Закидывает в Emitter событие при нажатии на компонент
   * @param {Event} evt - Событие
   * @return {void}
   */
  onClick(evt) {
    this.$emit(
        'tableHeader:click',
        $$(evt.target)
    );
  }

  /**
   * @property {function} onMouseDown -
   * Callback function при нажатии на input
   * @param {object} evt - Событие
   * @return {void}
   */
  onMousedown(evt) {
    const node = $$(evt.target);

    node.classes(
        'remove',
        'block__input--error'
    );

    if (node.containsClass('block__input') && node.value !== "") {
      node.value = "";
    }
  }
}
