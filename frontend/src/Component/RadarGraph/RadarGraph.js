import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import './RadarGraph.css';



const RadarGraph = (props) => {
  
    
    return (
      <div className="col-sm-12">
          <p> RadarChart :</p>
         
         
          
        <RadarChart
          cx={300}
          cy={250}
          outerRadius={150}
          width={500}
          height={500}
          data={props.data}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="start_year" />
          <PolarRadiusAxis />
          <Radar
            name="Region chart"
            dataKey="intensity"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.6}
          />
        </RadarChart>
             
          </div>
        );
      }
    
  


export default RadarGraph;