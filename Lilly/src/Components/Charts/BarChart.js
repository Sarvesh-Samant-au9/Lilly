import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartInfoDisplay = (props) => {
  const data01 = props.allInfo
    .filter((e) => e["State/UnionTerritory"] === props.state)
    .reverse()
    .splice(1, 5);
  console.log(data01);

  return props.state === undefined || props.allInfo.lenght < 1 ? (
    <h3>Select A State</h3>
  ) : (
    <LineChart
      width={700}
      height={300}
      data={data01}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="Date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="Confirmed"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="Cured" stroke="#82ca9d" />
    </LineChart>
  );
};

export default BarChartInfoDisplay;
