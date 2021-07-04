import './App.css';
import React from 'react';

import Home  from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import SevenDays from './components/sevenDays/SevenDays';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/sevenDays">
            <SevenDays />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
