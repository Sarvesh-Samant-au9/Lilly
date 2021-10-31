import axios from "axios";
import React, { useEffect, useState } from "react";
import { PieChart, Pie } from "recharts";
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

const PieChartDataDisplay = (props) => {
  console.log(props);
  const data01 = props.allInfo
    .filter((e) => e["State/UnionTerritory"] === props.state)
    .reverse()
    .splice(1, 10);

  console.log(data01);
  return props.state === undefined || props.allInfo.lenght === 0 ? (
    <h3>Select A State</h3>
  ) : (
    <>
      <h3>{props.state}</h3>
      <p>The Pie Chart Data Belongs to last 10 Days Only</p>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="Confirmed"
          nameKey="Date"
          cx="50%"
          cy="50%"
          outerRadius={90}
          fill="#ffc6f4"
          label
        />
      </PieChart>
    </>
  );
};

export default PieChartDataDisplay;
