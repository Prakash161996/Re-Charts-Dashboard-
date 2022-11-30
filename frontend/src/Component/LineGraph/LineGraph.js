import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip, Legend } from "recharts";
import "./lineChart.css";
function LineGraph(props) {
  
  return (
    <div className="row">
      <div className="col-sm-12 charts1">
        <p>LineChart Graph :</p>
        <LineChart width={700} height={450} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="country" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="intensity"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="end_year" stroke="#82ca9d" />
        </LineChart>
      </div>
      <div className="col-sm-12 charts2">
        <p>LineChart Graph :</p>
        <LineChart width={700} height={450} data={props.data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="topic" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="start_year"
            stroke="blue"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="likelihood" stroke="#82ca9d" />
        </LineChart>
      </div>
    </div>
  );
}

export default LineGraph;
