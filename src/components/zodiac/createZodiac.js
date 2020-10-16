/**
 * @module components/table/createZodiac
 * @property {Function} createZodiac Создаёт блок zodiac
 * @return {HTMLDivElement} Блок с зодиаком
 */
export function createZodiac() {
  const content = '<img src="../../assets/zodiac.svg" alt="Зодиак">';
  const block = document.createElement('div');

  block.classList.add(
      'block__body',
      'block__body--zodiac'
  );
  block.innerHTML = content;

  return block;
}
