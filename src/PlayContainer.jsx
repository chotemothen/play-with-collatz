import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import { Button, TextField, Typography } from "@material-ui/core";
import CollatzGraph from "./CollatzGraph";
const PlayContainer = (props) => {

    const [ goClicked, setGoClicked ] = useState(false);
    return (
        <React.Fragment>
        {!goClicked && <div className="PlayContainer-Div">
        <Paper className="PlayContainer-Paper">
        <Typography className="PlayContainer-Subtitle" variant="subtitle2">Enter your name and your lucky number to win!!</Typography>
        <div className="PlayContainer-Div">
            <TextField 
                className="PlayContainer-Input"
                id="outlined-name"
                label="Name"
                variant="outlined"
                value={props.name}
                onChange={(event) => {props.setName(event.target.value)}}
                />
            <TextField
                className="PlayContainer-Input"
                id="outlined-number"
                label="Lucky Number"
                variant="outlined"
                value={props.num}
                onChange={(event) => {props.setNum(event.target.value)}}
            />
        </div>
        <div className="PlayContainer-Go-Div">
            <Button
                classes={{root: "PlayContainer-Go"}} 
                variant="contained" color="primary"
                onClick={() => {setGoClicked(true)}}
                > GO!! </Button>
        </div>
        </Paper>
        </div>}
        {goClicked && <CollatzGraph 
            num={props.num}
            leaderData={props.leaderData}
            setLeaderData={props.setLeaderData}
            name={props.name}
        />}
        </React.Fragment>
    );
}

export default PlayContainer;