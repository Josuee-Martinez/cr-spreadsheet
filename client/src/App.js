import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import RiverRaceLog from "./components/riverRaceLog/RiverRaceLog";

import RiverRaceStats from "./components/riverRaceLog/RiverRaceStats";
import CurrentRiverRace from "./components/currentRiverRace/CurrentRiverRace";
import CurrentRiverRaceStats from "./components/currentRiverRace/CurrentRiverRaceStats";

import Atfame from "./components/at-fame/Atfame";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={CurrentRiverRace} />
               <Route exact path="/" component={Home} />
               <Route exact path="/riverracelog" component={RiverRaceLog} />

               <Route
                  exact
                  path="/riverrace/clan/:index"
                  component={RiverRaceStats}
               />
               <Route
                  exact
                  path="/currentriverrace"
                  component={CurrentRiverRaceStats}
               />
               <Route exact path="/atfame-spreadsheet" component={Atfame} />
            </Switch>
         </Router>
      </Provider>
   );
}

export default App;
