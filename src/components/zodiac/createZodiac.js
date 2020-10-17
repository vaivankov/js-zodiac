import {$$} from "../../utils/Dom";

/**
 * @module components/table/createZodiac
 * @property {Function} createZodiac Создаёт блок zodiac
 * @return {Element} Блок с зодиаком
 */
export function createZodiac() {
  const content = '<img src="../../assets/zodiac.svg" alt="Зодиак">';
  const container = $$.create('div');

  container.addClasses(
      'block__body',
      'block__body--zodiac'
  );
  container.setHTML(content);

  return container.$element;
}
