import { Paper } from "@material-ui/core";
import React, {useEffect, useState} from "react";
import { LineChart, XAxis, YAxis, Line, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getCollatzObjects } from "./calculateCollatz";


const CollatzGraph = (props) => {
    const [graphState, setGraphState] = useState([]);
    const [growth, setGrowth] = useState("");
    const [count, setCount] = useState("");
    const [maxNum, setMaxNum] = useState("");

    useEffect(() => {
        const obj = getCollatzObjects(props.num);
        setGraphState(obj.dataPoints);
        setGrowth(obj.growth.toFixed(2));
        setCount(obj.count);
        setMaxNum(obj.maxNum);
        props.setLeaderData([ ...props.leaderData, {
            name: props.name,
            maxNum: obj.maxNum,
            growth: obj.growth.toFixed(2),
            count: obj.count,
            num: props.num
        }]);
    }, []);

    return (
    <div className="CollatzGraph-Container">
        <Paper className="CollatzGraph-Paper">
            <LineChart width={1200} height={360} data={graphState}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                <XAxis dataKey="count" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
        </Paper>
        <div className="CollatzGraph-Info-Container">
        <Paper className="CollatzGraph-Info-Paper">
                <div className="CollatzGraph-Info-Paper-Title">Number Selected</div>
                <div className="CollatzGraph-Info-Paper-Body"> {props.num} </div>
            </Paper>
            <Paper className="CollatzGraph-Info-Paper">
                <div className="CollatzGraph-Info-Paper-Title">No of steps</div>
                <div className="CollatzGraph-Info-Paper-Body"> {count} </div>
            </Paper>
            <Paper className="CollatzGraph-Info-Paper">
                <div className="CollatzGraph-Info-Paper-Title">Growth %</div>
                <div className="CollatzGraph-Info-Paper-Body">{growth}</div>
            </Paper>
            <Paper className="CollatzGraph-Info-Paper">
                <div className="CollatzGraph-Info-Paper-Title">Highest point</div>
                <div className="CollatzGraph-Info-Paper-Body">{maxNum}</div>
            </Paper>
        </div>
    </div>
    );
}
export default CollatzGraph;