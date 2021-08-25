import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";

import RiverRaceStats from "./components/riverRaceData/RiverRaceStats";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               <Route
                  exact
                  path="/riverrace/clan/:index"
                  component={RiverRaceStats}
               />
            </Switch>
         </Router>
      </Provider>
   );
}

export default App;
