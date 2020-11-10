import {checkStorage} from '../../utils/utils';

function toHTML(key) {
  const model = checkStorage(key);
  const chartId = key.split('chart:')[1];
  const chartName = model.name;
  const date = new Date(Date.parse(model.lastOpenedDate));
  const dateISO = date.toISOString();
  const dateTime = date.toLocaleTimeString();
  const dateDate = date.toLocaleDateString();
  return `
    <a href="#chart/${chartId}" class="dashboard__chart-item">
      <span class="dashboard__chart-name">
        ${chartName}
      </span>
      <time
        class="dashboard__date"
        datetime="${dateISO}"
      >${dateTime + ' ' + dateDate}</time >
    </a>
  `;
}

function getAllKeys() {
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (!key.includes('chart:')) {
      continue;
    }
    keys.push(key);
  }
  return keys;
}

export function createChartList() {
  const keys = getAllKeys();

  return `
    <div class="dashboard__list-header">
      <span>Название</span>
      <span>Последнее открытие</span>
    </div>
    ${keys.map(toHTML).join('')}
  `;
}
