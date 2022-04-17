import React from "react";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

export const Header = (props) => {
    const handleChange = (event, newValue) => {
        props.setTab(newValue);
      };
    return (
        <header className="App-header">
        Break Collatz
        <Tabs
            value={props.tab}
            className="Tab"
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"    
        >
          <Tab label="Play" >  </Tab>
          <Tab label= "LeaderBoard" >  </Tab>
          <Tab label= "Lily" /> 
        </Tabs>
       </header>
    );
}