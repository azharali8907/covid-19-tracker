import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import { makeStyles } from "@material-ui/core/styles";
import GlobalData from './GlobalData';
import Tab from "@material-ui/core/Tab";
import CountryPicker from "./CountryPicker";



const useStyles = makeStyles((theme) => ({
    container: {
       
      display: "flex",
      textAlign: "center",
      justifyContent: "center",
      
      margin:'0px auto',
    },
    
  }));


export default function TabBtn() {
    const classes = useStyles();
    const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className={classes.container}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Global Data" />
          <Tab label="Select Country" />
        </Tabs>
      </div>
     {value === 0 && <GlobalData />}
      {value === 1 && <CountryPicker />} 
      
    </div>
  );
}