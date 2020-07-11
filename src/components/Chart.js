import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainChart: {
    maxWidth: "1000px",
    margin: "20px auto",
  },
}));

const Chart = () => {
  const classes = useStyles();
  const [ dailyData, setDailyData ] = useState([]);

  useEffect ( () => {
      async function fetchDailyData(){

        const  fetchApi = await fetch("https://covid19.mathdro.id/api/daily");
        console.log(fetchApi); 
        const fetchApiData = await fetchApi.json();
        console.log(fetchApiData);
        setDailyData(fetchApiData);


        
      }
      fetchDailyData();
  },[]);


      
      const LineChart = (

        dailyData.length !== 0 ? 
        (<Line
        data = {{
              labels: dailyData.map(({ reportDate }) => reportDate),
              datasets: [{
                data: dailyData.map(({ totalConfirmed }) => totalConfirmed),
                label: 'Infected',
                borderColor: '#3333ff',
                fill: true,


              },{
                data: dailyData.map(({ deaths: { total } }) => total),
                label: "deaths",
                borderColor: "red",
                backgroundColor: "rgba(255,0,0,0.3)",
                fill: true,

              },],
        }}
        
        
        />): null
      );

        return <div className={classes.mainChart}>{LineChart}</div>;
    
        
}
 
export default Chart;