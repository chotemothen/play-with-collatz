import React, {useEffect} from "react";

import rick from "./rickroll-roll.gif";
// const url = 'ws://localhost:8080'
// let connection = new WebSocket(url);;
const RickRoll = (props) => {
    
    // useEffect(() => {
         
    //     connection.onopen = () => {
    //         setInterval(() => {connection.send('Message From Client')}, 1000); 
    //       }
    //       connection.onerror = (error) => {
    //         console.log(`WebSocket error: ${error}`)
    //       }
                 
    // }, []);

    // connection.onmessage = (e) => {
    //     console.log(e.data)
    //      props.setIsRickRolled(e.data !== "Not Yet")
    //   }    
    
    return(
    <>
    {props.isRickRolled &&  <img src={rick} alt="loading..." />}
    </>
)};

export default RickRoll;
