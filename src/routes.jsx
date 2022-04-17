import React, {useState} from "react";

import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import App from './App';
import RickRoll from './RickRoll';

const Routes = (props) => {
    const [isRickRolled, setIsRickRolled] = useState(false);
    return (  
    <Router  basename={process.env.PUBLIC_URL + "/"}>
        <Switch>
            <Route path="/rickroll">
                <RickRoll isRickRolled={isRickRolled} setIsRickRolled={setIsRickRolled}/>
            </Route>

            <Route exact path="/" component={App}>
                
            </Route>
        </Switch>
    </Router>    
    );
}

export default Routes;
