import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { BarChart } from "recharts";
import BarChartInfoDisplay from "../Charts/BarChart";
import PieChartDataDisplay from "../Charts/PieChart";
import Table from "../Tables/Table";

export default ({ state, allInfo }) => (
  <Tabs>
    <TabList>
      <Tab>Table</Tab>
      <Tab>Bar Chart</Tab>
      <Tab>Pie Chart</Tab>
    </TabList>

    <TabPanel>
      <h2>Tables</h2>
      <Table state={state} />
    </TabPanel>
    <TabPanel>
      <h2>Bar Chart</h2>
      <BarChartInfoDisplay state={state} allInfo={allInfo} />
    </TabPanel>
    <TabPanel>
      <h2>Pie Chart</h2>
      <PieChartDataDisplay state={state} allInfo={allInfo} />
    </TabPanel>
  </Tabs>
);
