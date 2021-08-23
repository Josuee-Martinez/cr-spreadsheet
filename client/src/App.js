import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import "./App.css";

import Home from "./components/Home";

function App() {
   return (
      <Provider store={store}>
         <Router>
            <Switch>
               <Route exact path="/" component={Home} />
            </Switch>
         </Router>
      </Provider>
   );
}

export default App;
