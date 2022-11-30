import React from "react";
import { PieChart, Pie } from "recharts";
import './PieGraph.css';



const PieGraph = (props) => {
  
    
    return (
      <div className="col-sm-12">
          <p> PieChart :</p>
         
         
          
          <PieChart width={400} height={400}>
      <Pie
        data={props.data}
        dataKey="end_year"
        cx={200}
        cy={200}
        outerRadius={90}
        fill="#8884d8"
      />
      <Pie
        data={props.data}
        dataKey="relevance"
        cx={200}
        cy={200}
        innerRadius={100}
        outerRadius={120}
        fill="#82ca9d"
        label
      />
    </PieChart>
    </div>
  );
}

export default PieGraph;