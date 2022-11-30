import React, { useEffect, useState } from "react";
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";
import { BarChart, Bar, Tooltip, Legend,CartesianGrid, XAxis, YAxis } from "recharts";
import './RecordList.css';
import LineGraph from "../LineGraph/LineGraph";
import RadarGraph from "../RadarGraph/RadarGraph";
import PieGraph from "../PieGraph/PieGraph";


function Recordlist(props) {
  const [solution, setSolution] = useState([]);
  const [filterVal, setFilterVal] = useState("");
 
 const [searchApi, setSearchApi] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      fetch(`http://localhost:7000/record`)
        .then((response) => response.json())
        .then((json) => {
          setSolution(json);
          setSearchApi(json);
        });
    };
    fetchData();
  }, []);

  const changeFilter = (e) => {
    if (e.target.value === "") {
      setSolution(searchApi);
    } else {
      const filterResult = searchApi.filter((item) =>
        item.topic.toLowerCase().includes(e.target.value.toLowerCase())||item.region.toLowerCase().includes(e.target.value.toLowerCase())||item.country.toLowerCase().includes(e.target.value.toLowerCase())|| item.pestle.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSolution(filterResult);
    }
    setFilterVal(e.target.value);
  };

 
  return (
    <>
      <div className="col-sm-12">
        <label>Search All filter</label>
        <input className="search" placeholder="search"value={filterVal}onInput={(e) => changeFilter(e)}/>
      </div>
        <LineGraph data={solution} />
        <RadarGraph data={solution}/>
        <PieGraph data={solution}/>

 
          {/* <div className="row">
              <div className=" col-sm-12 charts3">
        <p>LineChart Graph :</p>
          <LineChart width={700} height={450}data={solution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="region" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="start_year"
              stroke="purple"
              activeDot={{ r: 8 }}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="end_year"
              stroke="red"
            />
          </LineChart>
              </div> */}
              <div className=" col-sm-12 charts4">
        <p>BarChart Graph :</p>
          <BarChart width={700} height={450}  data={solution}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="end_year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pestle" fill="orange" />
            <Bar dataKey="relevance" fill="#82ca9d" />
          </BarChart>
              </div>
          {/* //  </div> */}
    

     
  </>
  );
}
export default Recordlist;
