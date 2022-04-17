import React, { useState } from  "react";
import './App.css';
import { Header } from "./header";
import PlayContainer  from "./PlayContainer";
import LeaderBoard from "./LeaderBoard";
// import Lily from "./Lily";



function App({isRickRolled, setIsRickRolled}) {
  const [ tab, setTab ] = useState(0);
  const [ name, setName ] = useState("");
  const [ num, setNum ] = useState("");
  const [ leaderData, setLeaderData ] = useState([]);
  return (
    <div>
      <Header tab={tab} setTab={setTab} />
      <div className="Main-Container">
      {tab == 0 && <PlayContainer 
        name={name}
        setName={setName}
        num={num}
        setNum={setNum}
        leaderData={leaderData}
        setLeaderData={setLeaderData}
      /> }
      {tab == 1 && <LeaderBoard leaderData={leaderData}  /> }
      {/* { tab == 2  && <Lily isRickRolled={isRickRolled} setIsRickRolled={setIsRickRolled} />} */}

      </div>
    </div>
  );
}

export default App;
