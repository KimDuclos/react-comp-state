//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

const touchdown = 7;
const fieldGoal = 3;

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScoreLions, setHomeScoreLions] = useState(3);
  const [awayScoreTigers, setAwayScoreTigers] = useState(7);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScoreLions}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScoreTigers}</div>
          </div>
        </div>
        <BottomRow />
      </section>

      {/* return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? <img src={white} /> : <img src={yellow} />}
    </div>
  ); */}

      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScoreLions(touchdown + homeScoreLions)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScoreLions(fieldGoal + homeScoreLions)} className="homeButtons__fieldGoal">Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScoreTigers(touchdown + awayScoreTigers)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScoreTigers(fieldGoal + awayScoreTigers)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
