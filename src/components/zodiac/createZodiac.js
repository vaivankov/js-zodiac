/**
 * @module components/table/createZodiac
 * @property {Function} createZodiac - Создаёт блок zodiac
 * @param {Object} $root - Dom instance div контейнера
 * @return {Element} Блок с зодиаком
 */
export function createZodiac($root) {
  const content = '<img src="../../assets/zodiac.svg" alt="Зодиак">';
  $root.setHTML(content);
  return $root;
}
