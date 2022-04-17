import React, {useState} from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import App from './App';
import RickRoll from './RickRoll';

const Routes = (props) => {
    const [isRickRolled, setIsRickRolled] = useState(false);
    return (  
    <Router>
        <Switch>
            <Route path="/rickroll">
                <RickRoll isRickRolled={isRickRolled} setIsRickRolled={setIsRickRolled}/>
            </Route>
            <Route path="/">
                <App isRickRolled={isRickRolled} setIsRickRolled={setIsRickRolled}/>
            </Route>
        </Switch>
    </Router>    
    );
}

export default Routes;
