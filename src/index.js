import {Chart} from "./components/chart/Chart";
import {Table} from "./components/table/Table";
import {TableHeader} from "./components/table_header/TableHeader";
import {ZodiacHeader} from "./components/zodiac_header/ZodiacHeader";
import {Zodiac} from "./components/zodiac/Zodiac";
import "./less/style.less";

/**
 * Объект с параметрами для создания основного интерфейса программы
 * @type {Object}
 */
const options = {
  components: [TableHeader, Table, ZodiacHeader, Zodiac],
};

const chart = new Chart(
    '#app',
    options
);

chart.render();
console.log(chart);
