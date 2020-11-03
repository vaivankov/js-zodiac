import "./less/style.less";
import {Router} from "./core/routes/Router";
import {ChartPage} from "./pages/ChartPage";
import {DashboardPage} from "./pages/DashboardPage";

new Router(
    '#app',
    {
      dashboard: DashboardPage,
      chart: ChartPage,
    }
);
