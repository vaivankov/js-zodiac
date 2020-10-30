import "./less/style.less";
import {createStore} from "./store/createStore";
import {rootReducer} from "./store/rootReducer";
import {Chart} from "./components/chart/Chart";
import {Table} from "./components/table/Table";
import {TableHeader} from "./components/table_header/TableHeader";
import {ZodiacHeader} from "./components/zodiac_header/ZodiacHeader";
import {Zodiac} from "./components/zodiac/Zodiac";

const store = createStore(rootReducer);

/**
 * Объект с параметрами для создания основного интерфейса программы
 * @type {Object}
 */
const options = {
  components: [TableHeader, Table, ZodiacHeader, Zodiac],
  store,
};

const chart = new Chart(
    '#app',
    options
);

chart.render();
